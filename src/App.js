import React, { useReducer } from 'react'
import environment from 'environment'

import { AppRouter } from './router/AppRouter'
import { AppContext } from './store/AppContext'
import { appReducer, appInitialState } from './reducers/rootReducer'

function App() {
  const [state, dispatchAction] = useReducer(appReducer, appInitialState)

  let dispatch = (action) => {
    if (typeof action === 'function') {
      action(dispatch, () => state)
    } else {
      dispatchAction(action)
    }
  }
  console.log(environment)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AppContext.Provider>
  )
}

export default App
