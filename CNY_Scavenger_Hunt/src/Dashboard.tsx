import React, { useState } from 'react'

const Dashboard = () => {
    let [money,setMoney] = useState(0)
  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className='text-4xl mb-5'>Total amount earned</h1>
        <h1 className='text-6xl'>${money}</h1>
    </div>
  )
}

export default Dashboard