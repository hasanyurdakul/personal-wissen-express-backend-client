import React, { useEffect, useState } from "react";
import ProductCard from "./../components/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Home() {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  async function getProducts() {
    try {
      const response = await axios.get(`${API_BASE_URL}/product/get-all`);
      console.log(response.data.products);
      setProductList(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart.", {
      autoClose: 2000,
    });
  };

  const handleProductDetail = (product) => {
    navigate(`/product-detail/${product.name}-id-${product._id}`);
  };

  return (
    <div className="max-w-[72rem]    min-h-[calc(100vh-68.579px)] grid grid-cols-4 p-2 gap-5">
      {/* <ProductCard handleAddToCart={handleAddToCart} /> */}
      {productList.map((product, key) => (
        <ProductCard
          key={key}
          handleAddToCart={handleAddToCart}
          product={product}
          onClick={handleProductDetail}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}

export default Home;
