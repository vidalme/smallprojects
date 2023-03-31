import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@chakra-ui/react";
import { useProductCard } from "../pages/products/ProductCard";
import { useCartDispatch, useCart } from "../contexts/CartContext";
import * as ACTIONS from "../reducers/actions";

export default function AddToCartButton() {
  const { counter, setCounter, name, price, id } = useProductCard();
  const { dispatch } = useCartDispatch();

  function handleClick() {
    if (counter !== 0) {
      setCounter(0);
      dispatch({
        type: ACTIONS.ADD_TO_CART,
        payload: { counter, setCounter, name, price, id },
      });
    }
  }

  return (
    <Button colorScheme={"green"} onClick={handleClick}>
      <FiShoppingCart />
    </Button>
  );
}
