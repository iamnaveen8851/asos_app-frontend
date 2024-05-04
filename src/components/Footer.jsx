import { SimpleGrid, Box, Heading, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="RGBA(0, 0, 0, 0.08)" >
      <SimpleGrid fontFamily={"futura-pt, sans-serif"} p={5} columns={{
        base: "1",
        sm : "2",
        md : "3",
        lg : "4",
        xl : "4",
        "2xl" : "4"
      }} spacing={5}>
        <Box
        //  border={"1px solid black"} 
         display={"grid"}>
          <Heading fontSize={"14px"} color="rgb(102, 102, 102)">
            HELP & INFORMATION
          </Heading>
          <br />
          <Link fontSize={"14px"} href="https://www.Linksos.com/customer-cLinkre/">Help</Link>
          <Link fontSize={"14px"} href="https://my.asos.com/identity/login?signin=65c9d9f134c98269243c703f2732b329">
            Track order
          </Link>
          <Link fontSize={"14px"} href="https://www.asos.com/payments-and-deliveries/delivery/">
            Delivery & returns
          </Link>
          <Link fontSize={"14px"} href="https://www.asos.com/sitemap/">Sitemap</Link>
        </Box>
        <Box 
        // border={"1px solid black"} 
        display={"grid"}>
          <Heading fontSize={"14px"} color="rgb(102, 102, 102)">
            ABOUT ASOS
          </Heading>
          <br />
          <Link fontSize={"14px"}  href="https://www.asos.com/about/">About us</Link>
          <Link fontSize={"14px"}  href="https://www.asoscareers.com/">Careers at ASOS</Link>
          <Link fontSize={"14px"}  href="https://www.asosplc.com/fashion-with-integrity/">
            Corporate responsibility
          </Link>
          <Link fontSize={"14px"} href="https://www.asosplc.com/">Investors site</Link>
        </Box>
        <Box 
        // border={"1px solid black"} 
        display={"grid"}>
          <Heading fontSize={"14px"} color="rgb(102, 102, 102)">
            MORE FROM ASOS
          </Heading>
          <br />
          <Link fontSize={"14px"} href="https://www.asos.com/discover/our-apps/">
            Mobile and ASOS apps
          </Link>
          <Link fontSize={"14px"} href="https://marketplace.asos.com/?ctaref=Global+footer">
            ASOS MarketPlace
          </Link>
          <Link fontSize={"14px"} href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers">
            Gift vouchers
          </Link>
          <Link fontSize={"14px"} href="https://www.asos.com/discover/black-friday-cyber-monday-deals/">
            Black Friday
          </Link>
          <Link fontSize={"14px"} href="https://thrift.plus/pages/get-started-asos">
            ASOS x Thrift+
          </Link>
          <Link fontSize={"14px"} href="https://www.asos.com/discover/asos-credit-card">
            Discover the ASOS Credit Card
          </Link>
          <Link fontSize={"14px"} href="https://asos.uservoice.com/forums/923293">
            Help Improve the ASOS Website
          </Link>
        </Box>
        <Box
        //  border={"1px solid black"}
         display={"grid"}>
          <Heading fontSize={"14px"} color="rgb(102, 102, 102)">
            SHOPPING FROM:
          </Heading>
          <br />
          <Link fontSize={"14px"} href="https://www.asos.com/about/">Big Sale Offers</Link>
          <Link fontSize={"14px"} href="https://www.asoscareers.com/">Black Friday</Link>
          <Link fontSize={"14px"} href="https://www.asosplc.com/fashion-with-integrity/">
            ASOS Marketplace
          </Link>
          <Link fontSize={"14px"} href="https://www.asosplc.com/">Mobie and ASOS apps</Link>
        </Box>
      </SimpleGrid>
      <Box
        bg="RGBA(0, 0, 0, 0.16)"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={4}
      >
        <Box>
          <Text>© 2024 ASOS</Text>
        </Box>
        <Box>
        <Text>Privacy & Cookies | Ts&Cs | Accessibility</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
