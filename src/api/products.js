import request from '../axios.js'
export async function getCategory () {
  const resp = await request({
    url: '/api/meituan/list/classify.json',
    method: 'get'
  })
  return resp
}
export async function getProductList () {
  const resp = await request({
    url: '/api/meituan/list/goodsList.json',
    method: 'get'
  })
  return resp
}
