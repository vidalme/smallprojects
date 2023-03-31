import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  textDecoration,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useCart, useCartDispatch } from "../../contexts/CartContext";
import { formatCurrency } from "../../utils/FormatCurrency";
import ProductCheckOut from "./ProductCheckOut";

export default function ProductsCheckOut() {
  const { state } = useCart();
  const { total, ammount, list } = state;

  if (list.length === 0) {
    return (
      <Box>
        <Box mx=".5em" bg="green.300">
          <Text color={"gray.700"} px=".5em" pt=".5em">
            Opa, parece que ainda nao existem produtos no carrinho!
          </Text>
          <Link to="../">
            <Text
              fontSize={"1.2em"}
              fontWeight="bold"
              bg="green.300"
              p=".5em"
              color={"green.800"}
              _hover={{ textDecoration: "underline" }}
            >
              Clique aqui para voltar as compras
            </Text>
          </Link>
        </Box>
        <TotalValueFooter total={total} />
      </Box>
    );
  }

  return (
    <Box>
      {
        <VStack py="1em">
          {list.map((currentProduct) => {
            return (
              <ProductCheckOut
                key={currentProduct.id}
                product={currentProduct}
              />
            );
          })}
        </VStack>
      }
      <TotalValueFooter total={total} />
    </Box>
  );
}

function TotalValueFooter({ total }) {
  return (
    <Flex
      justifyContent={"right"}
      gap="1em"
      alignItems={"baseline"}
      p=".5em"
      m=".5em"
      bg={"gray.300"}
    >
      <Text>valor total:</Text>
      <Heading textAlign={"right"} fontSize="2xl">
        {formatCurrency(total)}
      </Heading>
    </Flex>
  );
}
