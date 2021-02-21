import { useEffect } from 'react'
import * as AuthAction from '../actions/AuthAction'
import { useAuthState } from './useAuthState'
import { useContextDispatch } from './useContextDispatch'

export const useVerifyLoginEffect = () => {
  const { uid } = useAuthState()
  const dispatch = useContextDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token') || false
    if (!uid && !!token) {
      dispatch(AuthAction.verifyUserAuthenticatred())
    }
  }, [dispatch, uid])
}
