import React from 'react'

const About = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-900">
        <p>About <span className="text-gray-700 font-medium">Us</span></p>
      </div>
      <div className="flex flex-col  md:flex-row my-10 gap-12">
        <img className='w-full md:max-w-[360px]' src='/images/about_image.png' alt='' />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-medium text-gray-700 ">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit inventore est sint? Quidem, pariatur?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, temporibus?</p>
          <b className='text-gray-600'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum quam nisi ab tenetur error natus earum, voluptates ducimus modi!</p>
        </div>

      </div>
     
    </div>

  
  )
}

export default About
