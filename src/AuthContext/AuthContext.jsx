import  { createContext, useState } from "react";

export const myContext = createContext();
const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [firstName,setFirstName] = useState(null)
  //   const [authState, setIsAuthState] = useState({
  //     isAuth: false,
  //     token: null,
  //   });

  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn, firstName, setFirstName, searchQuery, setSearchQuery}}>
      {children}
    </myContext.Provider>
  );
};

export default AuthContext;
