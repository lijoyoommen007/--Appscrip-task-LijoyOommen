"use client"
import Image from "next/image";
import * as React from "react";
import dynamic from "next/dynamic";
const CustomDropdown = dynamic(() => import('./dropDown'));
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { followUsData, paymentMethodsData, quickLinkData } from "@/constants";

type FormComponentProps = {
    id: string;
    label: string;
    placeholder: string;
    buttonText: string;
};

const FormComponent: React.FC<FormComponentProps> = ({ id, label, placeholder, buttonText }) => (
    <form className="flex gap-4 mt-10 text-lg max-md:flex-wrap max-md:mt-8 max-md:max-w-full">
        <label htmlFor={id} className="sr-only">
            {label}
        </label>
        <div className="flex flex-wrap gap-4 max-md:flex-nowrap">
            <input
                type="email"
                id={id}
                placeholder={placeholder}
                aria-label={label}
                className="grow px-6 py-4 bg-white text-neutral-300 w-60 max-md:px-5 max-md:w-48"
            />
            <button type="submit" className="px-12 py-4 font-medium text-white uppercase whitespace-nowrap bg-black rounded-md border border-white border-solid max-w-max max-md:px-5 max-md:py-2.5 max-md:text-lg">
                {buttonText}
            </button>
        </div>
    </form>
);



const ContactInfo: React.FC = () => (
    <section className="flex flex-col grow text-base font-bold text-white max-md:mt-10 max-md:max-w-full">
        <h2 className="text-lg uppercase max-md:max-w-full">{"CONTACT US"}</h2>
        <div className="flex md:block">
            <p className="mt-6 max-md:max-w-full text-xs md:text-base">+44 221 133 5360 </p> <span className="mt-5 md:hidden block ml-2 mr-2">{" "}&#11049;{" "}</span>
            <p className="mt-6 max-md:max-w-full text-xs md:text-base">customercare@mettamuse.com </p>
        </div>
        <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

        <h2 className="mt-8 text-lg uppercase max-md:max-w-full">Currency</h2>

        <div className="flex gap-1.5 items-center self-start mt-6 tracking-wider whitespace-nowrap">
            <Image width={0} height={0} loading="lazy" src="/images/USA.svg" alt="" className="shrink-0 self-stretch w-6 aspect-square" />&#11049;
            <div className="self-stretch my-auto">USD</div>
        </div>
        <p className="mt-5 text-xs max-md:max-w-full md:block hidden">
            Transactions will be completed in Euros and a currency reference is available on hover.
        </p>
    </section>
);

const QuickLinks: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    return (
        <section className="flex flex-col grow text-lg text-white ">


            <div className="md:mt-0 md:flex-grow md:flex md:flex-col hidden">
                <h2 className="text-xl font-bold uppercase">Quick Links</h2>
                {quickLinkData.map((data, index) => (
                    <a key={index} href={data.href} className={`md:mt-4 cursor-pointer transition-transform duration-300 hover:scale-110`}>
                        {data.title}
                    </a>
                ))}
                <p className="md:block hidden mt-auto text-sm text-center md:mt-4">Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>

            <div className="md:hidden" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <CustomDropdown options={quickLinkData} title="Quick Links" />
            </div>
        </section>
    );
};



const FollowUs: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);


    return (
        <section className="flex flex-col grow text-lg text-white max-md:mt-6">
            <div className="md:mt-0 md:flex-grow md:flex md:flex-col hidden">
                <h2 className="text-xl font-bold uppercase">mettā muse</h2>
                {followUsData.map((data, index) => (
                    <a key={index} href={data.href} className={`md:mt-4 cursor-pointer transition-transform duration-300 hover:scale-110`}>
                        {data.title}
                    </a>
                ))}
            </div>
            <div className="md:hidden" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <CustomDropdown options={followUsData} title="mettā muse" />
            </div>
        </section>
    );
};


const SocialIcons: React.FC = () => (
    <div className="flex gap-3 self-start pr-2.5 mt-8">
        <Image width={0} height={0} loading="lazy" src="/images/instagram.svg" alt="Social Icon 1" className="shrink-0 w-8 aspect-square cursor-pointer transition-transform duration-300 hover:scale-110" />
        <Image width={0} height={0} loading="lazy" src="/images/linkedin.svg" alt="Social Icon 2" className="shrink-0 w-8 aspect-square cursor-pointer transition-transform duration-300 hover:scale-110" />
    </div>
);

const PaymentMethods: React.FC = () => (
    <div className="flex gap-1 md:gap-2 justify-center md:pr-12 mt-6 max-md:flex-wrap max-md:pr-5">
        {paymentMethodsData.map((method, index) => (
            <Image
                key={index}
                width={0}
                height={0}
                loading="lazy"
                src={method.src}
                alt={method.alt}
                className="shrink-0 w-12 md:w-14 aspect-[1.59] cursor-pointer transition-transform duration-300 hover:scale-110"
            />
        ))}
    </div>
);

const SocialsAndPayments: React.FC = () => {
    const [isSocialDropdownOpen, setIsSocialDropdownOpen] = React.useState(false);

    return (
        <section className="flex flex-col max-md:mt-6 max-md:max-w-full">
            <h2 className="text-xl font-bold text-white uppercase max-md:max-w-full hidden md:block">Follow Us</h2>
            <div className="flex justify-between items-center  md:hidden">
                <h2 onClick={() => setIsSocialDropdownOpen(!isSocialDropdownOpen)} className="text-xl font-bold text-white uppercase max-md:max-w-full block md:hidden">Follow Us</h2>
                {isSocialDropdownOpen ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
            </div>
            <div className="hidden md:block">
                <SocialIcons />
            </div>
            {isSocialDropdownOpen ? (
                <SocialIcons />
            ) : ""}
            <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

            <h2 className="mt-16 text-lg font-bold text-white uppercase max-md:mt-10 max-md:max-w-full">
                mettā muse <span className="uppercase">Accepts</span>
            </h2>
            <PaymentMethods />
        </section>
    );
};

export default function Footer() {

    return (
        <div className="flex flex-col items-center px-20 md:pt-10 pt-5 pb-4 w-full bg-black max-md:px-5 max-md:max-w-full">
            <div className="w-full max-w-[1248px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-lg font-bold text-white uppercase max-md:max-w-full">Be the first to know</h1>
                            <p className="mt-8 text-base text-white max-md:max-w-full">Sign up for updates from mettā muse.</p>
                            <FormComponent id="emailInput" label="Enter your email" placeholder="Enter your e-mail..." buttonText="Subscribe" />
                            <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                        </div>
                    </section>

                    <ContactInfo />

                </div>
            </div>
            <hr className=" shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />
            <div className="mt-5 w-full max-w-[1248px] md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <nav className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
                        <FollowUs />
                        <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                    </nav>
                    <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-7 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <QuickLinks />
                                <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                                <SocialsAndPayments />
                                <hr className="md:hidden block shrink-0 self-end mt-10 max-w-full h-px bg-gray-500 border border-gray-500 border-solid w-[1248px]" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="sm:block md:hidden mt-4 text-sm text-center md:mt-4">Copyright © 2023 mettamuse. All rights reserved.</p>

        </div>
    );
}