/* eslint-disable @typescript-eslint/member-delimiter-style */
import { ERoles, EUserType } from './ProjectEnum'
export interface IProject {
  customerName: string
  name: string
  code: string
  status: number
  pms: string[]
  activeMember: number
  projectType: number
  timeStart: string
  timeEnd: string
  id: number
}

export interface IGetAllProject {
  status: string | number
  search: string
}

export interface ICustomer {
  id?: number
  name: string
  code: string
  address: string
}

export interface ITask {
  id: number
  name: string
  type: number
  isDeleted: boolean
  billable: boolean
}

export interface IUserNotPagging {
  id: number
  name: string
  emailAddress: string
  isActive: boolean
  type: EUserType
  jobTitle: string | null
  level: number
  userCode: string | null
  avatarPath: string
  avatarFullPath: string
  branch: number
  branchColor: string | null
  branchDisplayName: string | null
  branchId: number | null
  positionType?: ERoles
}

export interface IBranchFilter {
  id: number
  name: string
  displayName: string
}

export interface IProjectQuantity {
  status: number
  quantity: number
}

export interface IProjectState {
  allProjects: IProject[]
  projectQuantity: IProjectQuantity[]
  filter: {
    projectStatus: number
    searchText: string
  }
  currentProject: {
    allCustomers: ICustomer[]
    currentPage: number
    selectedMember: IUserNotPagging[]
    unSelectedMember: IUserNotPagging[]
    selectedTask: ITask[]
    unSelectedTask: ITask[]
    newProject: IProjectData
  }
  viewProjectStatistic: {
    startDateIndex: number
    timeUnit: string
  }
  allTasks: ITask[]
  allUserNotPagging: IUserNotPagging[]
  allBranchFilter: IBranchFilter[]
  taskStatistic: ITasksStatistic[]
  teamStatistic: ITeamsStatistic[]
}

export interface IProjectTargetUsers {
  userId: number
  roleName: string
  id: number
}

export interface ITasksStatistic {
  billable: boolean
  billableWorkingTime: number
  taskId: number
  taskName: string
  totalWorkingTime: number
}

export interface ITeamsStatistic {
  userId: number
  userName: string
  projectUserType: number
  totalWorkingTime: number
  billableWorkingTime: number
}

export interface ITaskData {
  taskId: number
  billable: boolean
}
export interface IUserData {
  userId: number
  type: number
}

export interface IProjectData {
  name: string
  code: string
  timeStart: string
  timeEnd: string
  note: string
  status: number
  projectType: number | null
  customerId: number | null
  tasks: ITaskData[]
  users: IUserData[]
  projectTargetUsers: IProjectTargetUsers[]
  komuChannelId: string
  isNotifyToKomu: boolean
  isAllUserBelongTo: boolean
  id?: number
}

// define type for action
export interface IGetAllProjectsSuccess {
  type: string
  payload: IProject[]
}

export interface IGetProjectQuantity {
  type: string
  payload: IProjectQuantity[]
}

export interface IFilterProjectStatus {
  type: string
  payload: number
}

export interface ISearchProject {
  type: string
  payload: string
}

export interface IDeleteProject {
  type: string
  payload: number
}

export interface IActiveProject {
  type: string
  payload: number
}

export interface IDeactiveProject {
  type: string
  payload: number
}

export interface IGetAllCustomers {
  type: string
  payload: ICustomer[]
}

export interface IGetAllUserNotPagging {
  type: string
  payload: IUserNotPagging[]
}

export interface IGetAllBranchFilter {
  type: string
  payload: IBranchFilter[]
}

export interface IGetAllTask {
  type: string
  payload: ITask[]
}

export type ProjectActions =
  | IGetAllProjectsSuccess
  | IGetProjectQuantity
  | IFilterProjectStatus
  | ISearchProject
  | IDeleteProject
  | IActiveProject
  | IDeactiveProject
  | IGetAllCustomers
  | IGetAllUserNotPagging
  | IGetAllBranchFilter
  | IGetAllTask

export interface IProjectContext {
  state: IProjectState
  dispatch: React.Dispatch<ProjectActions>
}
