import React from "react";

const Footer = () => {
  return (
    <div className="md:mx-10">
    <div className="flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] md:flex-row gap-14 my-10 mt-40 bg-white text-black text-sm">
      {/* left */}
      <div className="">
        <img
          src="/images/finallogo.png"
          alt="logo"
          className="w-40  bg-slate-200"
        />
        <p className="w-full md:w-2/3  text-gray-400 ">
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Fugiat, praesentium?
        </p>
      </div>
      {/* center */}
      <div className="text-xl font-medium mb-5">
        <h1 className="font-semibold">Quick Links</h1>
        <ul className="flex flex-col gap-2 md:mt-4 text-gray-400">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li className="">
            <a href="#">About</a>
          </li>
          <li className="">
            <a href="#">Contact</a>
          </li>
          <li className="">
            <a href="#">Doctor</a>
          </li>
        </ul>
      </div>

      {/* right */}
      <div className="text-xl font-medium mb-5">
        <h1 className="text-lg font-semibold">Contact Us</h1>
        <ul className="flex flex-col gap-2 text-gray-400">
          <li className="">
             Address:
             <br/> 123, abc street
          </li>
          <li className="">
          Phone: 1234567890
          </li>
          <li className="">
          Email:
            <a href="mailto: 
               
            ">
            {" "}
            info@xyz.com
            </a>
          </li>
          
        </ul>
</div>
    
    </div>
      <div className="">
        <hr />
      <p className="text-black text-lg font-bold text-center">Copyright 2023</p>
    </div>
    </div>
  );
};

export default Footer;
