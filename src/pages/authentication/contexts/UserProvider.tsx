/* eslint-disable @typescript-eslint/member-delimiter-style */
import React, { ReactNode } from 'react'
import { instance } from '../../../services/Services'
import { setAccessToken } from '../../../data/localStorage'
import { ICurrentUser, IUser } from '../interfaces/AuthInterfaces'
import { UserContext } from './UserContext'
interface UserProviderProps {
  children: ReactNode
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = React.useState<IUser>({ username: '', auth: false })
  const [currentUser, setCurrentUser] = React.useState<ICurrentUser | null>(
    null
  )
  const loginContext = (username: string, token: string): void => {
    setUser({
      username,
      auth: true
    })
    setAccessToken(token)
    localStorage.setItem('username', username)
  }

  const logout = (): void => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('username')
    setUser({
      username: '',
      auth: false
    })
  }

  const getCurrentUser = async (): Promise<void> => {
    try {
      const res = await instance.get(
        '/services/app/Session/GetCurrentLoginInformations'
      )
      const currentUserData = res.data.result.user
      const currentUser: ICurrentUser = {
        name: currentUserData.name,
        surname: currentUserData.surname,
        userName: currentUserData.userName,
        emailAddress: currentUserData.emailAddress,
        avatarFullPath: currentUserData.avatarFullPath,
        morningWorking: currentUserData.morningWorking,
        morningStartAt: currentUserData.morningStartAt,
        morningEndAt: currentUserData.morningEndAt,
        afternoonWorking: currentUserData.afternoonWorking,
        afternoonStartAt: currentUserData.afternoonStartAt,
        afternoonEndAt: currentUserData.afternoonEndAt,
        type: currentUserData.type,
        level: currentUserData.level,
        id: currentUserData.id
      }
      setCurrentUser(currentUser)
      setUser({
        username: currentUser.userName,
        auth: true
      })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <UserContext.Provider
      value={{ user, loginContext, logout, getCurrentUser, currentUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
