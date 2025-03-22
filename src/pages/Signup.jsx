import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const Signup = () => {
    return (
        <>
            <div className='px-5 py-20 h-screen flex flex-col justify-between'>
                <div>
                    <h1 className='text-[28px] font-bold pb-2'>
                        Create your<br />
                        PopX account
                    </h1>
                    <div>
                        <div className='py-3'>
                            <Input type='text' FieldName='Full Name' placeholder='Enter your fullname' />
                        </div>
                        <div className='py-3'>
                            <Input type='text' FieldName='Phone number' placeholder='Enter your phone number' />
                        </div>
                        <div className='py-3'>
                            <Input type='text' FieldName='Email address' placeholder='Enter your email' />
                        </div>
                        <div className='py-3'>
                            <Input type='password' FieldName='Password' placeholder='Enter your password' />
                        </div>
                        <div className='py-3'>
                            <Input type='text' FieldName='Company name' placeholder='Enter your company name' />
                        </div>
                        <div className=''>
                            <div htmlFor=""> Are you an agency? <span className='text-red-500'>*</span></div>
                            <div className='flex gap-5'>
                                <div className='flex gap-1'>
                                    <input type="radio" name="option" id="yes" />
                                    <label htmlFor="yes">Yes</label>
                                </div>
                                <div className='flex gap-1'>
                                    <input type="radio" name="option" id="no" />
                                    <label htmlFor="no">No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button Content='Create Account' BgColor='bg-[#6C25FF]' textColor='text-white' route='/profile' />
                </div>
            </div>
        </>
    )
}

export default Signup