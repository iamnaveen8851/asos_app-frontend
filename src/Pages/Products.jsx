import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { myContext } from "../AuthContext/AuthContext";
const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortByPrice, setSortByPrice] = useState(
    searchParams.get("sortByPrice") || ""
  );

  // Search query
  const { searchQuery } = useContext(myContext);
  // pagination
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearchParams((prevSearchParam) => {
      const newSearchParam = new URLSearchParams(prevSearchParam);

      if (sortByPrice) {
        newSearchParam.set("sortByPrice", sortByPrice);
      }else{
        newSearchParam.delete("sortByPrice");
      }
      // Conditionally set the search parameter if searchQuery is not empty
      if (searchQuery) {
        newSearchParam.set("search", searchQuery);
      } else {
        // Remove the search parameter from URL if searchQuery is empty
        newSearchParam.delete("search");
      }
      return newSearchParam;
    });

    getData();
  }, [currentPage, sortByPrice, searchQuery]);

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://asos-app-backend.onrender.com/products?page=${currentPage}&sortByPrice=${sortByPrice}&search=${searchQuery}`
      );
      console.log(data.products);
      setData(data.products);
      setTotalPages(data.totalPages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <>
      <br />
      <Box
        border={"1px solid black"}
        w={{
          base: "50%",
          sm: "50%",
          md: "45%",
          lg: "20%",
          xl: "20%",
          "2xl": "15%",
        }}
        m="auto"
      >
        <Select
          value={sortByPrice}
          onChange={(e) => setSortByPrice(e.target.value)}
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low To High</option>
          <option value="desc">High To Low</option>
        </Select>
      </Box>
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
          {data.map((data) => (
            <Link to={`/${data._id}`} key={data._id}>
              <Box
                // border={"1px solid grey"}
                p={5}
                boxShadow="lg"
                rounded="md"
              >
                <Image w={"100%"} src={data.img} />
                <Heading fontSize={"16px"} textAlign={"center"} m={"2%"}>
                  {data.title}
                </Heading>
                <Text fontWeight={"550"} fontSize={"16px"} textAlign={"center"}>
                  Price : {data.price}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      {/* Load More Button */}
      <Box
        m="auto"
        // border={"1px solid black"}
        p={2}
        w="20%"
      >
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          mr={2}
          _hover={{ background: "blue", color: "white", cursor: "pointer" }}
        >
          Previous
        </Button>
        {currentPage < totalPages && (
          <Button
            onClick={loadMore}
            _hover={{ background: "green", color: "white", cursor: "pointer" }}
          >
            Load More...
          </Button>
        )}
      </Box>
    </>
  );
};

export default Products;
