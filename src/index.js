import './assets/styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { toast, ToastContainer } from 'react-toastify'
import App from './App'

const app = (
  <>
    <App />
    <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
  </>
)
ReactDOM.render(app, document.getElementById('root'))
