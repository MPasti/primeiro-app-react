import logo from "../../images/livro.svg";
//.. é para voltar
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  cursor: default;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  color: #ff0000;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo do site" />
      <p style={{ color: "#ff0000" }}>
        {" "}
        <strong>Pasti</strong>Books{" "}
      </p>
    </LogoContainer>
  );
}

export default Logo;
//exportando a função para os outros arquivos
