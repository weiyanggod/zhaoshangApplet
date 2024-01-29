import { request } from '@/utils/request.js'
export const users = params => {
  return request({
    url: '/users',
    method: 'GET',
    params
  })
}
