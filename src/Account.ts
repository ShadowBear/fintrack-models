import { Transaction } from "./Transaction";
import { User } from "./User";

export interface Account {
  id: string;
  userId: string;
  name: string;
  type: "cash" | "checking" | "credit" | "investment";
  currency: string;
  createdAt: string;
  updatedAt: string;

  transactions?: Transaction[];
  user?: User;
}
