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

export interface ICurrentUser {
  name: string
  userName: string
  emailAddress: string
  avatarPath: string
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
