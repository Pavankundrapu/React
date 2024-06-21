import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = ({children}) => {
  
    const [User,setUser] = useState(null); 
  
  return(
    <ThemeContext.Provider value={{
      User,setUser
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext,ThemeProvider}