import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='bg-[#F7F8F9] w-full h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App