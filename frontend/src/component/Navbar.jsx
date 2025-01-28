import { useState } from "react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className="flex justify-between items-center py-4 px-8">
      <img src='./images/finallogo.png' alt="logo" className="w-20 cursor-pointer" onClick={() => navigate('/')}/>

      <ul className="hidden md:flex space-x-8 font-medium  ">
        <NavLink to="/">
          <li className=" ">Home</li>
          <hr  className="border-none outline-none h-0.5 hidden m-auto bg-primary "/>
        </NavLink>
        <NavLink to="/doctor">
          <li>All Doctor</li>
          <hr  className="border-none outline-none h-0.5 hidden m-auto bg-primary "/>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
          <hr  className="border-none outline-none h-0.5 hidden m-auto bg-primary "/>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
          <hr  className="border-none outline-none h-0.5 hidden m-auto bg-primary "/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ">

          {
            token ? <div className="flex items-center gap-4 cursor-pointer group relative" onClick={() => setShowMenu(!showMenu)}>
                   <img className="w-8 rounded-full" src='./images/profile_pic.png' alt="profileimg"/>
                   <img className="w-3" src="./images/cross_icon.png" alt="dropdownicon"/>

                   <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 text-gray-500  shadow-md hidden group-hover:block">
                    <div className="min-w-48  rounded flex flex-col gap-4 p-4">
                        <p onClick={() => navigate('/myprofile')} className=" hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={() => navigate('/myappointment')} className=" hover:text-black cursor-pointer">My Appointment</p>
                        <p onClick={() => setToken(false)} className=" hover:text-black cursor-pointer">LogOut</p>
                    </div>
                   </div>
            </div>

            : <button onClick={() => navigate('/login')} className="bg-primary rounded-full hidden md:block font-light px-8 py-3 text-white ">Create Account</button>
          }

      
      </div>
      
    </div>
  );
};

export default Navbar;
