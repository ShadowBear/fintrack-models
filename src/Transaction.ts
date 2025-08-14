import { type Account } from "./Account";
import { type Category } from "./Category";
import { type User } from "./User";

export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  categoryId: string;
  amount: number;
  type: "income" | "expense";
  note?: string;
  date: string; // ISO string
  createdAt: string;
  updatedAt: string;

  account?: Account;
  category?: Category;
  user?: User;
}
