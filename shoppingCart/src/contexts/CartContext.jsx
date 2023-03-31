import { Flex } from "@chakra-ui/react";
import { createContext, useReducer, useContext } from "react";
import { initialCartState } from "../reducers/cartReducer";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext(initialCartState);
const CartDispatchContext = createContext(null);

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const value = {
    state,
    dispatch,
  };

  return (
    <CartContext.Provider value={{ state }}>
      <CartDispatchContext.Provider value={{ dispatch }}>
        <Flex>{children}</Flex>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
