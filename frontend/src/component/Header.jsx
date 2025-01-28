import React from 'react'

const Header = () => {
  return (
    <div className=" flex flex-col md:flex-row bg-primary flex-wrap  rounded-lg md:px-10 lg:px-20 px-6">
      {/* left side */}
            
            <div className=" md:w-1/2  items-start py-10 m-auto   flex flex-col justify-center gap-4">
                <p className="text-3xl md:text-4xl lg:text-5xl text-white  py-6 font-semimedium "> 
                    Book Appointment <br /> with Trusted Doctors
                </p>
                <div className="flex flex-col md:flex-row md:items-center  items-start gap-4">
                    <img  className=' w-28' src='/images/group_profiles.png' alt="doctor" />
                    <p className="text-white text-base md:text-lg lg:text-xl font-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicingbr.
                    </p>
                     </div>
                     <div>
                  <a className='bg-white text-gray-400 flex items-center gap-2 px-8 py-4 rounded-full text-sm transition-all  m-auto hover:scale-105 duration-300' href='#speciality' >Book Appointment <img  className='w-3' src='./images/arrow_icon.svg' alt=' ' /></a>
            </div>
            </div>

         {/* right side */}

         <div className="md:w-1/2 relative">
              <img  className=' w-full md:absolute rounded-lg h-auto bottom-0' src='/images/header_img.png' alt='doctor' />
         </div>
    </div>
  )
}

export default Header
