import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
const navigate = useNavigate()
  const handleSignUp = async (e) => {
    e.preventDefault();
    const formState = { email, password, username };
    try {
      const register = await axios.post(
        `https://asos-app-backend.onrender.com/users/signUp`,
        formState
      );

      console.log(register);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={10} borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSignUp}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="username" mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        <Button type="submit" colorScheme="blue" >
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
