import { instance } from '../../../services/ProjectService'
import { toast } from 'react-toastify'
export const loginAPI = async (
  userNameOrEmailAddress: string,
  password: string,
  rememberClient: boolean
): Promise<any> => {
  try {
    const response = await instance.post('/TokenAuth/Authenticate', {
      userNameOrEmailAddress,
      password,
      rememberClient
    })
    return response.data
  } catch (error: any) {
    toast.error(error.response.data.error.details)
    throw error
  }
}
