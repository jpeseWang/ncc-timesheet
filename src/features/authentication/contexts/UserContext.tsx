/* eslint-disable @typescript-eslint/member-delimiter-style */
import React, { ReactNode } from 'react'
import { setAccessToken } from '../../../data/localStorage'
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
}

const UserContext = React.createContext<UserContextValue>({
  user: { username: '', auth: false },
  loginContext: () => {},
  logout: () => {}
})

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = React.useState<User>({ username: '', auth: false })

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

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
