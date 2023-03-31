import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { data } from "../../utils/data";

export default function ProductsGrid() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      async function fetchProducts() {
        try {
          setIsLoading(true);
          const res = await fetch("../../../products.json");
          const json = await res.json();
          setProducts(json.products);
          // const { products } = data;
          // setProducts(products);
        } catch (error) {
          console.log(error.message);
        }
      }
      fetchProducts();
    } else {
      console.log("is loading");
    }
    return setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Text>...is loading</Text>;
  }

  return (
    <Grid
      templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      gap={"1em"}
    >
      {products?.map((product) => {
        return (
          <GridItem key={product.id}>
            <ProductCard
              name={product.name}
              price={product.price}
              id={product.id}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
