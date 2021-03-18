import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

import { Container, Content } from "./styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
