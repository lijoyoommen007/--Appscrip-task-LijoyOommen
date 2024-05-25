import { useState } from 'react';
import { IoIosArrowDown, IoMdArrowUp } from 'react-icons/io';

interface Option {
    key: string;
    value: string;
}

interface CustomDropdownProps {
    options: Option[];
    filterKey: string;
    filters: Record<string, string[]>;
    setFilters: (key: string, values: string[]) => void;
    heading: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, filterKey, filters, setFilters, heading }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        const index = selectedFilters.indexOf(option.key);
        let newFilters = [...selectedFilters];
        if (index === -1) {
            newFilters.push(option.key);
        } else {
            newFilters.splice(index, 1);
        }
        setSelectedFilters(newFilters);
        setFilters(filterKey, newFilters);
    };

    const handleUnselectAll = () => {
        setSelectedFilters([]);
        setFilters(filterKey, []);
    };

    return (
        <div className="custom-dropdown text-black border-b-2 mt-5">
            <p className="px-12 font-bold text-lg">{heading}</p>
            <div className="flex justify-between">
                <div
                    className="dropdown-header  flex items-center justify-between w-full rounded-md bg-white px-12 py-2  text-base text-gray-700 focus:outline-none cursor-pointer"
                    onClick={handleToggleDropdown}
                >
                    {selectedFilters.length > 0 ? selectedFilters.map(filter => options.find(option => option.key === filter)?.value).join(', ') : 'All'}
                    <span className="ml-auto">
                        {isOpen ? <IoMdArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                    </span>
                </div>
            </div>
            <div className={`options transition-max-height duration-300 ease-in-out px-10 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div
                    className="option p-2 bg-white cursor-pointer flex items-center text-sm text-stone-400 underline"
                    onClick={handleUnselectAll}
                >
                    Unselect All
                </div>
                {options.map((option) => (
                    <div
                        key={option.key}
                        className={`option p-4 bg-white text-sm cursor-pointer flex items-center ${selectedFilters.includes(option.key) ? 'bg-gray-200' : ''}`}
                    >
                        <input
                            type="checkbox"
                            id={option.key}
                            checked={selectedFilters.includes(option.key)}
                            onChange={() => handleOptionClick(option)}
                            className="mr-2 h-4 w-4"
                        />
                        <p onClick={() => handleOptionClick(option)}>{option.value}</p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default CustomDropdown;
