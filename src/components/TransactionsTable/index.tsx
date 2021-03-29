import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
  amount: number;
}

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("transactions")
      .then(({ data: { transactions } }) => setTransactions(transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={String(transaction.id)}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
