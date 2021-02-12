import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Layout } from './layouts/Layout'

export const AppRouter = () => (
  <Router>
    <Layout />
  </Router>
)
