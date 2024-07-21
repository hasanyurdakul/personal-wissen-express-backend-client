import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";

const ProductDetail = () => {
  const { productDetailParams } = useParams();
  const productId = productDetailParams.split("-id-")[1];
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const [product, setProduct] = useState({});
  const getProductById = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/product/get-by-id/${productId}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div className="max-w-[72rem] items-center   justify-center min-h-[calc(100vh-68.579px)] grid grid-cols-2 p-2 gap-5">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-3xl mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col justify-around">
        <h1 className="font-bold  text-3xl">{product.name}</h1>
        <p className="italic text-slate-600">{product.description}</p>
        <p>₺{product.price}</p>
        <button
          // onClick={() => handleAddToCart()}
          className="bg-slate-900 text-slate-400 uppercase font-semibold text-sm py-1 px-2 rounded-lg flex justify-center items-center max-w-36 "
        >
          <span> Add to cart</span>
          <AddShoppingCartIcon fontSize="small" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
