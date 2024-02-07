import React, { useEffect, useState } from "react";
import { Button, HStack, Stack, Spinner, Grid } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";

function Home() {
  const [ProductData, setProductData] = useState([]);
  const [category, setCategory] = useState("products");
  const [IsErr, setIsErr] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const getData = () => {
    return axios
      .get(`https://myshop-apps-server.onrender.com/${category}`)
      .then((res) => res?.data)
      .catch((err) => setIsErr(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getData(category).then((res) => setProductData(res));

  },[category]);

  return (
    <Stack>
      <HStack justifyContent={"center"}>
        <Button onClick={()=>setCategory("products")}>New</Button>
        <Button onClick={()=>setCategory("male")}>Men</Button>
        <Button onClick={()=>setCategory("female")}>Women</Button>
      </HStack>

    {IsLoading?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:IsErr?<h1>Something went wrong</h1>:
<Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={"20px"} margin="100px">
        {ProductData.map((product)=>(
        <Product props={product} key={product.id}/>
        ))}
    </Grid>}
    </Stack>
  );
}

export default Home;

// https://myshop-apps-server.onrender.com
