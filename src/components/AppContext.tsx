"use client";

// we only can context inside an client compoent
import { createContext, useContext } from "react";

export interface IAppContext {
  user: string;
  token: string;
  isLogin: boolean;
}

export const defaultAppContext: IAppContext = {
  user: "arijit mondal",
  token: "dkoow9292nd9",
  isLogin: true,
};

export const AppContext = createContext<IAppContext>(defaultAppContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AppContext.Provider value={defaultAppContext}>{children}</AppContext.Provider>;
};

export const useAppContext = (): IAppContext => {
  return useContext(AppContext);
};
