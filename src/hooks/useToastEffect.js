import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useToastsReducer } from './useToastsReducer'
import * as ToastsAction from '../actions/ToastsAction'

export const useToastEffect = () => {
  const [toasts, dispatch] = useToastsReducer()
  useEffect(() => {
    toasts.forEach(({ message, id, type }) => {
      toast(message, {
        onOpen: () => dispatch(ToastsAction.removeById(id)),
        type,
      })
    })
  }, [toasts, dispatch])
}
