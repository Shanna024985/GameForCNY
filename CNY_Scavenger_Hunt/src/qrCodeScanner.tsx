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
    }
    function error(error: any) {
        console.warn(error)
    }
    let button = document.getElementById("html5-qrcode-anchor-scan-type-change")
    button?.classList.add("hidden")
    },[])
    let button = document.getElementById("html5-qrcode-anchor-scan-type-change")
    button?.classList.add("hidden")
  return (
    <div>
        <h1>QR Code Scanner</h1>
        {
            scanResult ?
            window.location.href = scanResult:
            <div id='reader'></div>
        }
    </div>
  )
}

export default QrCodeScanner