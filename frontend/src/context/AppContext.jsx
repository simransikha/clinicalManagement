import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const backendurl = import.meta.env.VITE_BACKEND_URL;

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);

const [userData, setUserData] = useState(false);


  const getDoctorData = async () => {
    try {
      const { data } = await axios.get(backendurl + '/api/v1/doctor/list');
      if (data.success) {
        setDoctors(data.doctors);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadUserProfile = async() => {
    try {
      const { data } = await axios.get(backendurl + '/api/user/getProfile', {headers: {Authorization: `Bearer ${token}`}});
      
      if (data.success) {
        setUserData(data.data);
      }
      else{
        toast.error(data.message);
      }



    } catch (error) {
      console.log(error.message);
      
      
    }
  }

  const values = {
    doctors,
    setDoctors, 
    token,
    setToken,
    backendurl,
    userData,
    setUserData,
    getDoctorData,  
    loadUserProfile
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  useEffect(() => {
    if(token){
      loadUserProfile();
      }
      else{
        setUserData(false);
      }
  }
  ,[token]);
 

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;