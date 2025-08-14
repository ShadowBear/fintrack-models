import { Account } from "./Account";
import { Category } from "./Category";
import { Transaction } from "./Transaction";

export interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;

  account?: Account;
  category?: Category;
  transactions?: Transaction[];
}
