import React from 'react'

const Input = ({ placeholder, FieldName, type }) => {
    return (
        <>
            <div className='relative'>
                <label className='absolute -top-3 left-3 bg-[#F7F8F9] px-1 text-purple-600 text-sm font-medium'>{FieldName} <span className='text-red-500'>*</span></label>
                <input type={type} placeholder={placeholder} className='w-[335px] h-[40px] border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500' />
            </div>
        </>
    )
}

export default Input