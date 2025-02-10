import React from "react";

const Cards2 = (props) => {
  const { heading, text, img } = props;
  return (
    <div className="card-container  ">
      <div className="cardsBox  ">
        <div className="card cardInner">
          <div className="icon-container">
            <img className="" src={img} alt="" />
          </div>
          <h4>{heading}</h4>
          <p className="">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
