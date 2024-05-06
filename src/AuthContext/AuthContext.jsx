import React, { createContext, useState } from "react";

export const myContext = createContext();
const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username,setUsername] = useState(null)
  //   const [authState, setIsAuthState] = useState({
  //     isAuth: false,
  //     token: null,
  //   });

  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername}}>
      {children}
    </myContext.Provider>
  );
};

export default AuthContext;
