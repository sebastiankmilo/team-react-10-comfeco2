import React, { useReducer } from 'react'

import 'antd/dist/antd.css'
import './assets/styles/index.scss'

import { AppRouter } from './router/AppRouter'
import { AppContext } from './store/AppContext'
import { appReducer, appInitialState } from './reducers/rootReducer'

function App() {
  const [state, dispatch] = useReducer(appReducer, appInitialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AppContext.Provider>
  )
}

export default App
