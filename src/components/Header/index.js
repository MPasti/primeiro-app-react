import Opcoes from "../ListaHeader";
import Icons from "../IconesHeader";
import Logo from "../Logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Opcoes />
      <Icons />
    </HeaderContainer>
  );
}

export default Header;
