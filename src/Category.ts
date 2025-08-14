import { Transaction } from "./Transaction";
import { User } from "./User";

export interface Category {
  id: string;
  userId: string;
  name: string;
  type: "income" | "expense";
  createdAt: string;
  updatedAt: string;

  transactions?: Transaction[];
  user?: User;
}
