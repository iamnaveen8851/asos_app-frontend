import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const Cart = () => {
  const data = JSON.parse(localStorage.getItem("cart"));
  console.log(data);
  return (
    <Box>
      <Flex flexDirection={"column"}>
        {data.map(product=> (
          
        ))}
      </Flex>
    </Box>
  );
};

export default Cart;
