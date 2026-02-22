import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { data } from 'react-router-dom'

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]
type Props = {
    currentUrl: String
}
type dataPlayersType = {
    id: number,
    money: number,
    username: string
}[]

const Leaderboard = (props: Props) => {
    let [dataOfPlayers, setDataOfPlayers] = useState<dataPlayersType>([])
    useEffect(() => {
        fetch(props.currentUrl + "/leaderboard")
            .then((value) => {
                return value.json();
            }).then((valueForDoing) => {
                setDataOfPlayers(valueForDoing)
            })
        function getLeaderboardOfStuff() {
            fetch(props.currentUrl + "/leaderboard")
                .then((value) => {
                    return value.json();
                }).then((valueForDoing) => {
                    setDataOfPlayers(valueForDoing)
                })
        }
        setInterval(getLeaderboardOfStuff, 120000)
    }, [])
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-2xl text-center'>No</TableHead>
                        <TableHead className='text-2xl text-center'>Username</TableHead>
                        <TableHead className='text-2xl text-center'>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dataOfPlayers.map((invoice, index) => (
                        <TableRow key={invoice.id}>
                            <TableCell className="font-medium text-lg text-center">{index + 1}</TableCell>
                            <TableCell className='text-center text-lg '>{invoice.username}</TableCell>
                            <TableCell className="text-center text-lg ">${invoice.money}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default Leaderboard