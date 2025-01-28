import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/doctor" element={<Doctor/>} />
      <Route path="/doctor/:speciality" element={<Doctor/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/myprofile" element={<MyProfile/>} />
      <Route path="/myappointment" element={<MyAppointment/>} />
      <Route path="/appointment/:docId" element={<Appointment/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
