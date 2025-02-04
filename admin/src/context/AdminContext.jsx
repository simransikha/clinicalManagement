import axios from "axios";
import { useState, createContext } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [doctors, setDoctors] = useState([]);
  const backendurl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctor = async () => {
    try {
      const { data } = await axios.get(
        backendurl + '/api/v1/all-doctors',
        {
          headers: { Authorization: `Bearer ${aToken}` },
        }
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const checkAvailability = async (docId) => {
    try {
      const { data } = await axios.post(
        backendurl + '/api/v1/change-availability',
        { docId },
        {
          headers: { Authorization: `Bearer ${aToken}` },
        }
      );
      if (data.success) {
        toast.success(data.message);
        getAllDoctor();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setAToken,
    backendurl,
    getAllDoctor,
    doctors,
    checkAvailability,
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
