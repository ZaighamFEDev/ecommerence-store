/* eslint-disable @typescript-eslint/no-explicit-any */
// // components/Cart.tsx
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store'; // Update the import to reflect the correct path
// // import { removeFromCart } from '../redux/slices/cartSlice';
// import { CartItem } from '../types';
// import { removeFromCart } from '../redux/slices/CartSlice';

// const Cart: React.FC = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

//   const handleRemoveFromCart = (id: number) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul>
//             {cartItems.map((item: CartItem) => (
//               <li key={item.id} className="flex justify-between items-center py-2">
//                 <span>{item.title} (x{item.quantity})</span>
//                 <span>${item.totalPrice}</span>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2"
//                   onClick={() => handleRemoveFromCart(item.id)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <p>Total Amount: ${totalAmount}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart ,increaseQuantity,decreaseQuantity} from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
// import { removeFromCart, clearCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const { items, totalQuantity, totalAmount } = useSelector((state: any) => state.cart);
    console.log(items)
    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center gap-16 relative mb-5">
            <h1 className="text-2xl font-bold text-center justify-center">Your Cart</h1>
            {totalQuantity > 0 ? <div className="text-center flex gap-5 items-center justify-end lg:absolute lg:right-0">
                        <p className="sm:text-xl">Total Quantity: {totalQuantity}</p>
                        <p className="sm:text-xl">Total Amount: ${totalAmount.toFixed(2)}</p>
                       
                    </div>: null}
                    </div>
            
            {totalQuantity === 0 ? (
                <p className="text-center">Your cart is empty</p>
            ) : (
                <>
                
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {items.map((item: any) => (
                            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg">
                                <Link to={`/product/${item.id}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-40 w-full object-contain mb-4"
                                />
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </Link>
                                <div className="flex gap-5">
                                <div className="mt-4 max-w-[80px] flex gap-2 justify-center items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                <button className=" text-xl flex justify-center items-center" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                <span className="text-xl">{item.quantity}</span>
                                <button className="text-3xl" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                </div>
                                <button
                                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Remove
                                </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                    <button
                            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>
                        </div>
                    
                </>
            )}
        </div>
    );
};

export default Cart;
