import React from "react";
import { Button, HStack, Stack } from "@chakra-ui/react";

function Home() {
  return (
    <Stack>
      <HStack justifyContent={"center"}>
        <Button>New</Button>
        <Button>Men</Button>
        <Button>Women</Button>
      </HStack>

      
    </Stack>
  );
}

export default Home;
