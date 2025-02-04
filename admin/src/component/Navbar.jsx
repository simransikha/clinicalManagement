import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken,setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logOut = () => {
        navigate('/');
    aToken &&  setAToken('');
     aToken && localStorage.removeItem("aToken");
    }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img  className="w-36 sm:w-24 cursor-pointer" src="images/finallogo.png" alt="Logo" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">{aToken ? "Admin" : "Doctor"}</p>
      </div>
      <button onClick={logOut} className="bg-cyan-600 text-white text-sm px-10 py-2 rounded-full">LogOut</button>
    </div>
  );
};

export default Navbar;
