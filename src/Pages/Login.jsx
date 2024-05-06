import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `https://asos-app-backend.onrender.com/users/login`,
        { email, password }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box maxW="md" mx="auto" mt={8} p={10} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleLogin}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
