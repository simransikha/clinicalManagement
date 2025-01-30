import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctor = () => {

const {speciality} = useParams();
const [filterDoc, setFilterDoc] = useState([]);
const [filter,setFilter] = useState(false)
const navigate = useNavigate()

const {doctors} = useContext(AppContext)

const applyFilter = () => {

  if(speciality){
       setFilterDoc(doctors.filter((item) => item.speciality === speciality))

  }
  else{
    setFilterDoc(doctors)

  }
}

useEffect(() => {
  applyFilter()
}
, [speciality,doctors])

  return (
    <div>
     
    <p  className='text-gray-500'> Browse the list of doctors by speciality: {speciality}</p>
    <div className='flex flex-col sm:flex-row items-start gap-5 mt-5   '>
      <button className={`sm:hidden transition-all text-sm px-3 py-1 rounded border ${filter ? 'bg-primary text-white ' : ''}`} onClick={() => setFilter(prev => !prev)}>Filters</button>
      <div  className={`flex-col text-sm  gap-4  text-gray-700 ${filter ? 'flex' : 'hidden sm:flex'}`}>
        <p onClick={() => speciality === 'Generalphysician' ? navigate('/doctor') : navigate('/doctor/Generalphysician')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer  ${speciality === 'General physician' ? "bg-indigo-100  text-black" : " "}`} > General Physician</p>
        <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctor') : navigate('/doctor/Gastroenterologist')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? "bg-indigo-100  text-black" : " "}`}> Gastroenterologist</p>
        <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctor') : navigate('/doctor/Dermatologist')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? "bg-indigo-100  text-black" : " "}`}>Dermatologist </p>
        <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctor') : navigate('/doctor/Pediatricians')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? "bg-indigo-100  text-black" : " "} `}>Pediatricians</p>
        <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctor') : navigate('/doctor/Gynecologist')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? "bg-indigo-100  text-black" : " "}`}>Gynecologist</p>
        <p onClick={() => speciality === 'Neurologist' ? navigate('/doctor') : navigate('/doctor/Neurologist')} className={`sm:w-auto w-[94vw] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? "bg-indigo-100  text-black" : " "}`}>Neurologist</p>
      </div>
      <div className="grid w-full grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-8">
        {
          filterDoc.map((item,index) => (
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
    </div>
    
      
    </div>
  )
}

export default Doctor
