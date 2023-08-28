import { instance } from '../../../services/Services'
import { toast } from 'react-toastify'
import { ICurrentUser } from '../interfaces/AuthInterfaces'
export const loginAPI = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await instance.post('/login', {
      email,
      password
    })
    return response.data
  } catch (error: any) {
    toast.error(error.response.data.error.details)
    throw error
  }
}
export const getCurrentUserAPI = async (): Promise<ICurrentUser> => {
  try {
    const res = await instance.get(
      '/services/app/Session/GetCurrentLoginInformations'
    )
    return res.data.result.user
  } catch {
    toast.error('Get information failed!')
    throw new Error('Get information failed!')
  }
}
