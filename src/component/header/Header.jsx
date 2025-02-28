import { useState } from "react";
import NavBar from "../navbar/NavBar";
import Button from "../../common/components/Button";
import { Menu, X } from "lucide-react"; // Using lucide-react icons for hamburger

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header
        className="py-2 innerSection 
        sm:py-4"
      >
        <div className="flex flex-row justify-between items-center mx-auto">
          {/* Site Logo */}
          <div className="sitelogo   pt-3 md:pt-1 mb-4 md:mb-0">
            <img
              src="/src/assets/logo.png"
              alt="Site Logo"

              className="h-8  xl:w-[214px] w-[200px] sm:h-12"
            />
          </div>

          {/* NavBar and Button for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavBar />
          </div>
          <div className="hidden md:flex items-center xl:mr-20 ">
            <Button text="Contact us" link="#" className="btn  font-[700]" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <X className="h-6 w-6" /> // Close icon
              ) : (
                <Menu className="h-6 w-6" /> // Hamburger icon
              )}
            </button>
          </div>
        </div>

        {/* Hamburger Menu for Mobile and Tablet */}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="block">
            <NavBar />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
