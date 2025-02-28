import React from "react";
import "./Agents.css";
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const AgentsCard = ({ heading, text, imgLink }) => {
  return (
    <div className="agents-card-container relative">
      <div className="flex flex-col gap-2">
        <h4>{heading}</h4>
        <p className="md:text-xl ">{text}</p>
        <div className="flex  flex-row gap-3">
          <div className="agents-icon-container ">
            <IoIosCall color="white" size={13} />
          </div>
          <div className="agents-icon-container">
            <FaInstagram color="white" size={13} />
          </div>
          <div className="agents-icon-container">
            <FaFacebookF
              color="white"
              size={13}
            />
          </div>
          <div className="agents-icon-container">
            <FaTwitter
              color="white "  size={13}
            />{" "}
          </div>
        </div>
      </div>
      <div className="rounded-2xl imgSection mt-2  w-full h-full lg:w-[108px]  lg:h-[108px] ">
        <img src={imgLink} className="object-cover  top-4 right-2 absolute md:top-4 md:right-4 lg:right-3 lg:top-6 " alt="agent profile" />
      </div>
    </div>
  );
};

export default AgentsCard;
