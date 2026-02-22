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
import Error from './Error'
import { QrCode } from 'lucide-react'
import QrCodes from './qrCode'

function App() {
  const currentUrl = "http://localhost:3000/api"
      let [money, setMoney] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home currentUrl={currentUrl}/>}/>
        <Route path='/login' element={<Login currentUrl={currentUrl}/>}/>
        <Route path='/mydashboard' element={<Dashboard money={money} setMoney={setMoney} currentUrl={currentUrl}/>}/>
        <Route path='/qrCode' element={<QrCodes currentUrl={currentUrl}/>}/>
      </Routes>
    </>
  )
}

export default App
