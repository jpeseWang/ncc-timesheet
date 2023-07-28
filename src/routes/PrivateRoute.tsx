
import { getAccessToken } from '../data/localStorage'
import { NotPermission } from '../layouts/Error/NotPermission'
interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const accessToken: string | null = getAccessToken()
  if (accessToken === null) {
    return <NotPermission />
  }
  return <>{props.children}</>
}
