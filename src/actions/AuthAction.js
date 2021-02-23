import environment from 'environment'

import User from '../models/User'
import * as HttpHelper from '../helpers/HttpHelper'
import * as ActionTypes from '../store/ActionTypes'
import * as ActionUtility from '../utils/ActionUtility'
import * as ToastsAction from './ToastsAction'

export const addAuth = (user) => {
  return ActionUtility.createAction(ActionTypes.ADD_AUTH, user)
}

export const logoutAuth = () => {
  localStorage.removeItem('token')
  return ActionUtility.createAction(ActionTypes.LOGOUT_AUTH)
}

export const authRequesting = () => {
  return ActionUtility.createAction(ActionTypes.REQUESTING_AUTH)
}

export const authRequestingFinished = () => {
  return ActionUtility.createAction(ActionTypes.REQUESTING_AUTH_FINISHED)
}

export const login = (email, password) => {
  return async (dispatch, getState) => {
    const enpoint = environment.auth.login
    await _authRequestUserPost(dispatch, enpoint, { email, password })
  }
}

export const requestResetPassword = (email) => {
  return async (dispatch, getState) => {
    dispatch(authRequesting())
    const endpoint = environment.auth.recovery
    const response = await HttpHelper.post(endpoint, { email })
    dispatch(authRequestingFinished())
    if (response.error) {
      dispatch(ToastsAction.addError(response.message))
    }
  }
}

export const register = (user) => {
  return async (dispatch, getState) => {
    const endpoint = environment.auth.register
    await _authRequestUserPost(dispatch, endpoint, user)
  }
}

export const verifyUserAuthenticatred = () => {
  return async (dispatch, getState) => {
    const enpoint = environment.auth.refresh
    await _authRequestUserGet(dispatch, enpoint)
  }
}

const _authRequestUserGet = async (dispatch, endpoint) => {
  const response = await HttpHelper.getAuth(endpoint)
  if (response.error) {
    dispatch(logoutAuth())
    dispatch(ToastsAction.addError(response.message))
  } else {
    localStorage.setItem('token', response.token)
    dispatch(addAuth(_createUser(response)))
  }
}

const _authRequestUserPost = async (dispatch, endpoint, body = false) => {
  dispatch(authRequesting())
  const response = await HttpHelper.post(endpoint, body)
  dispatch(authRequestingFinished())
  if (response.error) {
    dispatch(ToastsAction.addError(response.message))
  } else {
    localStorage.setItem('token', response.token)
    console.log('PRUEBA', response)
    dispatch(addAuth(_createUser(response)))

    dispatch(ToastsAction.addSuccess('Ha iniciado sesión'))
  }
}

const _createUser = (data) => new User(data)
