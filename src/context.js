import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // STATE VALUES
  const [activePage, setActivePage] = useState(1);
  // FUNCTIONS AND SIDE EFFECTS

  const advance = (id) => {
    setActivePage(id);
  };
  return (
    <AppContext.Provider
      value={{
        activePage,
        advance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// CUSTOM HOOK

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
