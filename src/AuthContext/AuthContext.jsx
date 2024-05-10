import  { createContext, useState } from "react";

export const myContext = createContext();
const AuthContext = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [firstName,setFirstName] = useState(null)
  //   const [authState, setIsAuthState] = useState({
  //     isAuth: false,
  //     token: null,
  //   });

  return (
    <myContext.Provider value={{ isLoggedIn, setIsLoggedIn, firstName, setFirstName}}>
      {children}
    </myContext.Provider>
  );
};

export default AuthContext;
