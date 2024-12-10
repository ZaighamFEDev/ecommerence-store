// Product Type
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  // State for Products Slice
  export interface ProductsState {
    products: Product[];
    singleProduct: Product | null; // This allows `singleProduct` to be either a Product or null
    loading: boolean;
    error: string | null;
  }
  
  // Cart Item Type
  export interface CartItem {
    id: number;
    image: string;
    title: string;
    totalPrice: number;
    productId: number;
    quantity: number;
    price: number; // Include price for calculating total
  }
  
  // State for Cart Slice
  export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalPrice: number;
    totalAmount: number;
  }
  