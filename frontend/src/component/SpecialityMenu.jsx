import React from 'react'

import { Link } from 'react-router-dom'


const specialityData = [
    {
        id: 1,
        speciality: 'Generalphysician',
        image: './images/General_physician.svg'
    },
    {
        id: 2,
        speciality: 'Gastroenterologist',
        image: './images/Gastroenterologist.svg'
    },
    {
        id: 3,
        speciality: 'Dermatologist',
        image: './images/Dermatologist.svg'
    },
    {
        id: 4,
        speciality: 'Pediatricians',
        image: './images/Pediatricians.svg'
    },
    {
        id: 5,
        speciality: 'Gynecologist',
        image: './images/Gynecologist.svg'
    },
    {
        id: 6,
        speciality: 'Neurologist',
        image: './images/Neurologist.svg'
    }
]

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-black id-speciality speciality'>
      <h1 className='text-3xl font-medium '>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, qui?</p>
      <div className='flex sm:justify-center pt-5 w-full overflow-scroll gap-4'>
        {
            specialityData.map((speciality) => (
                <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`/doctor/${speciality.speciality}`} key={speciality.id}>
                    <div className='speciality-menu'>
                        <img className='w-16 sm:w-24 mb-2' src={speciality.image} alt={speciality.speciality} />
                        <p>{speciality.speciality}</p>
                        </div>
                        </Link>
            ))
        }
        </div>
    </div>
    )
}

         

export default SpecialityMenu
