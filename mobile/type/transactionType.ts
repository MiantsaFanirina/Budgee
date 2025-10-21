
export type TransactionCategoryType = "spotify" | "netflix" | "youtube" | "food" | "income" | "transport";
export interface TransactionType {
  id: number;
  type: "Expense" | "Income";
  name: string;
  category: TransactionCategoryType;
  amount: number;
  date: string;
  details: string;
}