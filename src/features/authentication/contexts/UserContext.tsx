/* eslint-disable @typescript-eslint/member-delimiter-style */
import React, { ReactNode } from 'react'
import { setAccessToken } from '../../../data/localStorage'
import { ICurrentUser } from '../interfaces/AuthInterfaces'
import { instance } from '../../../services/ProjectService'
interface UserProviderProps {
  children: ReactNode
}

interface User {
  username: string
  auth: boolean
}

interface UserContextValue {
  user: User
  loginContext: (username: string, accessToken: string) => void
  logout: () => void
  currentUser: ICurrentUser | null
  getCurrentUser: () => Promise<void>
}

const UserContext = React.createContext<UserContextValue>({
  user: { username: '', auth: false },
  loginContext: () => {},
  logout: () => {},
  currentUser: null,
  getCurrentUser: async () => {}
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = React.useState<User>({ username: '', auth: false })
  const [currentUser, setCurrentUser] = React.useState<ICurrentUser | null>(
    null
  )
  const loginContext = (username: string, accessToken: string): void => {
    setUser({
      username,
      auth: true
    })
    setAccessToken(accessToken)
    localStorage.setItem('username', username)
  }

  const logout = (): void => {
    localStorage.removeItem('acccessToken')
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
        avatarPath: currentUserData.avatarPath,
        avatarFullPath: currentUserData.avatarFullPath,
        morningWorking: currentUserData.morningWorking,
        morningStartAt: currentUserData.morningStartAt,
        morningEndAt: currentUserData.morningEndAt,
        afternoonWorking: currentUserData.afternoonWorking,
        afternoonStartAt: currentUserData.afternoonStartAt,
        afternoonEndAt: currentUserData.afternoonEndAt,
        type: currentUserData.type,
        level: currentUserData.level,
        sex: currentUserData.sex,
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

export { UserContext, UserProvider }
