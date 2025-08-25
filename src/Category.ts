import { type Transaction } from "./Transaction";
import { type User } from "./User";

export interface Category {
  id: string;
  user_id: string;
  name: string;
  icon: string;
  category_goal: number;
  color?: string;

  transactions?: Transaction[];
}
