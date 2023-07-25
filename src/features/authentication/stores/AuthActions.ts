import {
  IAuthActions,
  IGetCurrentLoginInfo,
  ILogin
} from '../interfaces/AuthInterfaces'
export enum EActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  GET_CURRENT_USER = 'GET_CURRENT_USER '
}

export const loginSuccess = ({ currentUserToken }: ILogin): IAuthActions => ({
  type: EActionType.LOGIN,
  payload: currentUserToken
})

export const getCurrentLoginInfoSuccess = ({
  currentUser
}: IGetCurrentLoginInfo): IAuthActions => ({
  type: EActionType.GET_CURRENT_USER,
  payload: currentUser
})
