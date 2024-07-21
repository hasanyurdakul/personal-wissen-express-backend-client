import React from "react";

function ProductCard() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="p-4 flex flex-col items-center justify-center">
        <h2 class="font-semibold text-2xl my-2 leading-none">NIKE SHOES</h2>
        <small class="uppercase text-gray-600">
          The best shoes in marketplace
        </small>
      </div>
      <img
        src="https://c4.wallpaperflare.com/wallpaper/601/305/95/nike-full-hd-wallpaper-preview.jpg"
        alt="product"
      />
      <div class="flex justify-center items-center mb-3">
        <div class="rounded-full h-4 w-4 flex items-center justify-center bg-red-700 border-2 border-white mr-1"></div>
        <div class="rounded-full h-4 w-4 flex items-center justify-center bg-blue-700 border-2 border-white mr-1"></div>
        <div class="rounded-full h-4 w-4 flex items-center justify-center bg-green-700 border-2 border-white mr-1"></div>
        <div class="rounded-full h-5 w-5 flex items-center justify-center bg-black border-2"></div>
      </div>
      <div class="flex justify-between items-center px-4 py-3">
        <span class="text-xl">$30</span>
        <span class="rounded-full py-2 px-8 border-solid border-2 border-gray-400">
          ADD TO CART
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
