import React, { useState } from "react";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    image: "images/profile_pic.png",
    email: " john.doe@example.com",
    phone: "1234567890",
    address: "123 Main St, City, State, 12345",
    dob: "1990-01-01",
    gender: "Male",
  });

  const [edit, setEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="Profile Pic" />
      {!edit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <h2 className="text-3xl font-medium text-neutral-300 mt-4">
          {userData.name}
        </h2>
      )}
      <hr className="border-neutral-300 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-4">Contact Information </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Id: </p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone</p>
          {!edit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-blue-500">{userData.phone}</h2>
          )}
          <p className="font-medium">Address</p>
          {!edit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.address}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-gray-500">{userData.address}</h2>
          )}
        </div>
        <div>
          <p className="text-neutral-500 underline mt-4">Basic Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
            <p className=" font-medium">Gender</p>
            {edit ? (
              <select
                className="bg-gray-100 max-w-20"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            ) : (
              <h2 className="text-gray-500">{userData.gender}</h2>
            )}

            <p className="font-medium">Date of Birth</p>
            {!edit ? (
              <input
                className="bg-gray-100 max-w-28"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
              />
            ) : (
              <h2 className="text-gray-500">{userData.dob}</h2>
            )}
          </div>
        </div>
      </div>
      <div className=" mt-10">
        {edit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full  hover:bg-primary transition-all hover:text-white "
            onClick={() => setEdit(false)}
          >
            Save
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary transition-all hover:text-white  "
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
