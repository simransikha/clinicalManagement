import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const doctoInfo = doctors.find((item) => item._id === docId);
    setDocInfo(doctoInfo);
    console.log(doctoInfo);
  };

  const getAvailableSlot = () => {
    setDocSlot([]);

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let slots = [];

      while (today < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        slots.push({
          dateTime: new Date(currentDate),
          time: formatedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlot((prev) => [...prev, slots]);
    }
  };

  useEffect(() => {
    getAvailableSlot();
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot]);

  return (
    docInfo && (
      <div className="">
        {/*----doctor details-----*/}

        <h1 className="text-3xl text-center font-bold">{docInfo?.name}</h1>
        <div className="flex flex-col sm:flex-row  gap-5">
          <div className="">
            <img
              className="w-full sm:w-72  bg-primary rounded-lg"
              src={docInfo?.image}
              alt={docInfo?.name}
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg  p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0 mt-[-80px]">
            <p className="flex items-center gap-2 text-xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-4" src="/images/verified_icon.svg" alt="" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-500">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-sm rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/*----about-----*/}
            <div className="">
              <h1 className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src="/images/info_icon.svg" alt="" />
              </h1>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            {/*----appointment fee-----*/}
            <p className=" font-medium text-gray-900 mt-4">
              Appontment Fee:{" "}
              <span className="text-lg font-medium text-gray-900">
                ${docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/*----appointment form-----*/}
        <div className="flex flex-col items-center gap-5 mt-5">
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
          <p className="text-sm">
            Please fill the form below to book an appointment
          </p>
          <form className="flex flex-col items-center gap-5">
            <input
              type="text"
              placeholder="Name"
              className="w-96 h-10 p
          x-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-96 h-10 p
          x-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-96 h-10 p
          x-3 border border-gray-300 rounded"
            />
            <input
              type="date"
              className="w-96 h-10 p
          x-3 border border-gray-300 rounded"
            />
            <input
              type="time"
              className="w-96 h-10 p
          x-3 border border-gray-300 rounded"
            />
            <button className="w-96 h-10 bg-blue-500 text-white rounded">
              Book Appointment
            </button>
          </form>
        </div>
        {/*----location details-----*/}
        <div className="flex flex-col items-center gap-5 mt-5">
          <h1 className="text-3xl font-bold">Location Details</h1>

          <p className="text-sm">Please find the location details below</p>
          <p className="text-sm">{docInfo?.address.line1}</p>

          <p className="text-sm">{docInfo?.address.line2}</p>

          <p className="text-sm">{docInfo?.address.city}</p>

          <p className="text-sm">{docInfo?.address.state}</p>
        </div>
      </div>
    )
  );
};

export default Appointment;
