import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import { GlobalStyles } from "./assets/styles/global";

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  );
}
