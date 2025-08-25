export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  date: string; // ISO string
  name: string;
  type: "income" | "expense";
  note?: string;
  references?: string;
  saldo: number;
  amount: number;
  currency: string;
  createdAt: string;
  updatedAt?: string;
}
