import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
    const {doctors, getAllDoctor,aToken,checkAvailablity} = useContext(AdminContext)

    useEffect(() => {
        if(aToken){
        getAllDoctor()
        }
    }
    , [ aToken])    

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll' >
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
            doctors.map((item,index) => (
                <div className='border border-indigo-200 rounded-xl max-w-56 group  cursor-pointer overflow-hidden' key={index}>
                    <img  className='bg-indigo-50 group-hover:bg-cyan-600 transition-all duration-500' src={item.image} alt={item.name} />
                    <div className='p-4'>
                        <p className='text-neutral-800 text-lg font-medium'>{item.name}</p> 
                        <p className='text-zinc-600 text-sm'>{item.speciality}</p>
                        <div className='flex items-center gap-2 mt-2 text-sm'>
                            <input onChange={() => checkAvailablity(item._id)} type="checkbox" checked={item.available} />
                            <p>Available</p>
                        </div>
                    </div>

                   </div>
            ))
        }
      </div>
    </div>
  )
}

export default DoctorList
