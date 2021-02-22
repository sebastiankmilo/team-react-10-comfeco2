import * as ActionTypes from '../store/ActionTypes'

export const initialState = {
  isRequesting: false,
  authenticated: false,
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_AUTH:
      return { ...initialState, ...action.payload, authenticated: true }
    case ActionTypes.LOGOUT_AUTH:
      return { ...initialState }
    case ActionTypes.REQUESTING_AUTH:
      return { ...state, isRequesting: true }
    case ActionTypes.REQUESTING_AUTH_FINISHED:
      return { ...state, isRequesting: false }
    default:
      return state
  }
}
