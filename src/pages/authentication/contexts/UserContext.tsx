/* eslint-disable @typescript-eslint/member-delimiter-style */
import React from 'react'
import { ICurrentUser, IUser } from '../interfaces/AuthInterfaces'
interface UserContextValue {
  user: IUser
  loginContext: (username: string, accessToken: string) => void
  logout: () => void
  currentUser: ICurrentUser | null
  getCurrentUser: () => Promise<void>
}

export const UserContext = React.createContext<UserContextValue>({
  user: { username: '', auth: false },
  loginContext: () => {},
  logout: () => {},
  currentUser: null,
  getCurrentUser: async () => {}
})
