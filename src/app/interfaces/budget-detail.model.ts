export interface BudgetDetail {
  id: number;
  description: string;
  amount: number;
  detailType: DetailType;
  unitPrice: number;
}

export interface DetailType {
  id: Number;
  name: string;
  symbol: string;
}
