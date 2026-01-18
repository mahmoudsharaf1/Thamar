import { Opportunity } from "@features/main/types/data";

export interface Transaction {
  id: string;
  type: "DEPOSIT" | "INVEST";
  amount: number;
  date: string;
  opportunityName?: string;
}

export interface WalletState {
  availableBalance: number;
  investedBalance: number;
  opportunities: Opportunity[];
  transactions: Transaction[];
  loading: boolean;
}

export type WalletAction =
  | { type: "INIT_DATA"; payload: Opportunity[] }
  | { type: "INVEST"; payload: { amount: number; opportunity: Opportunity } }
  | { type: "DEPOSIT"; payload: { amount: number } };
