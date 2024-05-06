import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
        <App />
      <AuthContext>
      </AuthContext>
    </BrowserRouter>
  </ChakraProvider>
);
