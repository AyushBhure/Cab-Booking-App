import { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext();

export function CaptainContext({ children }) {
  const [captain, setCaptain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCaptain = (captainData) => {
    setCaptain(captainData);
  };

  const value = {
    captain,
    isLoading,
    error,
    updateCaptain,
    setCaptain,
    setIsLoading,
    setError,
  };

  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
}

export default CaptainContext;
