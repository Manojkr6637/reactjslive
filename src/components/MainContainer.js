import React from "react";
import Sidebar from "./Sidebar";
import banner from "./../assets/images/banner.png";
function MainContainer() {
  return (
    <div className="m-2">
      <div className="w-[60%]">
        <img src={banner} className="h-[300px]" alt="My Profile" />
      </div>     
      <div className="w-[40%] h-[50rem]">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainContainer;
