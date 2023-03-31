import { ChakraProvider } from "@chakra-ui/react";
import { CartContextProvider } from "./contexts/CartContext";
import RootLayout from "./layouts/RootLayout";

export default function StoreApp() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <RootLayout />
      </CartContextProvider>
    </ChakraProvider>
  );
}
