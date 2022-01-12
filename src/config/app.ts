export const APP_NAME = import.meta.env.VITE_APP_NAME

export const IMAGE_URL = import.meta.env.VITE_BASE_STATIC_URL //'https://mini-1304817606.file.myqcloud.com' // 静态资源的cos地址

export const HTTP_REQUEST_URL = import.meta.env.VITE_BASE_API //'http://172.16.218.117:3300'

export const HEADER = {
  'content-type': 'application/json',
}

export const HEADERPARAMS = {
  'content-type': 'application/x-www-form-urlencoded',
}

export const TOKENNAME = 'Authorization'
