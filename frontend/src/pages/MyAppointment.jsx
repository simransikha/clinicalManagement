import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointment = () => {
  const { backendurl, token } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);

  const getUserAppointment = async () => {
    try {
      const { data } = await axios.get(backendurl + '/api/user/list-appointment',{
        headers: { Authorization: `Bearer ${token}` }});


      if (data.success) {
        setAppointments(data.appointments);
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Internal Server Error');
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendurl + '/api/user/cancel-appointment', { appointmentId }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        toast.success('Appointment cancelled successfully');
        getUserAppointment();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error('Internal Server Error');
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointment();
    }
  }, [token]);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointment</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt={item.docData.name} />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-600 font-semibold'>Dr. {item.docData.name}</p>
              <p className='text-neutral-600 font-semibold'>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>
                {item.docData.address}
              </p>
              <p className='text-neutral-600 font-semibold'>${item.docData.fees}</p>
              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {item.slotDate} | {item.slotTime}
              </p>
            </div>
            <div className='flex flex-col justify-end gap-2'>
              <button className='text-sm text-stone-500 text-center p-2 sm:min-w-28 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              {!item.cancelled && 
              <button  className='text-sm text-stone-500 text-center p-2 sm:min-w-28 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel appointment
              </button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;