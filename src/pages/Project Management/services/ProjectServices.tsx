import { toast } from 'react-toastify'
import { instance } from '../../../services/Services'

export const getAllProjectAPI = async (
  status: number | string,
  search: string
): Promise<any> => {
  try {
    const response = await instance.get(
      `/services/app/Project/GetAll?status=${status}&search=${search}`
    )
    return response.data.result
  } catch {
    toast.error('Can not get all projects')
    throw new Error('Can not get all projects')
  }
}

export const getProjectByIdAPI = async (id: number): Promise<any> => {
  try {
    const response = await instance.get(`/services/app/Project/Get?input=${id}`)
    return response.data.result
  } catch {
    toast.error('Cannot get detail project!')
    throw new Error('Cannot get detail project!')
  }
}

export const getProjectQuantityAPI = async (): Promise<any> => {
  try {
    const response = await instance.get(
      '/services/app/Project/GetQuantityProject'
    )
    return response.data.result
  } catch {
    toast.error('Cannot get project quantity!')
    throw new Error('Cannot get project quantity!')
  }
}

export const getAllCustomerAPI = async (): Promise<any[]> => {
  try {
    const response = await instance.get('/services/app/Customer/GetAll')
    return response.data.result
  } catch {
    toast.error('Cannot get all customers!')
    throw new Error('Cannot get all customers!')
  }
}

export const getAllTaskAPI = async (): Promise<any[]> => {
  try {
    const response = await instance.get('/services/app/Task/GetAll')
    return response.data.result
  } catch {
    toast.error('Cannot get all tasks!')
    throw new Error('Cannot get all tasks!')
  }
}
export const getTimesheetTeams = async (
  startDate: string,
  endDate: string
): Promise<any[]> => {
  try {
    const response = await instance.get(
      `/services/app/MyTimesheets/GetTimesheetReportHours?startDate=${startDate}&endDate=${endDate}`
    )
    return response.data.result
  } catch (error) {
    console.error('Error fetching timesheet teams:', error)
    throw error
  }
}
