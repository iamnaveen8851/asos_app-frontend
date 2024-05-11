import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SingleProduct = () => {
  // Declare searchParams before using it
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieve _id from route parameters using useParams
  const { _id } = useParams();

  const [data, setData] = useState({});
  const toast = useToast();

  useEffect(() => {
    // Set search parameter in URL
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set("product_Id", _id);
      return newSearchParams;
    });

    getSingleProduct(_id);
  }, [_id, setSearchParams]);

  // Fetch single product using _id
  const getSingleProduct = async (_id) => {
    try {
      const { data } = await axios.get(
        `https://asos-app-backend.onrender.com/products/${_id}`
      );
      setData(data.singleProduct[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    // Retrieve the existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the data with existing products
    const updatedProducts = [...existingProducts, data];
    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    toast({
      title: "Product added to cart",
      description: "Your item has been added to the cart successfully!",
      status: "success",
      duration: 3000, // Duration in milliseconds
      isClosable: true,
    });
  };

  return (
    <Flex
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
      <Box boxShadow="xl" ml="5%">
        <Image src={data.img} />
      </Box>
      <Box p={10}>
        <Heading>{data.title}</Heading>
        <br />
        <Text fontSize={"18px"} fontWeight={"550"}>
          Price: Rs.{data.price}
        </Text>
        <br />
        <Button
          bg="blue"
          color="white"
          _hover={{ background: "green", color: "white" }}
          onClick={addToCart}
        >
          Add To Cart
        </Button>
      </Box>
    </Flex>
  );
};

export default SingleProduct;
