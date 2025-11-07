import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Header from './components/layout/header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <Home/>
      </div>
    </div>
  )
}

export default App
