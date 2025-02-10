import React from "react";
import { BsArrowRight } from "react-icons/bs";

const FeatureHeadings = ({ heading, link, linkText }) => {
  return (
    <div className="flex  pb-[32px] max-w-[1160px] justify-between ">
      <h2 className="md:text-5xl">{heading}</h2>
      <div className="flex gap-1">
        <a href={link} className="font-extrabold text-xs md:text-lg   text-[#191A23]">
          {linkText}
        </a>
        <span>
          <BsArrowRight size={20}  />
        </span>
      </div>
    </div>
  );
};

// //styleName: homezy.webflow.io/Hanken Grotesk/Bold;
// font-family: var(--fontfamilyFont1);
// font-size: var(--fontsize18);
// font-weight: 700;
// line-height: var(--lineheight22);
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;

export default FeatureHeadings;
