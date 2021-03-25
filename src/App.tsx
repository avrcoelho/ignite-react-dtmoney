import { createServer } from "miragejs";

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

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  );
}
