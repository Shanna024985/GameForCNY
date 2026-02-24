import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'

import QrCodes from './qrCode'
import QrCodeScanner from './qrCodeScanner'

function App() {
  const currentUrl = "https://gameforcny.onrender.com/api"
      let [money, setMoney] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home currentUrl={currentUrl}/>}/>
        <Route path='/login' element={<Login currentUrl={currentUrl}/>}/>
        <Route path='/mydashboard' element={<Dashboard money={money} setMoney={setMoney} currentUrl={currentUrl}/>}/>
        <Route path='/qrCode' element={<QrCodes currentUrl={currentUrl}/>}/>
        <Route path='/qrCodeScanner' element={<QrCodeScanner />}/>
      </Routes>
    </>
  )
}

export default App
