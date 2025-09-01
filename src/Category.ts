import { type Transaction } from "./Transaction";
import { type User } from "./User";

export interface Category {
  id: string;
  userId: string;
  name: string;
  icon: string;
  categoryGoal: number;
  color?: string;

  transactions?: Transaction[];
}
