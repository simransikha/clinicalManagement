import { useContext } from 'react'
import  { React, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'

const Login = () => {

 const [state,setState] = useState('Admin')
 const [password, setPassword] = useState('')
 const [email, setEmail] = useState('')

 const {setAToken,backendurl} = useContext(AdminContext)

 const onSumbitHandler = async(e) => {
    e.preventDefault()
    try {
        if(state === 'Admin'){
            const res = await axios.post(`${backendurl}/admin/login`,{email,password})
            setAToken(res.data.token)
             
        }
        else{
            const res = await axios.post(`${backendurl}/doctor/login`,{email,password})
            setAToken(res.data.token)

        }
    } catch (error) {
        console.log(error)
        
    }

 }
 
  return (
    <form   onSubmit={onSumbitHandler} className="min-h-[80vh] flex  items-center">
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border text-gray-600 text-sm shadow-lg rounded-xl'>
      <p className='text-2xl font-semibold m-auto'>
        <span>{state}</span>  Login</p>
      <div className='w-full'>
        <p>Email</p>
        <input onClick={(e) => setEmail(e.target.value)} value={email} className='border border-gray-500 rounded w-full mt-2 p-2' type="email" placeholder="Email" />
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input onClick={(e) => setPassword(e.target.value)} value={password}  className='border border-gray-500 rounded w-full mt-2 p-2' type="password" placeholder="Password" />
      </div>
        <button className='bg-cyan-600 text-base text-white rounded-md py-2 w-full'>Login</button>
        {
            state === 'Admin' ?
            <p className='text-xs mt-2'>Doctor Login ? <span className='text-cyan-600 cursor-pointer' onClick={()=>setState('Doctor')}>Click Here</span></p>

            :
            <p className='text-xs mt-2'>Admin Login ? <span className='text-cyan-600 cursor-pointer' onClick={()=>setState('Admin')}>Click Here</span></p>
            }
        
        
        </div>
    </form>
  )
}

export default Login
