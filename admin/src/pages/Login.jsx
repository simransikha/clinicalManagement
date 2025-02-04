import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { setAToken, backendurl } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendurl}/api/v1/login`, { email, password });
        if (data.success) {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
          toast.success('Login successful');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendurl}/api/v1/login`, { email, password });
        if (data.success) {
          localStorage.setItem('dToken', data.token);
          setAToken(data.token);
          toast.success('Login successful');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error('Error response:', error.response);
      toast.error('An error occurred during login');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border text-gray-600 text-sm shadow-lg rounded-xl'>
        <p className='text-2xl font-semibold m-auto'>
          <span>{state}</span> Login
        </p>
        <div className='w-full'>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='border border-gray-500 rounded w-full mt-2 p-2'
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='border border-gray-500 rounded w-full mt-2 p-2'
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className='bg-cyan-600 text-base text-white rounded-md py-2 w-full'>Login</button>
        {
          state === 'Admin' ?
            <p className='text-xs mt-2'>Doctor Login? <span className='text-cyan-600 cursor-pointer' onClick={() => setState('Doctor')}>Click Here</span></p>
            :
            <p className='text-xs mt-2'>Admin Login? <span className='text-cyan-600 cursor-pointer' onClick={() => setState('Admin')}>Click Here</span></p>
        }
      </div>
    </form>
  );
};

export default Login;
