import React from "react";
import ProductsList from "../components/ProductsList";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* <div className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to E-Shop</h1>
        <p className="mt-4 text-lg">Your one-stop shop for amazing products!</p>
        <button className="mt-6 bg-white text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-gray-200">
          Shop Now
        </button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h3 className="text-lg font-semibold">Electronics</h3>
            <p className="text-gray-600 mt-2">Latest gadgets and devices</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h3 className="text-lg font-semibold">Clothing</h3>
            <p className="text-gray-600 mt-2">Trendy outfits for all seasons</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h3 className="text-lg font-semibold">Home Appliances</h3>
            <p className="text-gray-600 mt-2">Upgrade your living space</p>
          </div>
        </div>
      </div> */}

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 pt-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Featured Products
        </h2>
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
