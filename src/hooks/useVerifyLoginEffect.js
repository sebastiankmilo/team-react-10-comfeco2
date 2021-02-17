import { useEffect } from 'react'
import * as AuthActions from '../actions/AuthActions'
import { useAuthReducer } from './useAuthReducer'

export const useVerifyLoginEffect = () => {
  const [{ uid }, dispatch] = useAuthReducer()
  useEffect(() => {
    const token = localStorage.getItem('token') || false
    if (!uid && !!token) {
      dispatch(AuthActions.verifyUserAuthenticatred())
    }
  }, [dispatch, uid])
}
