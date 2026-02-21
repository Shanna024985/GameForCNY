import React from 'react'

import horseImage from "./assets/horse.png"
import Leaderboard from './Leaderboard'
const Home = () => {
    return (
        <div className='m-5'>
            <h1 className='text-5xl '>Scavenger Hunt 2026</h1>
            <div className='ml-40 mr-40'>
                <img src={horseImage} alt="horse" className='h-auto w-full' />

            </div>
            <Leaderboard/>
        </div>
    )
}

export default Home