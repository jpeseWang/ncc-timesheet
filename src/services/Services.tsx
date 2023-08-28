import axios from 'axios'
import { getAccessToken } from '../data/localStorage'
const instance = axios.create({
  // baseURL: process.env.apiURL
  baseURL: 'https://reqres.in/api'
})

instance.interceptors.request.use((request) => {
  const accessToken: string | null = getAccessToken()
  if (accessToken != null) {
    const accessHeader = `Bearer ${accessToken}`
    if (request.headers != null) {
      request.headers.Authorization = accessHeader
    }
  }
  return request
})
export { instance }
