import { Text, Button, Flex } from "@chakra-ui/react";
import { useProductCard } from "../pages/products/ProductCard";

export default function AmmountControlPanel() {
  const { counter, setCounter } = useProductCard();

  return (
    <Flex gap={".3em"} alignItems="center">
      <Button
        size={"sm"}
        colorScheme={"purple"}
        onClick={() => {
          setCounter(counter - 1 <= 0 ? 0 : counter - 1);
        }}
      >
        -
      </Button>
      <Text fontWeight={"bold"} fontSize="1.2em">
        {counter}
      </Text>
      <Button
        size={"sm"}
        colorScheme={"purple"}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>
    </Flex>
  );
}
