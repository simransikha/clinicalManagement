import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white order-r">
      {aToken && (
        <ul>
          <NavLink to={"/admin-dashboard"} className={({isActive}) => `flex items-center  gap-3 py-3.5 px-3 mid:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-slate-300 border-r-4 border-cyan-600 ' : ''}  `} >
            <img src="images/home_icon.svg" alt="home" />
            <p>DashBoard</p>
          </NavLink>
          <NavLink to={"/add-doctor"} className={({isActive}) => `flex items-center  gap-3 py-3.5 px-3 mid:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-slate-300 border-r-4 border-cyan-600 ' : ''}  `}>
            <img src="images/add_icon.svg" alt="home" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink to={"/doctorlist"} className={({isActive}) => `flex items-center  gap-3 py-3.5 px-3 mid:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-slate-300 border-r-4 border-cyan-600 ' : ''}  `}>
            <img src="images/people_icon.svg" alt="home" />
            <p>Doctor List</p>
          </NavLink>
          <NavLink to={"/all-appointment"} className={({isActive}) => `flex items-center  gap-3 py-3.5 px-3 mid:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-slate-300 border-r-4 border-cyan-600 ' : ''}  `}>
            <img src="images/appointment_icon.svg" alt="home" />
            <p>All Appointment</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
