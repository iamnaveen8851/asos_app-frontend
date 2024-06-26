import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Button,
  Text,
  Center,
  // Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { myContext } from "../AuthContext/AuthContext";
import Login from "../Pages/Login";
import axios from "axios";

// login icon
// login icon
function LoginIcon() {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white" // Change stroke color to white
    >
      <path
        d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// function AddToFav() {
//   return (
//     <svg width="30px" height="30px" viewBox="0 0 24 24" fill="black" stroke="white"  xmlns="http://www.w3.org/2000/svg">
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//   );
// }

function AddToCart() {
  return (
    <svg
      width="31px"
      height="29px"
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

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isLoggedIn,
    setIsLoggedIn,
    firstName,
    searchQuery,
    setSearchQuery,
    show,
    setShow,
  } = useContext(myContext);
  const navigate = useNavigate();
  // console.log(isLoggedIn)
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async (searchQuery) => {
      try {
        const res = await axios.get(
          `https://asos-app-backend.onrender.com/products?search=${searchQuery}`
        );

        console.log(res.data.products);
        setShow(true);
        if (show) {
          navigate("/products");
        } else {
          navigate("/women");
        }
        setSearchResults(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    if (searchQuery.trim() !== "") {
      const timerId = setTimeout(() => {
        fetchSearchResults(searchQuery);
      }, 200);

      return () => clearTimeout(timerId);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <>
      <Flex
        position={"sticky"}
        top={0}
        zIndex={10}
        p={4}
        bg="RGBA(0, 0, 0, 0.80)"
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
          "2xl": "row",
        }}
      >
        {/*  left menu*/}
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"20px"}
          w={{
            base: "60%",
            sm: "50%",
            md: "24%",
            lg: "24%",
            xl: "24%",
            "2xl": "24%",
          }}
        >
          {/* logo */}
          <Box
            ml={{
              base: "0%",
              sm: "1%",
              md: "2%",
              lg: "10%",
              xl: "10%",
              "2xl": "10%",
            }}
            // border={"1px solid white"}
          >
            <Link to="/">
              <Image
                w="100px"
                h={{
                  base: "20px",
                  sm: "30px",
                  md: "30px",
                  lg: "30px",
                  xl: "30px",
                  "2xl": "30px",
                }}
                color="white"
                src="https://companieslogo.com/img/orig/ASC.L_BIG.D-783fd9b6.png?t=1652523993"
              />
            </Link>
          </Box>
          {/* Women and men link */}
          <Box>
            <Link to="/women">
              <Heading fontSize={"21px"} color={"white"}>
                WOMEN
              </Heading>
            </Link>
          </Box>
          <Box>
            <Link to="/men">
              <Heading color={"white"} fontSize={"21px"}>
                MEN
              </Heading>
            </Link>
          </Box>
        </Box>

        {/* Ṛight menu */}
        <Box
          mt={{
            base: "2%",
            sm: "1%",
            md: "0%",
            lg: "0%",
            xl: "0%",
            "2xl": "0%",
          }}
          w="60%"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap="20px"
        >
          <Box
            w="80%"
            // border={"1px solid white"}
          >
            <InputGroup bg="white" borderRadius={"50%"}>
              <Input
                placeholder="Search for items and brands"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputRightElement>
                <IconButton
                  aria-label="Search"
                  icon={<SearchIcon />}
                  variant="ghost"
                />
              </InputRightElement>
            </InputGroup>

            {/* Display Search results */}
          </Box>

          {/* login */}
          <Box>
            <Menu
              // isOpen={isLogin}
              as={Button}
            >
              <MenuButton

              // onMouseEnter={() => setIsLogin(true)}
              // onMouseLeave={() => setIsLogin(false)}
              // onMouseLeave={() => setIsLogin(false)}
              >
                <LoginIcon />
              </MenuButton>
              <MenuList ml="30%" mt="-5%">
                <MenuItem>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                  >
                    <Link to="/login">
                      {isLoggedIn ? `Hi ${firstName}` : "Sign In"}
                    </Link>{" "}
                    |{" "}
                    <Link to="/signup">
                      {isLoggedIn ? (
                        <Button onClick={() => setIsLoggedIn(false)}>
                          Logout
                        </Button>
                      ) : (
                        "Join"
                      )}
                    </Link>
                  </Box>
                </MenuItem>
                <MenuItem>My Account</MenuItem>
                <MenuItem>My Orders</MenuItem>
                <MenuItem>Return Information</MenuItem>
                <MenuItem>Contact Preferences </MenuItem>
              </MenuList>
            </Menu>
          </Box>

          {/* Add to Fav Button */}
          {/* <Button>
          <AddToFav />
        </Button> */}
          {/* Cart */}
          <Box>
            <Link to="/cart">
              <AddToCart />
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* Conditionally render search results */}
      {searchResults.length > 0 && (
        <Box
          
          w="47%"
          mt={2}
          m="auto"
          ml={{
            base:  "14%",
            sm : "20%",
            md : "40%",
            lg : "40%",
            xl : "40%",
            "2xl" : "40%"
          }}
          // p={5}
          bg="white"
          boxShadow="lg"
          rounded="md"
        >
          {searchResults.map((result) => (
            <Link to={`/${result._id}`} key={result.id}>
              <Box
              onClick={()=> setSearchResults("")}
             
                display={"flex"}
                justifyContent={"space-around"}
                // p={5}
                // boxShadow="lg"
                _hover={{ backgroundColor: "lightgrey", color: "black" }}
                rounded="md"
              >
                <Heading fontSize={"14px"} textAlign={"center"} m={"2%"}>
                  {result.title}
                </Heading>
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
};

export default Navbar;
