import { useAppContext } from './useAppContext.js'

export const useToastsReducer = () => {
  const {
    state: { toasts },
    dispatch,
  } = useAppContext()
  return [toasts, dispatch]
}
