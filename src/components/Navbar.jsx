
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Image
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <Flex bg="RGBA(0, 0, 0, 0.80)" justifyContent={"space-around"}>
      <Box>
        <Image w="200px" h="50px" color="white" src="https://companieslogo.com/img/orig/ASC.L_BIG.D-783fd9b6.png?t=1652523993" />
      </Box>
      <Box>
        <Tabs variant="unstyled">
          <TabList>
            <Tab _selected={{ color: "white", bg: "grey" }}>Tab 1</Tab>
            <Tab _selected={{ color: "white", bg: "grey" }}>Tab 2</Tab>
          </TabList>
          <TabPanels  >
            <TabPanel w="100%" bg={"grey"} color="white" display="flex" justifyContent={"space-around"}>
              <p>one!</p>
              <p>one!</p>
              <p>one!</p>
              <p>one!</p>
              <p>one!</p>
              <p>one!</p>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box>
        <InputGroup>
          <Input placeholder="Search..." />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant="ghost"
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box p="4" bg="green.400">
        Box 2
      </Box>
    </Flex>
  );
};

export default Navbar;
