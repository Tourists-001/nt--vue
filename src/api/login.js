import request from '../axios.js'
export async function login (params) {
  const resp = await request({
    url: 'https://qcyp1k.api.cloudendpoint.cn/eveyDayB',
    method: 'get',
    params
  })
  return resp
}

export async function Regist (params) {
  const resp = await request({
    url: '/api/meituan/list/goodsList.json',
    method: 'get',
    params
  })
  return resp
}
