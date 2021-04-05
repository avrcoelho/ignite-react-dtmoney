import { useTransactions } from "../../hooks/useTransactions";

import { ReactComponent as IncomeIcon } from "../../assets/svgs/income.svg";
import { ReactComponent as OutcomeIcon } from "../../assets/svgs/outcome.svg";
import { ReactComponent as TotalIcon } from "../../assets/svgs/total.svg";
import { Container } from "./styles";

const Summary = () => {
  const { transactions } = useTransactions();

  const { deposits, total, withDraws } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withDraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    { deposits: 0, withDraws: 0, total: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <IncomeIcon />
        </header>
        <main>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(deposits)}
          </strong>
        </main>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <OutcomeIcon />
        </header>
        <main>
          <strong>
            -{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(withDraws)}
          </strong>
        </main>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <TotalIcon />
        </header>
        <main>
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(total)}
          </strong>
        </main>
      </div>
    </Container>
  );
};

export default Summary;
