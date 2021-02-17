import environment from 'environment'

import * as HttpHelper from '../helpers/HttpHelper'
import * as ActionTypes from '../store/ActionTypes'
import * as ActionUtility from '../utils/ActionUtility'

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

export const authRequestingFinishedWithErrors = (message) => {
  return ActionUtility.createAction(
    ActionTypes.REQUESTING_AUTH_FINISHED_WITH_ERRORS,
    message,
  )
}

export const login = (email, password) => {
  return async (dispatch, getState) => {
    const enpoint = environment.auth.login
    await _authRequestUserPost(dispatch, enpoint, { email, password })
  }
}

export const register = (user) => {
  return async (dispatch, getState) => {
    const enpoint = environment.auth.register
    await _authRequestUserPost(dispatch, enpoint, user)
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
    dispatch(authRequestingFinishedWithErrors(response.message))
  } else {
    localStorage.setItem('token', response.token)
    dispatch(addAuth(response))
  }
}

const _authRequestUserPost = async (dispatch, endpoint, body = false) => {
  dispatch(authRequesting())
  const response = await HttpHelper.post(endpoint, body)
  dispatch(authRequestingFinished())
  if (response.error) {
    dispatch(authRequestingFinishedWithErrors(response.message))
  } else {
    localStorage.setItem('token', response.token)
    dispatch(addAuth(response))
  }
}
