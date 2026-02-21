import React from 'react'
import { Input } from './components/ui/input'

import {  useId } from 'react';
import { Button } from './components/ui/button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const inputId = useId(); 
  const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
                <label htmlFor={inputId} className='text-4xl mb-4 self-start'>Enter your name:</label>
                <Input placeholder='Shanna' className='w-full h-16' name='username' id={inputId}/>
                <Button className='mt-4 text-2xl w-full h-13' onClick={(e)=> {e.preventDefault(); navigate("/mydashboard",{replace: true})} }>Continue</Button>

        </div>
    )
}

export default Login
