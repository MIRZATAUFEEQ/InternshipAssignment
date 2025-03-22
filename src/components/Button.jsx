import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ Content, BgColor, textColor, route }) => {
    const navigate = useNavigate()
    return (
        <>
            <button className={`w-[335px] h-[46px] ${BgColor} rounded-[6px] opacity-100 p-4 ${textColor} text-center text-[16px] leading-[17px] font-medium opacity-100`} onClick={() => navigate(route)}>{Content}</button>
        </>
    )
}

export default Button