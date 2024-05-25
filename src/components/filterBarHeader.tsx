import { useDispatch } from "react-redux";
const Dropdown = dynamic(() => import('./sortFilterDropDown'));

import { setSortCriteria } from '../redux/slice';
import { filterBarHeader } from "@/constants";
import dynamic from "next/dynamic";

interface Option {
    label: string;
    value: string;
}

interface FilterBarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ isOpen, toggleSidebar }) => {
    
    

    const dispatch = useDispatch();

    const handleSelect = (option: Option) => {
        dispatch(setSortCriteria(option?.value));
    };

    return (
        <div className="text-black w-full flex md:justify-between justify-evenly items-center p-4 md:pl-16 md:pr-16 border-t-2 border-b-2 sticky top-0 z-40 bg-white">
            <div className="flex md:w-max md:justify-start md:items-start justify-center items-center">
                <h4 className="font-bold text-lg hidden md:block">3425 ITEMS</h4>
                <div className="text-center">
                    <button
                        className="text-gray-600  hover:text-gray-800 font-serif ml-5 md:block hidden"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? `< HIDE FILTER` : `> SHOW FILTER`}
                    </button>

                    <button
                        className="text-black font-bold md:hidden block w-[50%]"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        {`FILTER`}
                    </button>
                </div>
            </div>
            <span className="md:hidden block pl-12"> |</span>
            <div className="flex justify-center items-center">
                <Dropdown options={filterBarHeader} onSelect={handleSelect} />
            </div>
        </div>
    );
};

export default FilterBar;
