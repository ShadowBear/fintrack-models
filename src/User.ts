import { type Account } from "./Account";
import { type Category } from "./Category";
import { type Transaction } from "./Transaction";

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
