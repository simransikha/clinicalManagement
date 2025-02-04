import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from './context/AppContext';
import { AdminContext } from './context/AdminContext';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddDoctor from './pages/admin/AddDoctor';
import Dashboard from './pages/admin/Dashboard';
import DoctorList from './pages/admin/DoctorList';
import AllAppointment from './pages/admin/AllAppointment';

const App = () => {

const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div  className="bg-slate-100">
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/add-doctor' element={<AddDoctor/>} />
          <Route path='/admin-dashboard' element={<Dashboard/>} />
          <Route path='/doctorlist' element={<DoctorList/>} />
          <Route path='/all-appointment' element={<AllAppointment/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <div>
      <Login />
      <ToastContainer />
    </div>
  )
}

export default App
