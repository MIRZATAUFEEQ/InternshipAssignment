import React from 'react'
import camera from '../assets/camera.png'
import profile from '../assets/profile.png'
const Profile = () => {
    return (
        <>
            <div className='border-b-2 border-dotted border-gray-500 px-5 flex flex-col gap-5'>
                <h1 className='w-[375px] h-[68px] flex items-center '>Account Setting</h1>
                <div className='flex gap-6'>
                    <div className='w-[76px] h-[76px] border rounded-full relative '>
                        <img className='h-full w-full' src={profile} alt="" />
                        <img src={camera} alt="" className=' absolute bottom-[4px] -right-[6px] w-[21px] h-[23px]' />
                    </div>
                    <div>
                        <h1>Marry Doe</h1>
                        <span>Marry@gmail.com</span>
                    </div>
                </div>
                <div className='py-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae sunt vero, possimus facere dolor eligendi at ducimus reiciendis porro!
                </div>
            </div>
        </>
    )
}

export default Profile