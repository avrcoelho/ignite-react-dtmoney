import { useState } from "react";
import { createServer } from "miragejs";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { GlobalStyles } from "./assets/styles/global";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          date: "2021-02-02",
        },
      ];
    });
  },
});

Modal.setAppElement("root");

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
    <>
      <GlobalStyles />

      <Header onOpenNewTransactionNewModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}
