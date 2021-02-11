import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppContext } from '../store/AppContext'
import { startChecking } from '../actions/AuthActions'
import { Layout } from './layouts/Layout'

export const AppRouter = () => {
  const {
    state: { auth },
    dispatch,
  } = useContext(AppContext)
  useEffect(() => {
    console.log('validando si hay data...')
    dispatch(startChecking())
    console.log('hay data (uid)?:', auth)
  }, [dispatch, auth])

  return (
    <Router>
      <Layout />
    </Router>
  )
}
