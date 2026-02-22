import { useRef } from 'react'
import { Input } from './components/ui/input'

import { useId } from 'react';
import { Button } from './components/ui/button';
type Props = {
    currentUrl: String
}

const Login = (props: Props) => {
    const inputId = useId();
    const inputRef: null | any = useRef(null);

    function processLogin() {
        if (inputRef.current != null && inputRef.current.value! + "") {
            let bodyData = JSON.stringify({
                username: inputRef.current.value
            })
            fetch(props.currentUrl + "/auth/login", {
                body: bodyData,
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((value) => {
                return value.json();
            }).then((valueToDoSomething) => {
                localStorage.setItem("token", valueToDoSomething.token)
                window.location.href = "/mydashboard"
            })
        }

    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <label htmlFor={inputId} className='text-4xl mb-4 self-start'>Enter your name:</label>
            <Input placeholder='Shanna' className='w-full h-16' name='username' id={inputId} ref={inputRef} />
            <Button className='mt-4 text-2xl w-full h-13' onClick={(e) => { e.preventDefault(); processLogin(); }}>Continue</Button>

        </div>
    )
}

export default Login
