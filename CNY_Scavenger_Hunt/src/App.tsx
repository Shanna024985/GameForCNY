import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import QrCodeShown from './ZeroQrCode'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mydashboard' element={<Dashboard/>}/>
        <Route path='/testQrCode' element={<QrCodeShown/>}/>
      </Routes>
    </>
  )
}

export default App
