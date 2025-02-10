import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Footer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row innerSection  justify-between">
      <div className="md:max-w-[305px] py-10 md:px-15">
        <h5 className="text-[#191A23] text-center leading-6 font-extralight text-base ">
          We are creative people who provide the best way to you who want to
          have a new comfortable and suitable place to live
        </h5>
        <div className="flex justify-center md gap-4 mt-6  ">
          <div className="flex  flex-row gap-6">
            <div className="agents-icon-container ">
              <IoIosCall color="white" size={13} />
            </div>
            <div className="agents-icon-container">
              <FaInstagram color="white" size={13} />
            </div>
            <div className="agents-icon-container">
              <FaFacebookF color="white" size={13} />
            </div>
            <div className="agents-icon-container">
              <FaTwitter color="white " size={13} />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row md:px-5">
        {" "}
        <div className="md:px-8">
          <p className="mb-4"> Pages</p>
          <ul className="text-[#191A23] leading-8 text-base  font-medium ">
            <li>
              <a href="">Home V1</a>
            </li>
            <li>
              <a href="">Home V2</a>
            </li>{" "}
            <li>
              <a href="">Home V3</a>
            </li>{" "}
            <li>
              <a href="">Search Properties V1</a>
            </li>{" "}
            <li>
              <a href="">Search Properties V2</a>
            </li>{" "}
            <li>
              <a href=""> Properties Details V1</a>
            </li>
            <li>
              <a href=""> Properties Details V2</a>
            </li>
            <li>
              <a href=""> Agent List V1</a>
            </li>
            <li>
              <a href=""> Agent List V2</a>
            </li>
          </ul>
        </div>
        <div className="mt-10 px-8">
          <ul className="text-[#191A23] leading-8 text-base  font-medium ">
            <li>
              <a href="">Agent Details V1</a>
            </li>
            <li>
              <a href="">Agent Details V2</a>
            </li>{" "}
            <li>
              <a href="">About Us V1</a>
            </li>{" "}
            <li>
              <a href="">About Us V2</a>
            </li>{" "}
            <li>
              <a href="">Contact Us V1</a>
            </li>{" "}
            <li>
              <a href=""> Contact Us V2</a>
            </li>
            <li>
              <a href=""> FAQ</a>
            </li>
          </ul>
        </div>
        <div className="pl-6">
          <p className="mb-4">Utility Pages</p>
          <ul className="text-[#191A23] leading-8 text-base  font-medium ">
            <li>
              <a href="">Sign In</a>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>{" "}
            <li>
              <a href="">Forgot Password</a>
            </li>{" "}
            <li>
              <a href="">Reset Password</a>
            </li>{" "}
            <li>
              <a href="">404 Error Page</a>
            </li>{" "}
            <li>
              <a href="">Protected Page</a>
            </li>
            <li>
              <a href="">Style Guide</a>
            </li>
            <li>
              <a href=""> Agent List V1</a>
            </li>
            <li>
              <a href=""> Liceneses</a>
            </li>
            <li>
              <a href=""> Changelog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
