import Image from "next/image";
import { GoHeart } from "react-icons/go";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName }) => {
  return (
    <div className="z-20 bg-gray-50 hover:bg-gray-100 shadow-md overflow-hidden w-[47%] h-72 md:w-96 md:h-96 flex flex-col mt-8 transform transition-transform duration-300 hover:scale-100">
      <div className="overflow-hidden flex justify-center">
        <img
          className="md:h-64 h-56 w-full object-contain transition-transform duration-300 hover:scale-110"
          src={imageSrc}
          alt={productName}
          fetchPriority="high" // Add priority property
        />
      </div>
      <div className="md:p-4 pl-3  flex-grow flex flex-col justify-between">
        <p className="md:text-lg sm:text-base font-semibold transition-transform duration-300 hover:scale-105">{productName}</p>
        <div className="flex items-center justify-between md:mt-2 mt-1 mb-2">
          <p className="text-xs md:text-sm text-gray-600 transition-transform duration-300"><span className="underline cursor-pointer md:text-sm text-xs">Sign in</span>{" "}or Create an account to see the pricing</p>
          <GoHeart className="w-6 h-6 text-gray-500 cursor-pointer transition-transform duration-300 hover:text-red-600  hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
