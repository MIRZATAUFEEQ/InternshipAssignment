import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-4 py-10'>
                <div className='w-full pl-6 px-2'>
                    <h1 className='text-[28px] font-bold w-[231px]'>Signin to your PopX account</h1>
                    <p className='text-[18px] text-[#1D2226] w-[231px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <Input placeholder='enter your email' FieldName='Email' type='text' />
                    </div>
                    <div>
                        <Input placeholder='enter your password' FieldName='Password' type='password' />
                    </div>
                </div>
                <div>
                    <Button Content='Login' BgColor='bg-[#CBCBCB]' textColor='#FFFFFF' route='/profile' />
                </div>
            </div>
        </>
    )
}

export default Login