import { useState } from "react";
import { createServer, Model } from "miragejs";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./assets/styles/global";
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer de sitezinho",
          type: "deposit",
          category: "Dev",
          amount: 4000,
          createdAt: new Date("2021-02-28 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1100,
          createdAt: new Date("2021-03-28 14:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <GlobalStyles />

      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />
    </TransactionsProvider>
  );
}
