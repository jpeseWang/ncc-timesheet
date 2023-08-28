import { EActionType } from '../interfaces/ProjectEnum'
import {
  IBranchFilter,
  ICustomer,
  IProject,
  IProjectQuantity,
  ITask,
  IUserNotPagging,
  ProjectActions
} from '../interfaces/ProjectType'

export const getAllProjects = (projectList: IProject[]): ProjectActions => {
  return {
    type: EActionType.Get_all_projects,
    payload: projectList
  }
}

export const getProjectQuantity = (
  projectQuantity: IProjectQuantity[]
): ProjectActions => {
  return {
    type: EActionType.Get_project_quantity,
    payload: projectQuantity
  }
}

export const filterProjectStatus = (projectStatus: number): ProjectActions => {
  return {
    type: EActionType.Filter_project_status,
    payload: projectStatus
  }
}

export const searchProject = (searchProject: string): ProjectActions => {
  return {
    type: EActionType.Search_project,
    payload: searchProject
  }
}

export const deleteProject = (projectId: number): ProjectActions => {
  return {
    type: EActionType.Delete_project,
    payload: projectId
  }
}

export const activeProject = (projectId: number): ProjectActions => {
  return {
    type: EActionType.Active_project,
    payload: projectId
  }
}

export const deactiveProject = (projectId: number): ProjectActions => {
  return {
    type: EActionType.Deactive_project,
    payload: projectId
  }
}

export const getAllCustomer = (customersList: ICustomer[]): ProjectActions => {
  return {
    type: EActionType.Get_all_customers,
    payload: customersList
  }
}

export const getAllUserNotPagging = (
  usersList: IUserNotPagging[]
): ProjectActions => {
  return {
    type: EActionType.Get_all_user_not_pagging,
    payload: usersList
  }
}

export const getAllBranchFilter = (
  branchesList: IBranchFilter[]
): ProjectActions => {
  return {
    type: EActionType.Get_all_branch_filter,
    payload: branchesList
  }
}

export const getAllTask = (tasksList: ITask[]): ProjectActions => {
  return {
    type: EActionType.Get_all_task,
    payload: tasksList
  }
}
