import { request } from '@/utils/request.js'
// 登录
export const loginApi = data => {
  return request({
    url: `/login`,
    method: 'get',
    data
  })
}
// 获取昵称
export const getUserNameApi = data => {
  return request({
    url: `/getName`,
    method: 'get',
    data
  })
}

// 解绑
export const unbundleApi = data => {
  return request({
    url: `/logout`,
    method: 'get',
    data
  })
}

// 获取首页项目列表
export const getProjectList = data => {
  return request({
    url: `/project`,
    method: 'get',
    data
  })
}
// 获取消息列表
export const getMsgListApi = () => {
  return request({
    url: `/info`,
    method: 'get'
  })
}

// 获取项目详情
export const getProjectDetailApi = data => {
  return request({
    url: `/projectDetail`,
    method: 'get',
    data
  })
}

// 获取项目资料下载链接
export const getProjectDetailUrlApi = data => {
  return request({
    url: `/projectFile`,
    method: 'get',
    data,
    responseType: 'arraybuffer'
  })
}

// 获取项目历史跟踪记录
export const getProjectTrackApi = data => {
  return request({
    url: `/projectTrack`,
    method: 'get',
    data
  })
}
