#!/usr/bin/env bash
# Skriver en SFTP-batch til stdout, der uploader dist/ i en sikker raekkefoelge:
#   1) alle mapper (foraeldre foer boern, "-" saa eksisterende mapper ikke fejler)
#   2) alle filer, der ikke er HTML (assets, billeder, sitemap ...)
#   3) alle *.html
#   4) .htaccess og til allersidst deploy-version.txt
# Saa peger en ny index.html aldrig paa assets, der ikke er oppe endnu, og
# "Verify live site" bliver foerst groen, naar alt er uploadet.
#
# Brug: scripts/sftp-batch.sh <dist-mappe> <remote-maal>  > put.txt
set -euo pipefail
DIST="$1"
TARGET="$2"

# Citer en sti til sftp-batch: omgiv med "..." og escape \ og ".
q() { local s="${1//\\/\\\\}"; s="${s//\"/\\\"}"; printf '"%s"' "$s"; }

cd "$DIST"
export LC_ALL=C

printf 'cd %s\n' "$(q "$TARGET")"
printf 'lcd %s\n' "$(q "$PWD")"

find . -mindepth 1 -type d -print | sed 's#^\./##' | sort | while IFS= read -r d; do
  printf -- '-mkdir %s\n' "$(q "$d")"
done

put() { printf 'put %s %s\n' "$(q "$1")" "$(q "$1")"; }

find . -type f ! -name '*.html' ! -path './.htaccess' ! -path './deploy-version.txt' -print \
  | sed 's#^\./##' | sort | while IFS= read -r f; do put "$f"; done

# Undermapper foer forsiden, saa /index.html er den sidste HTML-fil
find . -type f -name '*.html' ! -path './index.html' -print \
  | sed 's#^\./##' | sort | while IFS= read -r f; do put "$f"; done
[ -f index.html ] && put index.html

[ -f .htaccess ] && put .htaccess
[ -f deploy-version.txt ] && put deploy-version.txt
exit 0
