import { Box, Flex, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { formatCurrency } from "../../utils/FormatCurrency";
import * as ACTIONS from "../../reducers/actions";

// import AmmountControlPanel from "../../components/AmmountControlPanel";
import { useCart, useCartDispatch } from "../../contexts/CartContext";

export default function ProductCheckOut({ product }) {
  const { state } = useCart();
  const { dispatch } = useCartDispatch();
  const { name, price, id } = product;

  function increase() {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: { counter: 1, name, price, id },
    });
  }
  function decrease() {
    if (product.ammount > 0) {
      dispatch({
        type: ACTIONS.REMOVE_FROM_CART,
        payload: { name, price, id },
      });
    }
  }

  function removeProduct() {
    dispatch({
      type: ACTIONS.REMOVE_ALL_FROM_CART,
      payload: { name, price, id },
    });
  }

  return (
    <Grid
      templateColumns={"2fr 1fr 1fr"}
      h="5em"
      w="98%"
      pl="1em"
      pr=".2em"
      border="1px solid"
      borderColor={" gray.300"}
      borderRadius={"lg"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <GridItem>
        <Flex gap="1em" alignItems={"baseline"}>
          <Text fontWeight={"bold"} fontSize="1.2em">
            {product.name}
          </Text>
          <Text fontSize={".8em"} color="gray.600">
            {formatCurrency(product.price)}
          </Text>
        </Flex>
      </GridItem>
      <GridItem justifySelf={"right"}>
        <Flex gap={".3em"} alignItems="center">
          <Button size={"sm"} colorScheme={"purple"} onClick={decrease}>
            -
          </Button>
          <Text fontWeight={"bold"} fontSize="1.2em">
            {product.ammount}
          </Text>
          <Button size={"sm"} colorScheme={"purple"} onClick={increase}>
            +
          </Button>
        </Flex>
      </GridItem>
      <GridItem justifySelf={"right"}>
        <Flex gap="1em" alignItems={"end"} flexFlow="column">
          <Button size={"xs"} colorScheme={"red"} onClick={removeProduct}>
            X
          </Button>
          <Text fontWeight={"bold"} bg="gray.300" p=".2em">
            {formatCurrency(product.price * product.ammount)}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
