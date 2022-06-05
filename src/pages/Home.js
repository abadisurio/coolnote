import React from 'react'
import CardGrid from '../components/CardGrid'

const Home = () => {
    return (
        <div className='bg-gradient-to-r from-slate-900 to-indigo-900 text-white h-screen'>
            <div className='container mx-auto pt-5'>

                <CardGrid />
            </div>
        </div>
    )
}

export default Home