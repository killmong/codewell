import React from "react";
import "./Cards.css";
import { HiSparkles } from "react-icons/hi";
const ListingCards = (props) => {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const { img, price, name, address, beds, area, baths } = props;
  return (
    <div className="card-container">
      <div className="cardsBox relative">
        <div className="absolute top-46 left-[-7px] bg-black px-1 py-2 rounded-t-[8px]  rounded-br-[8px] ">
          <label
            className="flex  gap-0.5  text-white text-sm "
            htmlFor="Featured"
          >
            <HiSparkles className="text-[#FDFCFC] ml-2  " size={20} />
            FEATURED
          </label>
        </div>
        <div className="listingCard ">
          <div>
          <img src={img} alt="Property images" className="object-cover md:w-[363px] md:h-[181px]" />
          
          </div>
          <div className="cardInner mt-8">
            <h4 className="text-[32px] pt-12">
              {price} <sub className="text-[#686A79] text-lg">/month</sub>
            </h4>

            <h4 className="text-[24px] tracking-[0.92px] ">{name}</h4>

            <p className="text-[#686A79]  my-4">{address}</p>

            <div className="flex md:flex-row flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="  mx-1.5  md:mx-0">
                  <img
                    src="/src/assets/features/bed.svg"
                    className="object-fill w-[24px] h-[24px] "
                    alt=""
                  />
                </div>
                <p>{beds}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-[40px] items-start h-[24px] object-cover ">
                  <img src="/src/assets/features/tub.svg" alt="bathTub" />
                </div>
                <p>{baths}</p>
              </div>
              <div className="flex flex-row gap-2">
                <div className=" mx-1.5  md:mx-0 ">
                  <img
                    src="/src/assets/features/bed.svg"
                    className="object-fill w-[24px] h-[24px] "
                    alt=""
                  />
                </div>
                <p>
                  {area} <sup>2</sup>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCards;
