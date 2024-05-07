import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function AddToCart() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 -1 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
    >
      <g
        id="Page-1"
        stroke="white"
        // stroke-width="1"
        fill="none"
        // fill-rule="evenodd"
        // sketch:type="MSPage"
      >
        <g
          id="Icon-Set"
          sketch:type="MSLayerGroup"
          transform="translate(-464.000000, -724.000000)"
          fill="#000000"
        >
          <path
            d="M488,750 C486.896,750 486,750.896 486,752 C486,753.104 486.896,754 488,754 C489.104,754 490,753.104 490,752 C490,750.896 489.104,750 488,750 L488,750 Z M478,750 C476.896,750 476,750.896 476,752 C476,753.104 476.896,754 478,754 C479.104,754 480,753.104 480,752 C480,750.896 479.104,750 478,750 L478,750 Z M491,744 C491,745.104 490.104,746 489,746 L478,746 C476.896,746 476,745.104 476,744 L474.333,734 L493.5,734 L491,744 L491,744 Z M473.97,732 L471.475,724 L465,724 C464.447,724 464,724.448 464,725 C464,725.553 464.447,726 465,726 L470,726 L472.011,732 L472,732 L474,744 C474,746.209 475.791,748 478,748 L489,748 C491.209,748 493,746.209 493,744 L496,732 L473.97,732 L473.97,732 Z"
            id="cart"
            sketch:type="MSShapeGroup"
          ></path>
        </g>
      </g>
    </svg>
  );
}
const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const toast = useToast();
  const totalPrice = cartData.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  // cart rempve button
  const handleRemove = (id) => {
    const updateCartData = cartData.filter((product) => {
      return product._id !== id;
    });

    // Update state and local storage with the new data
    setCartData(updateCartData);
    localStorage.setItem("cart", JSON.stringify(updateCartData));
  };

  // checkout
  const handleCheckout = () => {
    toast({
      title: "Your Order has been placed ",
      description: "Successfully",
      status: "success",
      duration: 3000, // Duration in milliseconds
      isClosable: true,
    });
  };
  // return  (
  //   <>
  //  {cartData.length > 0 (
  //   <SimpleGrid
  //   w="100%"
  //   border={"1px solid black"}
  //   p={10}
  //   gap={10}
  //   columns={2}
  //   m="auto"
  // >
  //   <Box boxShadow="2xl" p="6">
  //     {cartData.map((product) => (
  //       <Box mt={10} key={product._id}>
  //         <Box>
  //           <Image m="auto" h="400px" w="350px" src={product.img} />
  //         </Box>
  //         <Center display={"grid"}>
  //           <Text>{product.title}</Text>
  //           <Text>{product.price}</Text>
  //           <Button onClick={() => handleRemove(product._id)}>
  //             Remove Item
  //           </Button>
  //         </Center>
  //       </Box>
  //     ))}
  //   </Box>
  //   {/* checkout */}
  //   <Box>
  //     <Box boxShadow="2xl" p="6">
  //       <Heading>Checkout Form</Heading>
  //       <Box display={"flex"} justifyContent={"space-between"}>
  //         <Text mt="2%" fontSize={"20px"} fontWeight={"bold"}>
  //           Total Price : ${totalPrice}
  //         </Text>

  //         <Button _hover={{background: "green", color : "white"}} onClick={handleCheckout}>Checkout</Button>
  //       </Box>
  //     </Box>
  //   </Box>
  // </SimpleGrid>
  //  ):(
  //   <Box>
  //     Your Cart is Empty...
  //   </Box>
  //  )}
  //  </>
  // );
  return (
    <>
      <Heading mt="2%" textAlign={"center"} fontSize={"40px"} textDecoration={"underline"}>CART</Heading>
      {cartData.length > 0 ? (
        <SimpleGrid
          w="100%"
          // border={"1px solid black"}
          p={10}
          gap={10}
          columns={{
            base: "1",
            sm: "1",
            md: "2",
            lg: "2",
            xl: "2",
            "2xl": "2",
          }}
          m="auto"
        >
          <Box boxShadow="2xl" p="6">
            {cartData.map((product) => (
              <Box mt={10} key={product._id}>
                <Box>
                  <Image m="auto" h="400px" w="350px" src={product.img} />
                </Box>
                <Center display={"grid"}>
                  <Text fontSize={"16px"} fontWeight={"bold"}>{product.title}</Text>
                  <Text fontSize={"16px"} fontWeight={"550"}>  Rs.{" "}{product.price}</Text>
                  <Button mt="5%" _hover={{background : "red", color: "white"}} onClick={() => handleRemove(product._id)}>
                    Remove Item
                  </Button>
                </Center>
              </Box>
            ))}
          </Box>
          {/* checkout */}
          <Box>
            <Box boxShadow="2xl" p="6">
              <Heading textAlign={"center"}>Checkout Form</Heading>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                  "2xl": "row",
                }}
                p={{
                  base: "10%",
                  sm: "10",
                  md: "2%",
                  lg: "2%",
                  xl: "2%",
                  "2xl": "2%",
                }}
              >
                <Text mt="2%" fontSize={"20px"} fontWeight={"bold"}>
                  Total Price : ${totalPrice}
                </Text>

                <Button
                  mt="2%"
                  bg="green"
                  color="white"
                  _hover={{ background: "blue", color: "white" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </Box>
              <br />
              <Box>
                <Heading fontSize={"20px"}>WE ACCEPT:</Heading>
                <br />
                <Box>
                  <Image
                    w="300px"
                    h={"30px"}
                    src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      ) : (
        // for empty cart
        <Box>
          <Center p={50} display={"flex"}>
            <Heading fontWeight={400}>Your Cart is Empty</Heading> <AddToCart />
          </Center>
          <Center>
            {" "}
            <Link to="/">
              <Button
                bg="green"
                color={"white"}
                _hover={{ background: "blue", color: "white" }}
              >
                Go Back To Home
              </Button>
            </Link>
          </Center>
        </Box>
      )}
    </>
  );
};

export default Cart;
