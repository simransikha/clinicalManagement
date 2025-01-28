import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedDoctor from "../component/RelatedDoctor";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

      while (currentDate < endTime) {
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

        {/*----Booking slots-----*/}
  
       <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-900">
        <p className="text-3xl  font-bold">Booking Slots </p>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
       
       {
         docSlot.length && docSlot.map((item, index) => (
          <div key={index} className={`py-6 text-center border border-gray-300 cursor-pointer rounded-full min-w-16 ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`} onClick={() => {setSlotIndex(index); setSlotTime(item[0].time)}}>
            <p className="text-sm text-gray-900">{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
            <p className="text-sm text-gray-900">{item[0] && item[0].dateTime.getDate()}</p>
          </div>
          ))
       }
      </div>
         
     <div className="flex items-center w-full gap-3 overflow-x-scroll mt-4">
      {
        docSlot.length && docSlot[slotIndex].map((item, index) => (
          <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm cursor-pointer font-light flex-shrink-0 px-5 py-2 rounded-full ${item.time === slotTime ? ' bg-primary text-white' : 'border border-gray-800'}`} >{item.time.toLowerCase()}
          </p>
        ))
      }
     </div>

     <button  className=" bg-primary text-white text-sm font-light px-14 py-3 mt-4 rounded-full">Book an appointment</button>

      </div>

      {/*----related doctor-----*/}

      <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
      </div>

  )
);
};

export default Appointment;
