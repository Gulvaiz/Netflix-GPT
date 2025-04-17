export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const API_options =  { method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,

}}

export const  IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hindi", name: "Hindi"}, {identifier: "spanish", name: "Spanish"} ]

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY