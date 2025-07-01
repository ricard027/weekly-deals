import { ProductCardProps } from "./types";
import { formatPrice, handleBuyClick } from "./utils";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border border-gray-100 h-full flex flex-col">
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full capitalize font-medium shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 max-h-[3.5rem] leading-tight overflow-hidden "
          title={product.title}
        >
          {product.title}
        </h3>

        <div className="mb-6 mt-auto">
          <span className="text-3xl font-bold text-green-600">
            {formatPrice(product.price)}
          </span>
        </div>

        <button
          onClick={() => handleBuyClick(product.title)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus-ring"
        >
          Comprar agora
        </button>
      </div>
    </article>
  );
}
