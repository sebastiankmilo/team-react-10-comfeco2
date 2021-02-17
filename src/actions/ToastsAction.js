import { v4 as uuidv4 } from 'uuid'
import * as ActionTypes from '../store/ActionTypes'
import * as ActionUtility from '../utils/ActionUtility'
import { ToastStatusMap } from '../constants/ToastStatusMap'

export const add = (message, type) => {
  return ActionUtility.createAction(ActionTypes.ADD_TOAST, {
    message,
    type,
    id: uuidv4(),
  })
}

export const addSuccess = (message) => {
  return add(message, ToastStatusMap.Success)
}

export const addError = (message) => {
  return add(message, ToastStatusMap.Error)
}

export const addWarning = (message) => {
  return add(message, ToastStatusMap.Warning)
}

export const removeById = (toastId) => {
  return ActionUtility.createAction(ActionTypes.REMOVE_TOAST, toastId)
}
