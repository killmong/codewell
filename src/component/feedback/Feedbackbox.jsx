import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
      <div className="absolute right-10 bottom-15" >
        <img src="/src/assets/Next.png" alt="" />
      </div>
    </div>
  );
};

export default Feedbackbox;
