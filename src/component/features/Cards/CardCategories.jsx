import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const CardCategories = (props) => {
  const { imgLink, heading, text } = props;
  

  return (
    <div>
    <div className="categories-card-wrapper">
      <div className="flex flex-row gap-3 justify-between">
        <div className="categories-img-container">
          <img src={imgLink} alt="" />
        </div>
        <div>
          <h4>{heading}</h4>
          <p>{text}</p>
        </div>
        <div className="flex flex-row ">
          <a href="">View </a>
          <GoArrowUpRight size={20} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardCategories;
