import React from 'react'
import Button from '../components/Button'

const Home = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-end items-center gap-4'>
                <div className='w-full pl-6'>
                    <h1 className='text-[28px] font-bold'>Welcome to PopX</h1>
                    <p className='text-[18px] text-[#1D2226] w-[231px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <Button Content='Create Account' BgColor='bg-[#6C25FF]' textColor='text-white' route='/signup' />
                    <Button Content='Already Registered? Login' BgColor='bg-[#6C25FF4B]' route='/login' />
                </div>
            </div>
        </>
    )
}

export default Home