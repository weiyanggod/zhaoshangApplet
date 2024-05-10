const url_all = {
  DEV: 'https://zsxmgj.jxufida.com:8826/zs' // 开发
}
let BASEURL = url_all['DEV']

export const request = (options = {}) => {
  return new Promise((resolve, rejects) => {
    handleRequest(options, resolve, rejects)
  })
}
function handleRequest(options, resolve, reject) {
  uni.request({
    url: BASEURL + options.url,
    method: options.method,
    data: options.data,
    responseType: options.responseType,
    success: response => {
      return resolve(response.data)
    },
    fail: fail => {
      return reject(fail)
    }
  })
}
