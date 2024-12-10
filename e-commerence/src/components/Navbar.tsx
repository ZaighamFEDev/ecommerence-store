/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <NavLink to="/" className="hover:text-gray-300">
//             E-Shop
//           </NavLink>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/cart"
//             className={({ isActive }) =>
//               `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
//             }
//           >
//             Cart
//           </NavLink>
//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
//             }
//           >
//             products
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none text-gray-400 hover:text-white"
//           >
//             {isMenuOpen ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-700 py-4 space-y-2">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `block px-4 py-2 hover:bg-gray-600 ${
//                 isActive ? "bg-gray-600 text-blue-400" : ""
//               }`
//             }
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/cart"
//             className={({ isActive }) =>
//               `block px-4 py-2 hover:bg-gray-600 ${
//                 isActive ? "bg-gray-600 text-blue-400" : ""
//               }`
//             }
//             onClick={() => setIsMenuOpen(false)}
//           >
//             Cart
//           </NavLink>
//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               `block px-4 py-2 hover:bg-gray-600 ${
//                 isActive ? "bg-gray-600 text-blue-400" : ""
//               }`
//             }
//             onClick={() => setIsMenuOpen(false)}
//           >
//             products
//           </NavLink>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Navbar = () => {
  const { totalQuantity } = useSelector((state: any) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-bold">
          My E-commerce Store
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/cart" className="text-white">
            Cart ({totalQuantity})
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-blue-500 text-white px-4 py-2`}
      >
        <Link
          to="/"
          className="block py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="block py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
