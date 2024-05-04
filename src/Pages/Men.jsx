// import React from 'react'
import {
  Flex,
  Center,
  Image,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";
const Men = () => {
  const mensData = [
    {
      img: "https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_bigyachtenergy_moment_870x1110.jpg",
      title: "SUMMER PREP",
      description: "Vacation vibes",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_grandpa_core_moment_870x1110.jpg",
      title: "GRANDPA CORE",
      description: "Throwback 'fits",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_lattedressing_moment_870x1110.jpg",
      title: "LATTE DRESSING",
      description: "Hit hues",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/mw/2024/may/02/homepage/mw/mw_global_stripes_moment_870x1110.jpg",
      title: "TRENDING: STRIPES",
      description: "Sunny-season staples",
    },
  ];

  //   occasion wear data
  const shopData = [
    {
      img: "OCCASIONALWEAR.png",
      title: "OCCASIONALWEAR",
      description: "Break the dress code",
    },
    {
      img: "COLLUSION.png",
      title: "COLLUSION",
      description: "Just-dropped hits",
    },
  ];

  //   brands label data
  const brandsData = [
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg",
    },
  ];
  return (
    <>
      {/* Men's Big picture  for retro products*/}
      <Flex color="white">
        <Center w="100vw">
          <Image src="public\Men's  big picture.png" />
        </Center>
      </Flex>

      <br />

      {/* Cards */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <SimpleGrid
          p={8}
          columns={{
            base: "1",
            sm: "2",
            md: "3",
            lg: "4",
            xl: "4",
            "2xl": "4",
          }}
          spacing={10}
        >
          {mensData.map((data, index) => (
            <Box key={index}>
              <Image w={"100%"} src={data.img} />
              <Heading fontSize={"20px"} textAlign={"center"} m={"2%"}>
                {data.title}
              </Heading>
              <Text fontSize={"16px"} textAlign={"center"}>
                {data.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <br />
      {/* Men's Big picture for sneakers products */}
      <Flex color="white">
        <Center w="100vw">
          <Image src="public\Sneakers.png" />
        </Center>
      </Flex>

      {/* Ocassional shop Cards */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <SimpleGrid
          p={8}
          columns={{
            base: "1",
            sm: "1",
            md: "2",
            lg: "2",
            xl: "2",
            "2xl": "2",
          }}
          justifyContent={"space-around"}
          alignItems={"center"}
          spacing={10}
        >
          {shopData.map((data, index) => (
            <Box key={index}>
              <Image w={"100%"} src={data.img} />
              <Heading fontSize={"20px"} textAlign={"center"} m={"2%"}>
                {data.title}
              </Heading>
              <Text fontSize={"16px"} textAlign={"center"}>
                {data.description}
              </Text>
            </Box>
          ))}
          <Box
            ml={{
              base: "5%",
              sm: "5%",
              md: "11%",
              lg: "11%",
              xl: "11%",
              "2xl": "11%",
            }}
            //  border={"1px solid black"}
            w="80vw"
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
              "2xl": "row",
            }}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Button
              p={8}
              border={"1px solid black"}
              borderRadius={"0%"}
              bg="white"
              _hover={{ background: "black", color: "white" }}
            >
              SHOP OCCASIONWEAR
            </Button>
            &nbsp;
            <Button
              p={8}
              border={"1px solid black"}
              borderRadius={"0%"}
              bg="white"
              _hover={{ background: "black", color: "white" }}
            >
              SHOP NOW
            </Button>
          </Box>
        </SimpleGrid>
      </Box>

      <br />

      {/* ASOS downlaod app label  */}
      <Link href="https://www.asos.com/discover/our-apps/?ctaref=hp|unisex|banner|1|edit|appdownload&source_caller=ui&shortlink=f4jq8ws5&c=homepage_banner&pid=homepage_banner&deep_link_value=asos%3A%2F%2Fhome&af_xp=custom">
        <Box>
          <Image w="100vw" src="public\ASOS Label to download app.png" />
        </Box>
      </Link>

      <br />
      {/* Brands label */}
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        w="90%"
        m={"auto"}
      >
        <SimpleGrid
          p={1}
          columns={{
            base: "1",
            sm: "2",
            md: "3",
            lg: "6",
            xl: "6",
            "2xl": "6",
          }}
          spacing={10}
          _hover={{
            ".image-item:not(:hover) img": {
              opacity: 0.5, // Adjust opacity for the fade effect
              transition: "opacity 0.5s ease", // Smooth transition
            },
          }}
        >
          {brandsData.map((data, index) => (
            <Box key={index} className="image-item">
              <Image w={"100vw"} src={data.img} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <br />

      {/* Social Media Links */}
      
    </>
  );
};

export default Men;
