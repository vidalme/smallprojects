import {
  Heading,
  Text,
  Box,
  Flex,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import AddToCartButton from "../../components/AddToCartButton";
import AmmountControlPanel from "../../components/AmmountControlPanel";
import { createContext, useContext, useState } from "react";

import { useCart, useCartDispatch } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/FormatCurrency";

export const ProductCardContext = createContext(null);

export default function ProductCard({ name, price, id }) {
  const [counter, setCounter] = useState(0);
  const { state } = useCart();

  return (
    <ProductCardContext.Provider
      value={{ name, price, id, counter, setCounter }}
    >
      <Card minW={"12em"} maxW={"16em"}>
        <CardHeader>
          <Heading as="h4" fontSize={"20px"}>
            {name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>{name}</Text>
          <Text>{formatCurrency(price)}</Text>
        </CardBody>
        <CardFooter bg="purple.100">
          <Box w="100%">
            <Flex mb="1em" flex="1 0 0" justifyContent={"space-between"}>
              <AmmountControlPanel />
              <AddToCartButton />
            </Flex>

            <Text display={"flex"} alignItems="center">
              Valor total {formatCurrency(counter * price)}
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </ProductCardContext.Provider>
  );
}

export function useProductCard() {
  return useContext(ProductCardContext);
}
