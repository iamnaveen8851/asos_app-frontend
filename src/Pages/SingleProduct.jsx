import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getSingleProduct(_id);
  }, [_id]);

  const getSingleProduct = async (_id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/products/singleProduct/${_id}`
      );
      console.log(data.singleProduct[0]);
      setData(data.singleProduct[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex
      //   border="1px solid black"
      flexDirection={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
        "2xl": "row",
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      m="auto"
      p={10}
    >
      <Box
        //   p={5}
        //    border="1px solid black"
        boxShadow="xl"
        ml="5%"
      >
        <Image src={data.img} />
      </Box>
      <Box
        p={10}
        //   border="1px solid black"
      >
        <Heading>{data.title}</Heading>
        <br />
        <Text>Price : {data.price}</Text>
        <br />
        <Button>Add To Cart</Button>
      </Box>
    </Flex>
  );
};

export default SingleProduct;
