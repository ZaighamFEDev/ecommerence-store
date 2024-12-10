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



/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
// import { addToCart } from "../redux/slices/cartSlice"; // Import the addToCart action
import { Product } from "../types"; // Assuming you have a Product type
import { addToCart } from "../redux/slices/CartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: any) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        productId: 0,
        image: product.image
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Products</h1>
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleAddToCart(product)} // Call handleAddToCart on button click
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
