import React from 'react'
import { IProjectContext } from '../interfaces/ProjectType'
export const ProjectContext = React.createContext<IProjectContext | null>(null)
