import { useEffect } from 'react'
import Error from './Error'
type Props = {
    currentUrl: String, 
    money: number,
    setMoney: Function
}


function CheckToken(props: Props) {
    let address = new URL(window.location.href);
    let queryParameters = address.searchParams;
    let error = queryParameters.get("error")
    if (!localStorage.getItem("token") || error == "401") {
        return (
            <>
                <Error status={401} description={"Authorization required"} pageForRedirect={"login"} pageLinkForRedirect={"/login"}></Error>
            </>

        );
    } else {
        return <LoggedInDashboard currentUrl={props.currentUrl} money={props.money} setMoney={props.setMoney}></LoggedInDashboard>
    }
}

let LoggedInDashboard = (props: Props) => {
    useEffect(() => {
        fetch(props.currentUrl + "/money", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then((value) => {
            if (value.status == 401) {
                window.location.href = "/mydashboard?error=401"
            } else {
                return value.json()
            }
        }).then((value) => {

            props.setMoney(value.money)
        }).catch((error) => {
            console.log(error)
            return <Error pageForRedirect='home' pageLinkForRedirect='/' status={500} description='Something is wrong with our server' ></Error>
        })
    }, [])
    return (
        <div className="flex flex-col justify-center items-center h-screen" id='amountDiv'>
            <h1 className='text-4xl mb-5'>Total amount earned</h1>
            <h1 className='text-6xl'>${props.money}</h1>
        </div>
    )
}

const Dashboard = (props: Props) => {
    return <CheckToken currentUrl={props.currentUrl} money={props.money} setMoney={props.setMoney} />
}

export default Dashboard