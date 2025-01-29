import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center pt-10 text-2xl text-gray-700">
        <p>
          Contact <span className="text-gray-500 font-semibold">Us</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-28 text-sm gap-10 items-center my-10">
        <img
          className="w-full md:w-[360px]"
          src="/images/contact_image.png"
          alt=""
        />
        <div className="flex flex-col gap-6 justify-center items-start">
          <p className="font-semibold text-lg text-black">
            Address:{" "}
            <span className="text-gray-700 text-base font-normal">
              123 Main St, Anytown, USA 12345{" "}
            </span>{" "}
          </p>
          <p className="font-semibold text-lg text-black">
            Phone: <span className="text-gray-700 text-base font-normal"></span>{" "}
            +939877856547{" "}
          </p>
          <p className="font-semibold text-lg text-black">
            Email:
            <a href="">
              <span className="text-blue-500">info@yourdomain.com</span>
            </a>
          </p>

          <p className="font-semibold text-lg text-black">
            Social Media:
            <a className="text-blue-500" href="">
              Facebook
            </a>
          </p>
          <button
            className="px-4 py-2 rounded-md text-white 
          bg-primary  hover:bg-blue-600 transition duration-300 ease-in-out  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            {" "}
            Send Message
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Contact;
