import React from "react";

const CitiesCard = ({ heading, text, img }) => {
  return (
    <div className="card-container">
      <div className="cardsBox">
        <div className="cities-cardInner ">
          <div className="w-full  md:w-[363px] md:h-[363px]">
            <img className="" src={img} alt="cities card" />
          </div>
          <div className="px-5 py-6">
            <h4>{heading}</h4>

            <div className="flex flex-row gap-1">
              <img src="/src/assets/cities/Vector.svg" alt="" />
              <p className="text-base">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesCard;
