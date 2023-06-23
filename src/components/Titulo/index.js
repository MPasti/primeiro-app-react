import styled from "styled-components";

export const Titulo = styled.h2`
  padding: ${(props) => props.padding || "50px 0px 30px 180px"};
  color: ${(props) => props.cor || "#fff"};
  font-size: ${(props) => props.tamanhofonte || "36px"};
  text-align: ${(props) => props.alinhamento || "center"};
  margin: ${(props) => props.margem || "0"};
  font-family: ${(props) => props.fonte || "sans-serif"};
`;
