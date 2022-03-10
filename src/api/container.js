import request from '../axios.js'

export async function getSliderList () {
  const resp = await request({
    url: '/api/meituan/index/nav.json',
    method: 'get'
  })
  return resp
}
export async function getMainList () {
  const resp = await request({
    url: '/api/meituan/index/resultsByKeywords.json',
    method: 'get'
  })
  return resp
}
