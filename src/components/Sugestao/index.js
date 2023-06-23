import { livros } from "../Pesquisar/dadosPesquisa";
import { Titulo } from "../Titulo";
import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  background: linear-gradient(-0deg, #719feb 50%, #094099);
  box-shadow: 0px 4px 16px #b3acab;
  display: flex;
  margin: 60px auto 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Liv = styled.img`
  width: 200px;
`;
const Botao = styled.button`
  background-color: blue;
  color: #c3d8fa;
  border-radius: 8px;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-family: sans-serif;
  font-weight: 900;
  display: block;
  justify-content: center;
  text-align: center;
  width: 200px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
  font-family: times new roman;
  font-size: 19px;
  text-align: justify;
`;

// const Subtitulo = styled.h4`
//   color: #blue;
//   font-size: 18px;
//   font-weight: bold;
//   margin: 15px 0;
// `;

function Sugestao({ titulo, subtitulo, descricao }) {
  const nomeLivro = livros.filter((livro) => livro.nome.includes(subtitulo));

  return (
    <Card>
      <div>
        <Titulo
          padding="0 0 0 0"
          cor="#000"
          tamanhofonte="26px"
          alinhamento="left"
          fonte="times new roman"
        >
          {titulo}
        </Titulo>
        <Titulo
          padding="0 0 0 0"
          cor="#000"
          tamanhofonte="36px"
          alinhamento="left"
          fonte="sans-serif"
        >
          {subtitulo.toUpperCase()}
        </Titulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <Liv src={nomeLivro[0].src} alt="imagem sugestao" />
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
}
export default Sugestao;
