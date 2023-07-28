import { useNavigate } from 'react-router-dom'
import { getAccessToken } from '../data/localStorage'

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const nagivate = useNavigate()
  const { children } = props
  const accessToken: string | null = getAccessToken()
  if (accessToken === null) {
    nagivate('/login')
  }
  return children
}
