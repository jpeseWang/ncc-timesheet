import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { initialState, reducer } from '../stores/AuthReducer'
interface AuthProviderProps {
  children: React.ReactNode | React.ReactElement;
}

export const AuthProvider = (props: AuthProviderProps): JSX.Element => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
