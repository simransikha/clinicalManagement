import React, { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [specialization, setSpecialization] = useState("Generalphysician");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const { aToken, backendurl } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", fees);
      formData.append("speciality", specialization);
      formData.append("degree", education);
      formData.append("address", address);
      formData.append("about", about);
      formData.append("image", docImg);

      // Log form data for debugging
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      const { data } = await axios.post(
        `${backendurl}/api/v1/addDoctor`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${aToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        toast.success("Doctor added successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error response:", error.response);
      toast.error("An error occurred while adding the doctor");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium"> Add Doctor </p>
      <div className="px-8 py-8 bg-white rounded border-gray-400 w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <label htmlFor="doc-img">
            <img
              className="w-16 cursor-pointer rounded-full bg-gray-100"
              src={
                docImg ? docImg : "images/upload_area.svg"
              }
              alt="user"
            />
          </label>
          <input
            onChange={(e) => {
              // convert image to base64 string
              const reader = new FileReader();
              reader.onload = () => {
                if (reader.readyState === 2) {
                  setDocImg(reader.result);
                }
              };
              reader.readAsDataURL(e.target.files[0]);
            }}
            id="doc-img"
            className="hidden"
            type="file"
            accept="image/*"
            
          />
          <p>
            Upload Doctor <br />
            Picture
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-500">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="name"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="email"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="password"
                required
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
              </select>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <p>Specialization</p>
              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                className="border rounded px-3 py-2"
              >
                <option value="Generalphysician">General physician</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Neurologist">Neurologist</option>
              </select>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setEducation(e.target.value)}
                value={education}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="education"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2"> About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="about doctor"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-10 py-3 rounded-full mt-4"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;