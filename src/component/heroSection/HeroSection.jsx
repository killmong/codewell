import React from "react";
import "./HeroSection.css";
import IconProvider from "../../common/components/IconProvider";
import Button from "../../common/components/Button";

const HeroSection = () => {
  return (
    <div className="relative innerSection my-4">
      {/* Background wrapper */}
      <div className="hero-bg-Wrapper">
        {/* 
          The flex container stacks items vertically on small screens (flex-col)
          and places them side-by-side (flex-row) on medium screens and up.
        */}
        <div className="heroSection flex flex-col lg:flex-row mx-auto items-center xl:items-start">
          {/* Text Section */}
          <div className="heroText flex flex-col gap-3 p-4 md:p-0">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black font-semibold md:leading-[44px] xl:leading-[88px] tracking-[-2.88px] 
                           md:w-[608px]"
            >
              We help people to realize their dream property
            </h1>

            <p
              className="font-light leading-[30px] text-xl text-[#686A79] text-left 
                          lg:w-[608px]"
            >
              We are creative people who provide the best way <br />
              to you who want to have a new confortable and <br /> suitable
              place to live
            </p>

            {/*
              The button and icons container is designed to stack vertically on small screens
              (using flex-col) and then align horizontally on medium screens and up (using flex-row).
              We also change the positioning from relative (for mobile flow) to absolute on larger screens.
            */}
            <div
              className="btn flex flex-col md:flex-row justify-between border-2 p-5 
                            relative lg:absolute lg:top-[450px] xl:top-[450px] lg:w-auto w-full"
            >
              <IconProvider
                name="Location"
                value="California, US"
                icon={"/src/assets/Location.png"}
              />
              <IconProvider
                name="Price"
                value="$1500-$2500"
                icon={"/src/assets/price.png"}
              />
              <IconProvider
                name="Type Of Property"
                value="Apartment"
                icon={"/src/assets/Property.png"}
              />

              <Button
                link="#"
                className="w-full  md:w-[135px] px-[33px] py-[19px] rounded-2xl font-bold 
                           text-center relative top-8 text-white bg-[#062877]  md:mt-0"
                text={"Browse"}
              ></Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative  mt-4 flex flex-col   items-center gap-4">
            <img
              className="heroImage1 "
              src="/src/assets/heroImage1.png"
              alt="Hero 1"
            />
            <img
              className="heroImage2 "
              src="/src/assets/heroImage2.png"
              alt="Hero 2"
            />
            <img
              className="heroImage3 "
              src="/src/assets/heroImage3.png"
              alt="Hero 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
