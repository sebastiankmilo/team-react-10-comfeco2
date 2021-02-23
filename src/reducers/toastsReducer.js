import * as ActionTypes from '../store/ActionTypes'

export const initialState = []

export const toastsReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOAST:
      return [...state, action.payload]
    case ActionTypes.REMOVE_TOAST:
      const toastId = action.payload
      return [...state.filter((toast) => toast.id !== toastId)]
    default:
      return state
  }
}
