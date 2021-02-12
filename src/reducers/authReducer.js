import * as ActionTypes from '../store/ActionTypes'

export const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...action.payload,
      }

    case ActionTypes.LOGOUT_USER:
      return {
        logged: false,
      }

    default:
      return state
  }
}
