const url_all = {
  DEV: 'http://192.168.3.175:8043' // 开发
}
let BASEURL = url_all['DEV']
export const request = (options = {}) => {
  console.log(options)
  return new Promise((resolve, rejects) => {
    handleRequest(options, resolve, rejects)
  })
}
function handleRequest(options, resolve, reject) {
  uni.request({
    url: BASEURL + options.url,
    method: options.method,
    data: options.data,
    success: response => {
      return resolve(response.data)
    },
    fail: fail => {
      console.log('fail', fail)
      return reject(fail)
    }
  })
}
