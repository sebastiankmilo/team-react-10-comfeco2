import { useAppContext } from './useAppContext.js'

export const useAuthReducer = () => {
  const {
    state: { auth },
    dispatch,
  } = useAppContext()
  return [auth, dispatch]
}
