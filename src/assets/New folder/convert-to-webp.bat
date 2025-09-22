@echo off
setlocal enabledelayedexpansion

rem === مسیر cwebp و تنظیمات کیفیت ===
set "CWEBP=C:\webp\cwebp.exe"
set "Q=80"
set "OUTDIR=%CD%\webp-output"

if not exist "%CWEBP%" (
  echo [ERROR] cwebp not found at: %CWEBP%
  echo Please check the path above.
  pause
  exit /b 1
)

if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo.
echo Input folder : %CD%
echo Output folder: %OUTDIR%
echo WEBP quality : %Q%%
echo.

rem ---------- تبدیل PNG/JPG/JPEG ----------
for %%F in (*.png) do if exist "%%~fF" (
  echo [PNG ] "%%~nxF" -> "%OUTDIR%\%%~nF.webp"
  "%CWEBP%" -q %Q% "%%~fF" -o "%OUTDIR%\%%~nF.webp"
)
for %%F in (*.jpg) do if exist "%%~fF" (
  echo [JPG ] "%%~nxF" -> "%OUTDIR%\%%~nF.webp"
  "%CWEBP%" -q %Q% "%%~fF" -o "%OUTDIR%\%%~nF.webp"
)
for %%F in (*.jpeg) do if exist "%%~fF" (
  echo [JPEG] "%%~nxF" -> "%OUTDIR%\%%~nF.webp"
  "%CWEBP%" -q %Q% "%%~fF" -o "%OUTDIR%\%%~nF.webp"
)

rem ---------- کپی فرمت‌های دیگر ----------
for %%F in (*.webp *.svg *.avif) do if exist "%%~fF" (
  echo [COPY] "%%~nxF" -> "%OUTDIR%\%%~nxF"
  copy /Y "%%~fF" "%OUTDIR%\%%~nxF" >nul
)

echo.
echo Done! Files are in: %OUTDIR%
pause