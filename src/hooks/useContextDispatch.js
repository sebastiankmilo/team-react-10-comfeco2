import { useAppContext } from './useAppContext'

export const useContextDispatch = () => {
  const { dispatch } = useAppContext()
  return dispatch
}
