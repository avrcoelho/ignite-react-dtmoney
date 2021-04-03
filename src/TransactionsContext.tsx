import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
  amount: number;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("transactions")
      .then(({ data: { transactions } }) => setTransactions(transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
};
