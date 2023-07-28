/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface ILoginFormInput {
  userNameOrEmailAddress: string
  password: string
  rememberClient: boolean
}

export interface IAuthToken {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: 0
  userId: number
}

export interface IUser {
  id: number
  name: string
  emailAddress: string
  isActive: boolean
  type: 0 | 1 | 2
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  avatarFullPath: string
  jobTitle: string
  branchId: number
  branchDisplayName: string
  branchColor: string
}

export interface ICurrentUser {
  name: string
  surname: string
  userName: string
  emailAddress: string
  avatarPath: string
  avatarFullPath: string
  morningWorking: string
  morningStartAt: string
  morningEndAt: string
  afternoonWorking: string
  afternoonStartAt: string
  afternoonEndAt: string
  type: string
  level: number
  sex: boolean
  id: number
}

export interface ILogin {
  currentUserToken: string | null
  isFetching: boolean
}

export interface IGetCurrentLoginInfo {
  currentUser: ICurrentUser | null
  isFetching: boolean
}

export interface IAuthState {
  login: {
    currentUserToken: string | null
    isFetching: boolean
  }
  getCurrentLoginInfo: {
    currentUser: ICurrentUser | null
    isFetching: boolean
  }
}

export interface ILoginSuccess {
  type: string
  payload: string | null
}

export interface IGetCurrentUserSuccess {
  type: string
  payload: ICurrentUser | null
}

export type IAuthActions = ILoginSuccess | IGetCurrentUserSuccess

export interface IAuthContext {
  state: IAuthState
  dispatch: React.Dispatch<IAuthActions>
}
