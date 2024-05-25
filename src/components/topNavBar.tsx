"use client"
import * as React from "react";
import { CiGrid42 } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { navBarData } from "../constants"
import Image from "next/image";

interface BannerItemProps {
  component: any;
  text: string;
}

const BannerItem: React.FC<BannerItemProps> = ({ component, text }) => (
  <div className="flex gap-2.5">
    {component}
    <span>{text}</span>
  </div>
);

const Banner: React.FC = () => (
  <section className="flex justify-center items-center px-16 py-2 w-full text-xs text-rose-500 bg-black max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-center md:justify-between max-w-full w-[892px] max-md:flex-wrap">
      <BannerItem component={<CiGrid42 size={17} />} text="Lorem ipsum dolor" />

      <div className="hidden md:block">
        <BannerItem component={<CiGrid42 size={17} />} text="Lorem ipsum dolor" />
      </div>
      <div className="hidden md:block ">
        <BannerItem component={<CiGrid42 size={17} />} text="Lorem ipsum dolor" />
      </div>
    </div>
  </section>
);



const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className=" flex md:border-b-2 border-solid border-neutral-200 sm:border-b-0 flex-col md:items-center md:px-20  md:pb-6 w-full bg-white  max-md:px-5 max-md:max-w-full">

      <div className="  border-b-2 border-solid border-neutral-200 md:border-b-0 w-[100%] flex flex-wrap items-center justify-between mx-auto md:p-4 pt-4 pb-5">
        <div className="flex gap-4">
          <button
            type="button"
            className="inline-flex items-center md:p-2 w-6 h-6 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-black"
            aria-label="Toggle Menu"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <Image width={0} height={0} loading="lazy" src="/images/logo.svg" alt="" className="w-7 h-7 cursor-pointer" />
        </div>
        <a href="#" className="flex-auto text-center md:ml-48 self-stretch my-auto text-xl md:text-3xl font-extrabold text-black cursor-pointer">LOGO</a>
        <div className="flex gap-5 self-stretch my-auto text-base font-bold text-stone-800">
          <FiSearch className="cursor-pointer transition-transform duration-300 hover:scale-110" size={20}  />
          <GoHeart className="cursor-pointer transition-transform duration-300 hover:scale-110" size={20} />
          <BsHandbag className="cursor-pointer transition-transform duration-300 hover:scale-110" size={20} />
          <div className="hidden md:block">
            <FaRegUser className="cursor-pointer transition-transform duration-300 hover:scale-110" size={18} />
          </div>
          <div className=" gap-1.5 my-auto hidden md:flex">
            <span className="my-auto cursor-pointer">ENG</span>
            <IoIosArrowDown className="cursor-pointertransition-transform duration-300 hover:scale-110" size={20} />
          </div>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="font-bold text-stone-800 md:hidden flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:white:bg-gray-900 dark:border-black">
            {navBarData.map((data, index) => (
              <li key={index}>
                <a key={index} href={data.href} className="transition-transform duration-300 hover:scale-110">
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-black text-left mt-5 block md:hidden">
        <div className="flex">
          <a href="#" className="text-gray-400 transition-transform duration-300 hover:scale-110">HOME</a>
          <span className="mx-2">|</span>
          <a className="transition-transform duration-300 hover:scale-110" href="#">SHOP</a>
        </div>
      </div>

      <nav className="hidden lg:flex gap-5 justify-between mt-5 max-w-full text-xl font-bold text-stone-800 w-[550px] max-md:flex-wrap max-md:mt-10">
        {navBarData.map((data, index) => (
          <a key={index} href={data.href} className="justify-center py-1.5 whitespace-nowrap transition-transform duration-300 hover:scale-110 ">
            {data.title}
          </a>
        ))}
      </nav>
    </header>
  )
};

const NavBar: React.FC = () => (
  <div className="flex flex-col tracking-wider">
    <Banner />
    <Header />
  </div>
);

export default NavBar;