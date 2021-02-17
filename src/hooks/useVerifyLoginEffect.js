import { useEffect } from 'react'
import * as AuthAction from '../actions/AuthAction'
import { useAuthReducer } from './useAuthReducer'

export const useVerifyLoginEffect = () => {
  const [{ uid }, dispatch] = useAuthReducer()
  useEffect(() => {
    const token = localStorage.getItem('token') || false
    if (!uid && !!token) {
      dispatch(AuthAction.verifyUserAuthenticatred())
    }
  }, [dispatch, uid])
}
