import { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


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