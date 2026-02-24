import  { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode' 
// type Props = {
//         currentUrl: String, 
// }

const QrCodeScanner = () => {
    const [scanResult,setScanResult] = useState(null)

    useEffect(()=>{
    const scanner = new Html5QrcodeScanner(`reader`,{
        qrbox: {
            width: 250,
            height: 250
        },
        fps: 2,
    },true)
        scanner.render(success,error)
    function success(result: any) {
        scanner.clear();
        setScanResult(result)
        console.log(result)
    }
    function error(error: any) {
        console.warn(error)
    }
    },[])

  return (
    <div>
        <h1>QR Code Scanner</h1>
        {
            scanResult ?
            <div>Success: <a href={scanResult}>{scanResult}</a></div>:
            <div id='reader'></div>
        }
    </div>
  )
}

export default QrCodeScanner