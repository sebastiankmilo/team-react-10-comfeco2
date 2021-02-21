import { useContextState } from './useContextState.js'

export const useAuthState = () => {
  const { auth } = useContextState()
  return auth
}
