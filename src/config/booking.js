// Ét sted for booking-opsætningen. Skifter klinikken bookingsystem,
// rettes kun denne fil – ikke popup'en, /booking/ og behandlingssiderne hver for sig.

// Direkte link til bookingflowet (bruges i popup-iframe og i struktureret data)
export const BOOKING_URL =
  'https://dsklinik.app4.geckobooking.dk/site/booking.php?show=new_booking&icCode=64c857a01938e8ee26f9d9f8fca49125b10711&bId=10711&dTpl=1&sSToken=7147f9ee6e0f4459509dbaca658244d6'

// Fuldsides-indlejring fra Geckobooking (bruges på /booking/)
export const BOOKING_EMBED_CODE = '08460306fabdf5c6936f451318b94416b10711'
export const BOOKING_EMBED_CONTAINER_ID = `gecko_${BOOKING_EMBED_CODE}`
export const BOOKING_EMBED_SCRIPT =
  `https://dsklinik.app4.geckobooking.dk/site/iframe.js?icCode=${BOOKING_EMBED_CODE}`

export const CLINIC_PHONE = '+45 53 50 37 50'
export const CLINIC_PHONE_HREF = 'tel:+4553503750'
