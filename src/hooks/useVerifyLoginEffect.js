import { useEffect } from 'react'
import * as AuthAction from '../actions/AuthAction'
import { useAuthState } from './useAuthState'
import { useContextDispatch } from './useContextDispatch'

export const useVerifyLoginEffect = () => {
  const { authenticated } = useAuthState()
  const dispatch = useContextDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token') || false
    if (!authenticated && !!token) {
      dispatch(AuthAction.verifyUserAuthenticatred())
    }
  }, [dispatch, authenticated])
}
