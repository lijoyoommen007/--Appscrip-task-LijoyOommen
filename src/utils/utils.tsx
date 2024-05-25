import ProductCard from "../components/productCards"


interface Product {
    meta: {
      updatedAt: string;
    };
    price: number;
    rating: number;
    [key: string]: any;
  }

export const sortProducts = (products: Product[], criteria: string) => {
    switch (criteria) {
      case 'newset':
        return products.slice().sort((a, b) => new Date(b.meta.updatedAt).getTime() - new Date(a.meta.updatedAt).getTime());
      case 'lowprice':
        return products.slice().sort((a, b) => b.price - a.price);
      case 'highprice':
        return products.slice().sort((a, b) => a.price - b.price);
      case 'popular':
        return products.slice().sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

export function ProductCards(isOpen: boolean, sortedProducts: Product[]) {
    return <div className={`flex-1 p-4 transition-width duration-300 ${isOpen ? 'hidden md:block' : 'block'}`}>
      <div className="mt-4 text-black flex flex-wrap justify-evenly">
        {sortedProducts.map((product) => (
          <ProductCard key={product.meta.updatedAt} imageSrc={product.images[0]} productName={product.title} />
        ))}
      </div>
    </div>;
  }


