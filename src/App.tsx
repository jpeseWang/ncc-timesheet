import React from 'react'
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'

import { Header } from './components/Header/Header'

import 'react-toastify/dist/ReactToastify.css'
function App (): JSX.Element {
  return (
    <div>
      <Header />
      <AppRoutes />
      <ToastContainer />
    </div>
  )
}

export default App
