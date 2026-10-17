import React, { createContext, use, useContext, useState ,useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();
function Context(props) {

  const [user, setUser] = useState([]);

  useEffect(() => {
  
  axios.get("https://fakestoreapi.com/users")
    .then((response)=>{
      setUser(response.data);
    })
    .catch((er)=>{
      console.log(er);
    })
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </> 
  );
}

export default Context;
