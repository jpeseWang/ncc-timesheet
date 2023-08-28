import { useContext } from 'react'
import { IProjectContext } from '../pages/Project Management/interfaces/ProjectType'
import { ProjectContext } from '../pages/Project Management/contexts/ProjectContext'
export const useProjectContext = (): IProjectContext => {
  const context = useContext(ProjectContext)
  return context as IProjectContext
}
