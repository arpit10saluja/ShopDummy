import React from 'react'
import {HStack, Button} from "@chakra-ui/react"

function Product() {
  return (
    <HStack justifyContent={"center"}>
        <Button>New</Button>
        <Button>Men</Button>
        <Button>Women</Button>

    </HStack>
  )
}

export default Product