import * as ActionTypes from '../store/ActionTypes'

export const initialState = {
  isRequesting: false,
  error: false,
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_AUTH:
      return { ...state, ...action.payload }
    case ActionTypes.LOGOUT_AUTH:
      return { ...initialState }
    case ActionTypes.REQUESTING_AUTH:
      return { ...state, isRequesting: true }
    case ActionTypes.REQUESTING_AUTH_FINISHED:
      return { ...state, isRequesting: false }
    case ActionTypes.REQUESTING_AUTH_FINISHED_WITH_ERRORS:
      return { ...state, message: action.payload.message, error: true }
    default:
      return state
  }
}
