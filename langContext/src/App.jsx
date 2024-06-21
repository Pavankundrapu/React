import React, { useContext } from 'react';
import { LangProvider, LangContext } from './contexts/LangContext';

const LanguageComponent = () => {
  const { lang, langChange } = useContext(LangContext);

  return (
    <div>
      <div>The language is {lang}</div>
      <button onClick={langChange}>Change</button>
    </div>
  );
};

function App() {
  return (
    <LangProvider>
      <LanguageComponent />
    </LangProvider>
  );
}

export default App;
