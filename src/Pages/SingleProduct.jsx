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
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { _id } = useParams();
  const [data, setData] = useState({});
  const toast = useToast();

  console.log(_id);
  useEffect(() => {
    getSingleProduct(_id);
  }, [_id]);

  //   fetch single product using _id
  const getSingleProduct = async (_id) => {
    try {
      const { data } = await axios.get(
        `https://asos-app-backend.onrender.com/products/${_id}`
      );
      // console.log(data);
      console.log(data.singleProduct[0]);
      setData(data.singleProduct[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    //  retrieve the exisiting product from the local storage
    const exisitingProduct = JSON.parse(localStorage.getItem("cart")) || [];

    //   update the data with existing product
    const updatedProduct = [...exisitingProduct, data];
    localStorage.setItem("cart", JSON.stringify(updatedProduct));

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
        <Text fontSize={"18px"} fontWeight={"550"}>Price : Rs.{data.price}</Text>
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
