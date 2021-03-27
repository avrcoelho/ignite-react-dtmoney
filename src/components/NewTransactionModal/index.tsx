import Modal from "react-modal";

import { ReactComponent as CloseIcon } from "../../assets/svgs/close.svg";
import { ReactComponent as IncomeIcon } from "../../assets/svgs/income.svg";
import { ReactComponent as OutcomeIcon } from "../../assets/svgs/outcome.svg";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        aria-label="Fechar modal"
      >
        <CloseIcon />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <button type="button">
            <IncomeIcon />
            <span>Entrada</span>
          </button>
          <button type="button">
            <OutcomeIcon />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Ctegoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export default NewTransactionModal;