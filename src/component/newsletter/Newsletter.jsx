import React from "react";

const Newsletter = () => {
  return (
    <div className="relative  innerSection mt-[20vh] h-auto">
      <div className="rounded-2xl max-w-[1240px] h-auto px-4 md:pl-[74px]  py-[58px] bg-[#062877] ">
        <img
          src="/src/assets/NewsLetter.svg"
          alt="newsletter"
          className="absolute bottom-0 right-0"
        />
        <div className="flex flex-col relative max-w-[414px] gap-5 justify-start  ">
          <h2 className="text-white ">Subscribe to Our Newsletter</h2>
          <h6>
            Join our newsletter to stay up to date on features and releases.
          </h6>
          <a
            href="#"
            className="bg-[#191A23]  rounded-2xl text-white absolute  bottom-9 px-4 py-3 right-1 md:px-[33px] md:py-[17px] hover:scale-105 hover:bg-black"
          >
            Subscribe
          </a>
          <div className="border-2 rounded-2xl  bg-white border-gray-400 rounded-5xl py-[25px] pl-[17px] ">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              className=" px-2 border-none focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
