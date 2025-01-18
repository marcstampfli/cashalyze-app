// Common types for the Cashalyze application

export interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
}

export interface BankStatement {
  id: string;
  fileName: string;
  uploadDate: Date;
  transactions: Transaction[];
}

export interface Category {
  id: string;
  name: string;
  type: 'income' | 'expense';
  color: string;
}
