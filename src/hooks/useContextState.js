import { useAppContext } from './useAppContext'

export const useContextState = () => {
  const { state } = useAppContext()
  return state
}
