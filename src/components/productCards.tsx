import Image from "next/image";
import { GoHeart } from "react-icons/go";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, productName }) => {
  return (
    <div className="z-20 bg-gray-50 hover:bg-gray-100 shadow-md overflow-hidden w-[47%] h-46 md:w-96 md:h-96 flex flex-col mt-8 transform transition-transform duration-300 hover:scale-100">
      <div className="overflow-hidden">
        <Image
          width={300} // Set the width to the actual width of the image
          height={200} // Set the height to the actual height of the image
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
          src={imageSrc}
          alt={productName}
          priority={true} // Add priority property
        />
      </div>
      <div className="md:p-4 p-0 flex-grow flex flex-col justify-between">
        <p className="text-lg font-semibold transition-transform duration-300 hover:scale-105">{productName}</p>
        <div className="flex items-center justify-between mt-2 mb-2">
          <p className="text-xs md:text-sm text-gray-600 transition-transform duration-300"><span className="underline cursor-pointer md:text-sm text-xs">Sign in</span>{" "}or Create an account to see the pricing</p>
          <GoHeart className="w-6 h-6 text-gray-500 cursor-pointer transition-transform duration-300 hover:text-red-600  hover:scale-110" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
