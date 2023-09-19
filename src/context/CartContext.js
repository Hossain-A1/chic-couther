import { createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cart: [],
  amount: 1,
  cart_item: "",
};

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const handleAddToCart = (cartId, price, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { cartId, product, price },
    });
  };

  // cart increment//
  const haldleIncrement = (cartId) => {
    return dispatch({ type: "CART_INCREMENT", payload: cartId });
  };
  // cart decrement//
  const haldleDecrement = (cartId) => {
    return dispatch({ type: "CART_DECREMENT", payload: cartId });
  };

  return (
    <CartContext.Provider
      value={{ ...state, handleAddToCart, haldleIncrement, haldleDecrement }}
    >
      {children}
    </CartContext.Provider>
  );
};
