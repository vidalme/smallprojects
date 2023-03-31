import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Nav from "./Nav";

import CartCounter from "../../components/CartCounter";

export default function Header() {
  return (
    <Box bg="gray.600" w="60em">
      <Flex>
        <Nav />

        <Box ml="auto">
          <CartCounter />
        </Box>
      </Flex>
      <Box bg="gray.100" p="1em">
        <Outlet />
      </Box>
    </Box>
  );
}
