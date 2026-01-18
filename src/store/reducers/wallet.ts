import { WalletAction, WalletState } from "../types";

export const initialWalletState: WalletState = {
  availableBalance: 20000,
  investedBalance: 0,
  opportunities: [],
  transactions: [],
  loading: true,
};

export const walletReducer = (
  state: WalletState,
  action: WalletAction,
): WalletState => {
  switch (action.type) {
    case "INIT_DATA":
      return {
        ...state,
        opportunities: action.payload,
        loading: false,
      };

    case "INVEST": {
      const { amount, opportunity } = action.payload;

      if (state.availableBalance < amount) {
        return state;
      }

      return {
        ...state,
        availableBalance: state.availableBalance - amount,
        investedBalance: state.investedBalance + amount,
        transactions: [
          {
            id: Date.now().toString(),
            type: "INVEST",
            amount,
            date: new Date().toISOString(),
            opportunityName: opportunity.name,
          },
          ...state.transactions,
        ],
      };
    }

    case "DEPOSIT":
      return {
        ...state,
        availableBalance: state.availableBalance + action.payload.amount,
        transactions: [
          {
            id: Date.now().toString(),
            type: "DEPOSIT",
            amount: action.payload.amount,
            date: new Date().toISOString(),
          },
          ...state.transactions,
        ],
      };

    default:
      return state;
  }
};
