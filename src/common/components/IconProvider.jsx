/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const IconProvider = ({ name, value, icon }) => {
  return (
    <div className="flex items-center gap-2 p-4  text-white">
      <div className="">
        <img src={icon} alt="" />
      </div>
      <div className="text-left flex-col mx-1 gap-1">
        <p className="text-sm font-light text-[#686A79]">{name}</p>
        <p className="font-semibold text-[#191A23] text-base ">{value}</p>
      </div>
    </div>
  );
};

export default IconProvider;
