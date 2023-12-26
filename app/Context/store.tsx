"use client";

import React, {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  isOpenModal: false,
  setIsOpenModal: () => {}, // Default function without console.log
});

export const GlobalContextProvider: React.FC = ({ children }:any) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <GlobalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
