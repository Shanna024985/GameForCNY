import { useEffect, useState } from 'react'
import Error from "./Error"
import QrCodeShown from './ZeroQrCode';
type Props = {
    currentUrl: String
}

function CheckToken(props: Props) {
    let address = new URL(window.location.href);
    let queryParameters = address.searchParams;
    let id = queryParameters.get("id");
    let error = queryParameters.get("error")
    if (!localStorage.getItem("token") || error == "401") {
        return (
            <>
                <Error status={401} description={"Authorization required"} pageForRedirect={"login"} pageLinkForRedirect={"/login"}></Error>
            </>

        );
    } else if (error == "404") {
        return (
            <>
                <Error status={404} description={"QR code is redeemed"} pageForRedirect={"home"} pageLinkForRedirect={"/mydashboard"}></Error>
            </>
        )
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
                window.location.href = "/qrcode?error=404"
            } else if (value.status == 401) {
                window.location.href = "/qrcode?error=401"
            } else {
                return value.json();
            }
        }).then((valueToBeProcessed) => {
            setAmt(valueToBeProcessed.moneys)
            document.getElementById("qrCodeToShow")?.classList.remove("hidden")
            let root = document.getElementById("root")
            if (root) {
                root?.classList.add("bg-red-50")
                root.style.padding = "0"
            }
        }).catch((error) => {
            console.error(error)
        })
    }, [])
    return (
        <div className='hidden p-8' id='qrCodeToShow'>
            <QrCodeShown currentUrl={props.currentUrl} amt={amt}></QrCodeShown>
        </div>
    )
}

const QrCodes = (props: Props) => {
    return <CheckToken currentUrl={props.currentUrl}></CheckToken>
}

export default QrCodes