import { request } from '@/utils/request.js'
export const loginApi = code => {
  return request({
    url: `/api/openid?code=${code}`,
    method: 'GET'
  })
}
