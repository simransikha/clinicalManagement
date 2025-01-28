import React, { useContext } from 'react'
import {useNavigate}  from 'react-router-dom';
import { AppContext } from '../context/AppContext';



const TopDoctor = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)


  return (
    <div className='flex flex-col items-center gap-4 my-16 md:mx-10 text-gray-700 '>
      <h1 className='text-3xl font-medium'>Top Doctor to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, numquam.</p>
        
        <div className="grid w-full grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-8">
            {
                doctors.slice(0,10).map((item,index) => (
                    <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className=" items-center border-blue-300 border hover:translate-y-[-10px] overflow-hidden rounded-xl transition-all duration-500   ">
                          <img className='bg-blue-50 ' src={item.image} alt={item.name} />
                          <div className='p-4'>
                            <div className='flex items-center gap-2 text-center text-green-600 text-sm'>
                                <p className='w-2 h-2 rounded-full bg-green-700 '></p><p>Available</p>
                            </div>
                            <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                            <p className='text-sm text-gray-600'>{item.speciality}</p>
                          </div>
                        </div>
                ))
            }

        </div>
        <button onClick={() => {navigate('/doctor'); scrollTo(0,0) }} className='bg-blue-50 text-gray-400 px-12 py-3 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopDoctor
