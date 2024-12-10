/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../types";
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null); // state with type Product or null
  const cartItems = useSelector((state: any) => state.cart.items);

  const isInCart = (productId: number) => {
    return cartItems.some((item: any) => item.id === productId);
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        totalPrice: product.price,
        productId: 0
    }));
  };
  return (
    <div className="container text-center mx-auto px-4 py-8 lg:max-w-[55%]">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-80 w-auto mx-auto" />
      <p className="text-lg font-normal mt-4">{product.description}</p>
      <p className="text-lg font-semibold mt-4">${product.price.toFixed(2)}</p>
      <button
              className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded  ${isInCart(product.id)? '' : 'hover:bg-blue-600'}`}
              disabled={isInCart(product.id)}    
              onClick={() => handleAddToCart(product)} // Call handleAddToCart on button click
            >
               {isInCart(product.id) ? "In Cart" : "Add to Cart"}
            </button>
    </div>
  );
};

export default ProductDetails;
