"use client";
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, setFilteredProducts } from '../redux/slice';
import FilterBarHeader from './filterBarHeader'; // Assuming FilterBar is a separate component
const CustomDropdown = dynamic(() => import('./customFilterSelector'));

import ProductCard from "./productCards";
import { sortProducts, useMediaQuery } from '@/utils/utils';
import debounce from 'lodash.debounce';
import { filterData } from '@/constants';
import dynamic from 'next/dynamic';

interface Product { 
  id: number;
  title: string;
  category: string;
  price: number; 
  rating: number;
  meta: {
    updatedAt: string;
  };
  images: string[];
}
 
interface FilterLayoutProps {
  products: Product[];
}


const FilterLayout: React.FC<FilterLayoutProps> = ({ products }) => {
  const filters = useSelector((state: any) => state.filters.filters);
  const filteredProducts = useSelector((state: any) => state.filters.filteredProducts);
  const dispatch = useDispatch();
  const sortCriteria = useSelector((state: any) => state.filters.sortCriteria);
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const toggleSidebar = () => { 
    setIsOpen(!isOpen);
  };

  const applyFilters = useMemo(() => {
    return (product: Product) => {
      for (const key in filters) {
        if (filters[key].length === 0) continue; 
        if (!filters[key].some((filter: string) => product[key as keyof Product] === filter)) return false;
      }
      return true;
    };
  }, [filters]);
  
  useEffect(() => {
    const filtered = products.filter(applyFilters);
    dispatch(setFilteredProducts(filtered));
  }, [applyFilters, products, dispatch]);

  const handleFilterChange = (filterKey: string, selectedFilters: string[]) => {
    dispatch(setFilters({ [filterKey]: selectedFilters }));
  };



  const sortedProducts = sortProducts(filteredProducts, sortCriteria);
  const isBreakpoint = useMediaQuery(768)

  return (
    <>
      <FilterBarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex">
        <div className="flex">
          <div
            id="drawer-navigation"
            className={`transition-width duration-300 h-full overflow-y-auto bg-white ${isOpen||!isBreakpoint ? 'md:w-80 w-[100vw]' : 'w-0'}`}
            aria-labelledby="drawer-navigation-label"
          >
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center px-8">
                <input
                  type="checkbox"
                  id="customizable"
                  onChange={() => null}
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="customizable" className="ml-2" id="drawer-navigation-label">
                  <p className="text-lg text-gray-500 uppercase font-bold dark:text-gray-800 px-2">CUSTOMIZBLE</p>
                </label>
              </div>
              <button
                type="button"
                onClick={toggleSidebar}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="space-y-2 font-medium">
                  <CustomDropdown
                    options={filterData}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="IDEAL FOR"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="OCCASION"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="WORK"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="FABRIC"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="SEGMENT"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="SUITABLE FOR"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="RAW MATERIALS"
                  />
                  <CustomDropdown
                    options={[]}
                    filterKey="category"
                    filters={filters}
                    setFilters={handleFilterChange}
                    heading="PATTERNS"
                  />
            </div>
          </div>
          <div className={`flex-1 p-4 transition-width duration-300 ${isOpen ? 'hidden md:block' : 'block'}`}>
            <div className="md:mt-4 mt-1 text-black flex flex-wrap justify-evenly">
              {/* Render the sorted products */}
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} imageSrc={product.images[0]}  productName={product.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterLayout;
