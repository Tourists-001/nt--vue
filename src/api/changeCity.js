import request from '../axios.js'

export async function cityList () {
  const resp = await request({
    url: '/api/meituan/city/province.json',
    methods: 'get'
  })
  return resp
}
export async function hotList () {
  const resp = await request({
    url: '/api/meituan/city/hot.json',
    methods: 'get'
  })
  return resp
}

export async function searchList () {
  const resp = await request({
    url: '/api/meituan/city/recents.json',
    methods: 'get'
  })
  return resp
}

export async function currentPos () {
  const resp = await request({
    url: '/api/meituan/city/getPosition.json',
    methods: 'get'
  })
  return resp
}

export async function getCityList () {
  const resp = await request({
    url: '/api/meituan/city/cityList.json',
    methods: 'get'
  })
  return resp
}
