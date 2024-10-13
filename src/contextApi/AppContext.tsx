"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [session, setsession] = useState<any>(null);
  return (
    <AppContext.Provider value={{ session, setsession }}>
      {children}
    </AppContext.Provider>
  );
};
