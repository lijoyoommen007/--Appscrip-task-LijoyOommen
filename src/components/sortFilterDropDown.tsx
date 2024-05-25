import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaCheck } from "react-icons/fa6";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  onSelect: (option: Option) => void;
}

const CustomDropdown: React.FC<Props> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string>('Choose a value');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the first option as the default selected option when component mounts
    if (options.length > 0 && !selectedOption) {
      setSelectedOption(options[0]);
    }
  }, [options, selectedOption]);

  useEffect(() => {
    if (selectedOption) {
      setSelectedOptionLabel(selectedOption.label);
    } else {
      setSelectedOptionLabel('Choose a value');
    }
  }, [selectedOption]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex justify-center w-full rounded-md bg-white md:px-4 md:py-2 text-base font-bold text-gray-700 focus:outline-none "
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
          >
            <span className={`font-bold`}>{selectedOptionLabel}</span>
            <IoIosArrowDown size={20} />
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1" role="none">
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${option.value === selectedOption?.value ? 'font-bold' : ''} flex justify-end align-middle gap-4`}
                role="menuitem"
              >
                {option.value === selectedOption?.value && <FaCheck size={20} />}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
