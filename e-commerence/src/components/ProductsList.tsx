/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";

// const Products = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector(
//     (state:any) => state.products
//   );

//   useEffect(() => {
//     dispatch(fetchProducts() as any);
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-8">Products</h1>
//       {loading && <p className="text-center">Loading products...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product:any) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-40 w-full object-contain mb-4"
//             />
//             <h3 className="text-lg font-semibold">{product.title}</h3>
//             <p className="text-gray-600">${product.price.toFixed(2)}</p>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;



// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../redux/slices/productsSlice";
// // import { addToCart } from "../redux/slices/cartSlice"; // Import the addToCart action
// import { Product } from "../types"; // Assuming you have a Product type
// import { addToCart } from "../redux/slices/CartSlice";
// import { Link } from "react-router-dom";

// const ProductsList = () => {
//   const dispatch = useDispatch();
//   const [sort, setSort] = useState("")
//   const [filter, setFilter] = useState("")
//   const { products, loading, error } = useSelector(
//     (state: any) => state.products
//   );

//   useEffect(() => {
//     dispatch(fetchProducts() as any);
//   }, [dispatch]);

//   const handleAddToCart = (product: Product) => {
//     dispatch(addToCart({
//         id: product.id,
//         title: product.title,
//         price: product.price,
//         image: product.image,
//         quantity: 1,
//         totalPrice: product.price,
//         productId: 0
//     }));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold text-center mb-8">Products</h1>
//       {loading && <p className="text-center">Loading products...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       <select onChange={(e) => setFilter(e.target.value)}>
//   <option value="all">All</option>
//   <option value="electronics">Electronics</option>
//   <option value="jewelery">Jewelery</option>
//   <option value="men's clothing">Men's Clothing</option>
//   <option value="women's clothing">Women's Clothing</option>
// </select>

// <select onChange={(e) => setSort(e.target.value)}>
//   <option value="price-asc">Price: Low to High</option>
//   <option value="price-desc">Price: High to Low</option>
// </select>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {products.map((product: any) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
//           >
//             <Link to={`/product/${product.id}`}>
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-40 w-full object-contain mb-4"
//             />
//             <h3 className="text-lg font-semibold">{product.title}</h3>
//             <p className="text-gray-600">${product.price.toFixed(2)}</p>
//             </Link>
//             <button
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               onClick={() => handleAddToCart(product)} // Call handleAddToCart on button click
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsList;



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
import { Product } from "../types"; // Assuming you have a Product type

const ProductsList = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const { products, loading, error } = useSelector((state: any) => state.products);
  const cartItems = useSelector((state: any) => state.cart.items);
console.log("products", products)
  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  const isInCart = (productId: number) => {
    return cartItems.some((item: any) => item.id === productId);
  };



  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
        totalPrice: product.price,
        productId: 0,
      })
    );
  };

  // Filter and sort the products
  const filteredProducts = products
    .filter((product: Product) => {
      if (filter === "all" || filter === "") return true;
      return product.category === filter;
    })
    .sort((a: Product, b: Product) => {
      if (sort === "price-asc") {
        return a.price - b.price;
      } else if (sort === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-2xl font-bold text-center mb-8">Products</h1> */}
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="mb-4">
        {/* Filter by category */}
        <select
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          className="mr-4 p-2 border"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        {/* Sort by price */}
        <select
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="p-2 border"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-lg font-semibold truncate-multiline">{product.title}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </Link>
            <button
              className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded  ${isInCart(product.id)? '' : 'hover:bg-blue-600'}`}
              disabled={isInCart(product.id)}    
              onClick={() => handleAddToCart(product)} // Call handleAddToCart on button click
            >
               {isInCart(product.id) ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
