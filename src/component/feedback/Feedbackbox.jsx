import React from "react";

const Feedbackbox = (props) => {
  const { comment, customerName, designation, maxStars } = props;
  const starSrc = "/src/assets/Star.png";
  return (
    <div className="Feedbackbox-container ">
      <div className="star-container">
        {Array.from({ length: maxStars }).map((_, index) => (
          <img key={index} src={starSrc} alt="ratings" />
        ))}
      </div>
      <p className="md:text-[20px] md:leading-[32px] font-light">{comment}</p>
      <div>
        <h4 className="md:text-2xl">{customerName}</h4>
        <p className="">{designation}</p>
      </div>
    </div>
  );
};

export default Feedbackbox;
