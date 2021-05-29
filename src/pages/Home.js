import { Stack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Product from "../components/Product";

export default () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&")
      .then(({ data }) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <Box>
      <Header />
      <Stack p={4}>
        {products.map((product) => {
          return <Product {...product} />;
        })}
      </Stack>
    </Box>
  );
};
