import { Flex, Text, textDecoration } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <Flex justifyContent={"space-evenly"} gap="2em" ml="2em" mt="1.5em">
      <NavLink to="/">
        <Text
          color="white"
          fontSize={"1.4em"}
          _hover={{ bg: "gray.200", color: "gray.800" }}
        >
          Produtos
        </Text>
      </NavLink>
      <NavLink to="checkout">
        <Text
          color="white"
          fontSize={"1.4em"}
          _hover={{ bg: "gray.200", color: "gray.800" }}
        >
          Check Out
        </Text>
      </NavLink>
    </Flex>
  );
}
