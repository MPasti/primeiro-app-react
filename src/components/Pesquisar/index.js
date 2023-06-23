import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

//background-image: linear-gradient(180deg, #000 35%, #fa4b4e);
const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisar() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  //para atualizar o valor sem precisar dar refresh
  //seu parametro inicial pode ser qualquer coisa, mas ele vai ser o "", por ser uma string

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Pesquise sua proxima leitura"
        onChange={(e) => {
          const textoMin = e.target.value.toLowerCase();
          //para deixar em lowercase e achar independente do case sensitive
          // const textoDigitado = e.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoMin)
          );
          setLivrosPesquisados(resultadoPesquisa);
          console.log(resultadoPesquisa);
          //ele vai retornar os livros que possuem o conjunto de palavras semelhante, mas é case sensitive
          //o filter fltra os nomes de livros que encaixam com o texto digitado, vai filtrar cada um
        }}
      />
      {
        //vamos usar o estado da página
      }
      {livrosPesquisados.map((e) => (
        <Resultado key={e.key}>
          <img src={e.src} alt="imagem do livro"></img>
          <p>{e.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  );
}
//a função onblur é chamado sempre que saimos do campo
//o target.value deste evento, é o valor digitado no input

export default Pesquisar;
