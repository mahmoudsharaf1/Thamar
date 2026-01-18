import { data } from "@features/main/utils/data";
import { initialWalletState, walletReducer } from "@store/reducers/wallet";
import { WalletAction, WalletState } from "@store/types";
import React, { createContext, useContext, useEffect, useReducer } from "react";

type WalletContextValue = {
  state: WalletState;
  dispatch: React.Dispatch<WalletAction>;
};

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(walletReducer, initialWalletState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "INIT_DATA", payload: data });
    }, 800);
  }, []);

  return (
    <WalletContext.Provider value={{ state, dispatch }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }
  return context;
};
