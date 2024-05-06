import {
  Flex,
  Center,
  Image,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Women = () => {
  const womensData = [
    {
      img: "https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_tenniscore_v2_moment_870x1110.jpg",
      title: "CENTRE-COURT STYLE",
      description: "These styles? Ace",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_gingham_moment_870x1110.jpg",
      title: "MILKMAID DRESSES",
      description: "Sunny-season staples",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_boho_moment_870x1110.jpg",
      title: "BOHO IS BACK",
      description: "We're in our revival era",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/ww/2024/may/02/homepage/ww/ww_global_revolution_moment_870x1110.jpg",
      title: "NEW: REVOLUTION",
      description: "Ft. the Bright Light Bronzing",
    },
  ];

  //   occasion wear data
  const shopData = [
    {
      img: "motel.png",
      title: "MOTEL",
      description: "Hot drops",
    },
    {
      img: "miss selfridge.png",
      title: "MISS SELFRIDGE",
      description: "Feel good 'fits",
    },
  ];

  //   brands label data
  const brandsData = [
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg",
    },
    {
      img: "https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg",
    },
  ];
  return (
    <>
      {/* Men's Big picture  for retro products*/}
      <Link to="/products">
        <Flex color="white">
          <Center w="100vw"  boxShadow='sm' p='6' rounded='md'>
            <Image src="\Women's Big picture.png" />
          </Center>
        </Flex>
      </Link>

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
          {womensData.map((data, index) => (
            <Link to="/products" key={index}>
              <Box  boxShadow='sm' p='2' rounded='md'>
                <Image w={"100%"} src={data.img} />
                <Heading fontSize={"20px"} textAlign={"center"} m={"2%"}>
                  {data.title}
                </Heading>
                <Text fontSize={"16px"} textAlign={"center"}>
                  {data.description}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <br />
      {/* Men's Big picture for sneakers products */}
      <Link to="/products">
        <Flex color="white">
          <Center w="100vw"  >
            <Image src="\the glow.png" />
          </Center>
        </Flex>
      </Link>

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
            <Link to="/products" key={index}>
              <Box >
                <Image w={"100%"} src={data.img} />
                <Heading fontSize={"20px"} textAlign={"center"} m={"2%"}>
                  {data.title}
                </Heading>
                <Text fontSize={"16px"} textAlign={"center"}>
                  {data.description}
                </Text>
              </Box>
            </Link>
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
            <Link to="/products">
              <Button
                p={8}
                border={"1px solid black"}
                borderRadius={"0%"}
                bg="white"
                _hover={{ background: "black", color: "white" }}
              >
                SHOP NOW
              </Button>
            </Link>
            &nbsp;
            <Link to="/products">
              <Button
                p={8}
                border={"1px solid black"}
                borderRadius={"0%"}
                bg="white"
                _hover={{ background: "black", color: "white" }}
              >
                SHOP NOW
              </Button>
            </Link>
          </Box>
        </SimpleGrid>
      </Box>

      <br />

      {/* ASOS downlaod app label  */}
      <Link href="https://www.asos.com/discover/our-apps/?ctaref=hp|unisex|banner|1|edit|appdownload&source_caller=ui&shortlink=f4jq8ws5&c=homepage_banner&pid=homepage_banner&deep_link_value=asos%3A%2F%2Fhome&af_xp=custom">
        <Box>
          <Image w="100vw" src="\ASOS Label to download app.png" />
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
            <Link to="/products" key={index}>
              <Box className="image-item">
                <Image w={"100vw"} src={data.img} />
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>

      <br />

      {/* Social Media Links */}
    </>
  );
};

export default Women;
