import React, { useState } from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul
          className="flex md:flex-row flex-col text-xs xl:text-
                           md:items-center xl:gap-[4vw] gap-4"
        >
          <li>
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Properties</a>
          </li>
          <li>
            <a href="">Agents</a>
          </li>
          <li><a href="">Pages</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
