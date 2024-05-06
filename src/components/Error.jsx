import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const Error = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Something Went Wrong!</AlertTitle>
      <AlertDescription>Check your internet connection</AlertDescription>
    </Alert>
  );
};

export default Error;
