import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { useToastsState } from './useToastsState'
import { useContextDispatch } from './useContextDispatch'

import * as ToastsAction from '../actions/ToastsAction'

export const useToastEffect = () => {
  const toasts = useToastsState()
  const dispatch = useContextDispatch()
  useEffect(() => {
    toasts.forEach(({ message, id, type }) => {
      toast(message, {
        onOpen: () => dispatch(ToastsAction.removeById(id)),
        type,
      })
    })
  }, [toasts, dispatch])
}
