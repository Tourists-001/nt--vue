import request from '../axios.js'

export async function getHostList () {
  const resp = await request({
    method: 'get',
    url: '/api/meituan/header/searchHotWords.json'
  })
  return resp
}

export async function getSearchList () {
  const resp = await request({
    method: 'get',
    url: '/api/meituan/header/search.json'
  })
  return resp
}
