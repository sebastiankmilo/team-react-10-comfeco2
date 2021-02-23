import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { useToastEffect } from '../hooks'

export const AppRouter = () => {
  useToastEffect()
  return (
    <Router fallback={<span />}>
      <Layout />
    </Router>
  )
}
