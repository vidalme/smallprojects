import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <Box w="100%" m="2em" p="2em" bg="gray.300">
      <Text fontSize={"1.6em"} fontWeight="bold">
        Oops!
      </Text>
      <Text>Parece que algo de errado aconteceu</Text>
      <Link to="../">
        <Text _hover={{ textDecoration: "underline" }}>
          Clique aqui para ir para home
        </Text>
      </Link>
      <Text mt=".5em" fontWeight={"bold"}>
        {error.statusText || error.message}
      </Text>
    </Box>
  );
}
