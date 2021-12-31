import React, { useState, createContext } from "react";
import { signupSubs } from "../api/auth-api";

export const SubsContext = createContext(null);

const SubsContextProvider = (props) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const register = async (name, email) => {
    const result = await signupSubs(name, email);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };


  return (
    <SubsContext.Provider
      value={{
        
        Name,
        Email
      }}
    >
      {props.children}
    </SubsContext.Provider>
  );
};

export default SubsContextProvider;