import React from 'react'
import { IAuthContext } from '../interfaces/AuthInterfaces'

export const AuthContext = React.createContext<IAuthContext | null>(null)
