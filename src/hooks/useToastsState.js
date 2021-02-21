import { useContextState } from './useContextState.js'

export const useToastsState = () => {
  const { toasts } = useContextState()
  return toasts
}
