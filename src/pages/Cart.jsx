import React, { useEffect, useState } from "react";
import {
  Stack,
  CardBody,
  Card,
  Image,
  Heading,
  Text,
  Spinner,
  Grid,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function BookNow() {
  const toast = useToast();
  return (
    <Button
      variant="solid"
      colorScheme="blue"
      onClick={() =>
        toast({
          title: "You Order has Placed Successfully.",
          description: `Your order id ${Math.floor(Math.random() * 10000)}`,
          status: "success",
          duration: 3000,
          closable: true,
        })
      }
    >
      Buy Now
    </Button>
  );
}

function Cart() {
  const [err, seterr] = useState(false);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [reLoad, setreLoad]=useState(false)
  const getCart = () => {
    return axios
      .get(`https://myshop-apps-server.onrender.com/cart`)
      .then((res) => res?.data)
      .catch((err) => seterr(true))
      .finally(() => setloading(false));
  };

  useEffect(() => {
    setloading(true);
    getCart().then((res) => {
      setData(res);
      console.log(res);
    });
  }, [reLoad]);

  const handleClick = (id) => {
    // console.log(Id)
    axios
      .delete(
        `https://myshop-apps-server.onrender.com/cart/${id}`
      ).then((res) =>{
        setreLoad(!reLoad)
    })
      
  };

  return (
    <>
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : err ? (
        <h1>Something went wrong</h1>
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={"20px"}
          margin="100px"
        >
          {data.map((el, index) => (
            //   <Product props={el} key={el.id}/>
            <Card maxW="sm" key={el.id} width={"auto"} height="770px">
              <CardBody>
                <Image
                  src={el.images}
                  alt={el.name}
                  borderRadius="lg"
                  height={"300px"}
                  margin="auto"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{el.name}</Heading>
                  <Text>{el.description}</Text>
                  <Text color="gray.600" fontSize="xl" as="del">
                    ${el.strikeOfPrice}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${el.price}
                  </Text>
                  <Text as="p">Rating : {el.ratings?.rating}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <BookNow />

                  <Button onClick={()=>handleClick(el.id)}>Remove</Button>

                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Cart;
