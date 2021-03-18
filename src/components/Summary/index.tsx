import { Container } from "./styles";
import { ReactComponent as IncomeIcon } from "../../assets/svgs/income.svg";
import { ReactComponent as OutcomeIcon } from "../../assets/svgs/outcome.svg";
import { ReactComponent as TotalIcon } from "../../assets/svgs/total.svg";

const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <IncomeIcon />
        </header>
        <main>
          <strong>R$ 1000</strong>
        </main>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <OutcomeIcon />
        </header>
        <main>
          <strong>- R$ 100</strong>
        </main>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <TotalIcon />
        </header>
        <main>
          <strong>- R$ 900</strong>
        </main>
      </div>
    </Container>
  );
};

export default Summary;
