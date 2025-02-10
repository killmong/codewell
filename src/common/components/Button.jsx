import React from "react";
const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text, link, className } = props;
  return (
    <div>
      <a href={link} className={className }>
        {text}
      </a>
    </div>
  );
};
export default Button;
