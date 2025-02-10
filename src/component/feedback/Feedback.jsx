import React from "react";
import Feedbackbox from "./Feedbackbox";
import "./Feedback.css";

const Feedback = () => {
  return (
    <div className="flex flex-col innerSection gap-15 max-w-[1240px]">
      <h2 className="text-center text-5xl font-semibold tracking-[0.92px] leading-[56px]">
        Kind Words From Our Customers
      </h2>
      <div className="flex mobileWrapper flex-row gap-10">
        <Feedbackbox
          designation={"CEO of Asana"}
          customerName={"Brooklyn Simmons"}
          comment={`"Your company is truly upstanding and is behind its
product 100%. It's the perfect solution for our business.
It has really helped our business."`}
          maxStars={5}
        />
        <Feedbackbox
          designation={"CEO of Asana"}
          customerName={"Brooklyn Simmons"}
          comment={`"Your company is truly upstanding and is behind its
product 100%. It's the perfect solution for our business.
It has really helped our business."`}
          maxStars={5}
        />
      </div>
    </div>
  );
};

export default Feedback;
