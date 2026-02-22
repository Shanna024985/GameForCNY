import React, { useEffect, useState } from 'react'
import Error from "./Error"
import QrCodeShown from './ZeroQrCode';
import { useNavigate } from 'react-router-dom';
type Props = {
    currentUrl: String
}

function CheckToken(props: Props) {
    let address = new URL(window.location.href);
    let queryParameters = address.searchParams;
    let id = queryParameters.get("id");
    if (!localStorage.getItem("token")) {
        return (
            <>
                <Error status={401} description={"Authorization required"} pageForRedirect={"login"} pageLinkForRedirect={"/login"}></Error>
            </>

        );
    } else if (id == null) {
        return (
            <>
                <Error status={404} description={"Page not found"} pageForRedirect={"home"} pageLinkForRedirect={"/"}></Error>
            </>

        );
    } else {
        return <LoggedInQrCode currentUrl={props.currentUrl} ></LoggedInQrCode>

    }
}
const LoggedInQrCode = (props: Props) => {
    let [amt, setAmt] = useState(0)
    let navigate = useNavigate();
    useEffect(() => {
        let address = new URL(window.location.href);
        let queryParameters = address.searchParams;
        let id = queryParameters.get("id");
        let body = JSON.stringify({ qrCodeId: id })
        fetch(props.currentUrl + "/qrCode", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            method: "POST",
            body: body
        }).then((value) => {
            if (value.status == 500) {
                navigate("/", { replace: true })
            } else {
                return value.json();
            }
        }).then((valueToBeProcessed) => {
            setAmt(valueToBeProcessed.moneys)
            document.getElementById("qrCodeToShow")?.classList.remove("hidden")
        }).catch((error) => {
            console.error(error)
        })
    }, [])
    return (
        <div className='hidden' id='qrCodeToShow'>
            <QrCodeShown currentUrl={props.currentUrl} amt={amt}></QrCodeShown>
        </div>
    )
}

const QrCodes = (props: Props) => {
    return <CheckToken currentUrl={props.currentUrl}></CheckToken>
}

export default QrCodes