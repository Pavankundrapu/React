import React, { useState } from "react";

const LangContext = React.createContext();

function LangProvider({children}){
   
   const [lang,setLang] = useState("en");

   const langChange = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'es' : 'en'));

   }
   
  return(
    <LangContext.Provider value={{lang,langChange}}>
      {children}
    </LangContext.Provider>
  )
}

export {LangContext,LangProvider}