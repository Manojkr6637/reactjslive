import React from "react";
import logo from "./../logo.png";
const Footer = () => {
  return (
    <footer className="App-header bg-cyan-600 ">
      <div className="flex">
        <div className="w-[20rem] h-[4rem]">
          <img className=" m-2 p-2 w-[4rem] h-[3.5rem]" src={logo} alt="Logo" />
        </div>
        <div className="w-[120rem] h-[4rem] text-white">
          <p>This is a my personal profile.</p>
          <p>This is a my personal profile.</p>
        </div>
        <div className="w-[20rem] h-[4rem]"></div>
      </div>
    </footer>
  );
};

export default Footer;
