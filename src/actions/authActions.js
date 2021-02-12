import * as HttpHelper from '../helpers/HttpHelper'
import * as ActionTypes from '../store/ActionTypes'
import * as ActionUtility from '../utils/ActionUtility'

export const addUser = (user) => {
  return ActionUtility.createAction(ActionTypes.ADD_USER, user)
}

export const logoutUser = () => {
  return ActionUtility.createAction(ActionTypes.LOGOUT_USER)
}

export const requestLogin = (values) => {
  return async (dispatch, getState) => {
    try {
      const resp = await HttpHelper.fetchWithOutToken(
        'auth/login',
        values,
        'POST',
      )
      const body = await resp.json()
      if (!body.ok) return body
      localStorage.setItem('token', body.token)
      dispatch(addUser(body))
      // TODO manejar el loading por medio de state
    } catch (error) {
      console.log('error:', error)
      // TODO añadir al state el error a manejar
    }
  }
}

export const startChecking = async () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem('token')
    if (!token) return null
    try {
      const resp = await HttpHelper.fetchWithToken('auth/renew')
      const body = await resp.json()
      console.log('body:', body)
    } catch (error) {}
  }
}
