export type Opportunity = {
  id: string;
  name: string;
  category?: string;
  expectedReturn: number;
  duration: number;
  minInvestment: number;
  description?: string;
};

export type Balance = {
  total: number;
  available: number;
};

export type HomeDashboardState = {
  loading: boolean;
  opportunities: Opportunity[];
  balance: Balance;
};
