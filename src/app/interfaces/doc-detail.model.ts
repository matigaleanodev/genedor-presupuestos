export interface BudgetDetail {
  id: number;
  description: string;
  amount: number;
  amountType: AmountType;
  unitPrice: number;
}

export interface AmountType {
  id: Number;
  name: string;
  symbol: string;
}
