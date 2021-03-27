import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { Container, Content } from "./styles";

interface HedaerProps {
  onOpenNewTransactionNewModal(): void;
}

const Header = ({ onOpenNewTransactionNewModal }: HedaerProps) => {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button" onClick={onOpenNewTransactionNewModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
