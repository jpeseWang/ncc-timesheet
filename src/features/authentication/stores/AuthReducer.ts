import { getAccessToken } from '../../../data/localStorage'
import { EActionType } from './AuthActions'
import {
  IAuthActions,
  IAuthState,
  ICurrentUser
} from '../interfaces/AuthInterfaces'

export const initialState: IAuthState = {
  login: {
    currentUserToken: getAccessToken(),
    isFetching: true
  },
  getCurrentLoginInfo: {
    currentUser: null,
    isFetching: true
  }
}

export const reducer = (
  state = initialState,
  action: IAuthActions
): IAuthState => {
  switch (action.type) {
    case EActionType.LOGIN: {
      return {
        ...state,
        login: {
          currentUserToken: action.payload as string,
          isFetching: false
        }
      }
    }
    case EActionType.GET_CURRENT_USER: {
      return {
        ...state,
        getCurrentLoginInfo: {
          currentUser: action.payload as ICurrentUser,
          isFetching: false
        }
      }
    }
    case EActionType.LOGOUT: {
      return {
        ...state,
        login: {
          currentUserToken: null,
          isFetching: false
        },
        getCurrentLoginInfo: {
          currentUser: null,
          isFetching: false
        }
      }
    }
    default:
      return state
  }
}
