import { useContext, useState } from "react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Navbar = () => {
    const {token, setToken, userData} = useContext(AppContext)
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
  
    const logOut = () => {
      setToken(false)
      localStorage.removeItem('token')
    }

  return (
    <div className="flex justify-between items-center py-4 px-8">
      <img src='/images/finallogo.png' alt="logo" className="w-20 cursor-pointer" onClick={() => navigate('/')}/>

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
            token && userData ? 
            <div className="flex items-center gap-4 cursor-pointer group relative" onClick={() => setShowMenu(!showMenu)}>
                   <img className="w-8 rounded-full" src={userData.image} alt="profileimg"/>
                   <img className="w-3" src="/images/cross_icon.png" alt="dropdownicon"/>

                   <div className="absolute top-0  right-0 pt-14 text-black font-medium z-20  shadow-md hidden group-hover:block">
                    <div className="min-w-48 bg-slate-200 rounded flex flex-col gap-4 p-4">
                        <p onClick={() => navigate('/myprofile')} className=" hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={() => navigate('/myappointment')} className=" hover:text-black cursor-pointer">My Appointment</p>
                        <p onClick={logOut} className=" hover:text-black cursor-pointer">LogOut</p>
                    </div>
                   </div>
            </div>

            : <button onClick={() => navigate('/login')} className="bg-primary rounded-full hidden md:block font-light px-8 py-3 text-white ">Create Account</button>
          }

      <img onClick={() => setShowMenu(true)} className="md:hidden w-6" src='images/menu_icon.svg' alt="searchicon"/>
     {/*- Mobile menu--*/}
     <div className={`md:hidden right-0  top-0 bottom-0 overflow-hidden  transition-all bg-white z-50 ${showMenu ? 'fixed  w-full' : 'h-0 w-0'}`}>
      <div className="flex items-center justify-between px-5 py-6">
        <img className="w-36" src="images/finallogo.png" alt="" />
        <img className="w-7" onClick={() => setShowMenu(false)} src="images/cross_icon.png" alt="" />
      </div>
      <ul className="flex flex-col items-center gap-2 mt-5 px-5 font-medium text-lg"> 
        <NavLink  to='/' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
        <NavLink  to='/doctor' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
        <NavLink  to='/about' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
        <NavLink  to='/contact' onClick={() => setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
      
      </ul>
     </div>
     
     
      </div>
      
    </div>
  );
};

export default Navbar;
