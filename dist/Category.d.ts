import { type Transaction } from "./Transaction";
import { type User } from "./User";
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
//# sourceMappingURL=Category.d.ts.map