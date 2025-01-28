import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
 
    const navigate = useNavigate()

  return (
    <div className=" flex  bg-blue-600 sm:px-10  rounded-lg md:px-12 lg:px-14 px-6">
    {/* left side */}
          
          <div className=" flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
              <p>Book Appointment </p>
              <p className="mt-4">with 100 + Trusted Doctor</p>
              </div>
                  
                <button onClick={() => {navigate('/login'); scrollTo(0,0)}} className='bg-white text-gray-400 flex items-center gap-2 px-8 py-3 rounded-full text-sm transition-all  mt-3 hover:scale-105 duration-300'  >Create Account </button>
          
          </div>

       {/* right side */}

       <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
            <img  className=' w-full absolute rounded-lg right-0 max-w-md bottom-0' src='/images/appointment_img.png' alt='doctor' />
       </div>
  </div>
)
}


export default Banner
