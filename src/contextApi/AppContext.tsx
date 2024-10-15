"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [session, setsession] = useState<any>(null);
  const [mainLoading, setmainLoading] = useState<boolean>(false);
  return (
    <AppContext.Provider
      value={{ session, setsession, mainLoading, setmainLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};
