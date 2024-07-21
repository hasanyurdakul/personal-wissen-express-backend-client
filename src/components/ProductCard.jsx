import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";

function ProductCard({ handleAddToCart, product, onClick }) {
  return (
    <div>
      <div className="bg-white shadow-md w-52 overflow-hidden rounded-2xl">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-56 object-cover cursor-pointer hover:blur-sm transition-all duration-300   "
            onClick={() => onClick(product)}
          />
        </div>

        <div className="pt-3 pb-4 px-3.5">
          <h1 className="text-lg font-semibold line-clamp-2">{product.name}</h1>
          <p className=" mb-2">
            <span className="text-slate-950 mr-3 ">₺{product.price}</span>
          </p>
          <p className="line-clamp-3 mb-2 text-xs">{product.description}</p>
          <button
            onClick={() => handleAddToCart()}
            className="bg-slate-900 text-slate-400 uppercase font-semibold text-sm py-1 px-2 rounded-lg flex justify-center items-center "
          >
            <span> Add to cart</span>
            <AddShoppingCartIcon fontSize="small" className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
