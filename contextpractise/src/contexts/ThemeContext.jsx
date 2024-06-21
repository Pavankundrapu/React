import React, { useState } from "react";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  
    const [User,setUser] = useState(null); 
  
  return(
    <ThemeContext.Provider value={{
      User,setUser
    }}>
      {children}
    </ThemeContext.Provider>
  )
}