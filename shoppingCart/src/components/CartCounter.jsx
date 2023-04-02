import { Flex, Text, Circle } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/FormatCurrency";

export default function CartCounter() {
  const { state } = useCart();
  // console.log(state);
  if (state) {
    return (
      <Flex alignItems={"center"} gap="1em">
        <Text color={"white"}>
          Valor total da compra:{formatCurrency(state.total)}
        </Text>
        <NavLink to="checkout">
          <Circle bg={"green.200"} w="3em" h="3em" my="1em" mr="1em">
            <Text color={"green.700"} fontWeight="bold" fontSize={"1.5em"}>
              {state.ammount}
            </Text>
          </Circle>
        </NavLink>
      </Flex>
    );
  }
}
