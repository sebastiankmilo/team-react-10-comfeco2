import combineReducers from 'react-combine-reducers'
import { authReducer, initialState as initialAuthState } from './authReducer'
import {
  toastsReducer,
  initialState as initialToastsState,
} from './toastsReducer'

export const [appReducer, appInitialState] = combineReducers({
  auth: [authReducer, initialAuthState],
  toasts: [toastsReducer, initialToastsState],
})
