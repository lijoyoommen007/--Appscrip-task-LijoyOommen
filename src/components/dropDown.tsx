import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface Option {
  title: string;
  href: string;
}

interface CustomDropdownProps {
  title: string;
  options: Option[];
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="flex justify-between items-center" onClick={toggleDropdown}>
        <button className="text-xl font-bold uppercase" onClick={toggleDropdown} aria-expanded={isOpen ? "true" : "false"}>
          {title}
        </button>
        {isOpen ? <IoIosArrowUp onClick={toggleDropdown} size={20} /> : <IoIosArrowDown onClick={toggleDropdown} size={20} />}
      </div>
      {isOpen && (
        <div className="dropdown-menu flex flex-col" aria-labelledby="dropdownMenuButton">
          {options.map((option, index) => (
            <a key={index} className="mt-4 cursor-pointer transition-transform duration-300 hover:scale-110" href={option.href}>
              {option.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
