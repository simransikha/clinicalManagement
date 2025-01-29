import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointment</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.image} alt={item.name} />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-600 font-semibold'>Dr. {item.name}</p>
              <p className='text-neutral-600 font-semibold'>{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>
                {item.address.line1}, {item.address.line2}
              </p>
              <p className='text-neutral-600 font-semibold'>${item.fees}</p>
              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25 July 2024 | 10:00 AM
              </p>
            </div>
            <div className='flex flex-col justify-end gap-2'>
              <button className='text-sm text-stone-500 text-center p-2 sm:min-w-28 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-stone-500 text-center p-2 sm:min-w-28 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;