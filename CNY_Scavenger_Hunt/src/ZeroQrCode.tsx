import React, { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'



const QrCodeShown = () => {
  let [amt, setAmt] = useState(0)
  let [textWishes, setTextWishes] = useState("")
  useEffect(() => {
    if (amt == 0) {
      setTextWishes("好运将到 再接再励")
    }
  })
  const navigate = useNavigate();
  return (
    <>
      <div className='flex'>
      <button onClick={(e)=>{e.preventDefault(); navigate("/mydashboard",{replace: true})}}><ArrowBigLeft /></button>

      </div>
      <div className="flex flex-col justify-center items-center h-screen">

        <h1 className='text-4xl mb-5'>{textWishes}</h1>
        <p className='text-6xl mb-5'>${amt}</p>
      </div>
    </>

  )
}

export default QrCodeShown
