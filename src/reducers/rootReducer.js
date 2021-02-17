import combineReducers from 'react-combine-reducers'
import { authReducer, initialState as initialAuthState } from './authReducer'

export const [appReducer, appInitialState] = combineReducers({
  auth: [authReducer, initialAuthState],
})
