import { useAuthState } from './useAuthState'
import { useRedirectWithFlag } from './useRedirectWithFlag'
import { RouteMap } from '../constants/RouteMap'

export const useRedirectIfAuthenticated = () => {
  const { authenticated } = useAuthState()
  useRedirectWithFlag({ url: RouteMap.Dashboard.root(), flag: authenticated })
}
