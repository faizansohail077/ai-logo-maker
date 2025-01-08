import React from 'react'
import Lookup from '@/components/data/Lookup'
import { Button } from '../../components/ui/button'
const Hero = () => {
    return (
        <div className='flex items-center flex-col gap-5 mt-32' >
            <h2 className='text-5xl text-primary text-center font-bold' >{Lookup.HeroHeading}</h2>
            <h2 className='text-5xl text-black text-center font-bold' >{Lookup.HeroSubHeading}</h2>
            <p className='text-lg text-gray-500 text-center' >{Lookup.HeroDesc}</p>
            <div className='flex items-center w-full max-w-2xl: mt-10 gap-5' >
                <input placeholder='Enter Your Logo Name' className='p-3 rounded-md w-full shadow-md' />
                <Button className='p-6' >Get Started</Button>
            </div>
        </div>
    )
}

export default Hero
