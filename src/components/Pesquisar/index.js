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

function Pesquisar() {
  const [livroDigitado, setLivroPesquisado] = useState();
  //para atualizar o valor sem precisar dar refresh
  //seu parametro inicial pode ser qualquer coisa, mas ele vai ser o "", por ser uma string

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        onBlur={(e) => {
          const textoDigitado = e.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          //o filter fltra os nomes de livros que encaixam com o texto digitado, vai filtrar cada um
        }}
        placeholder="Pesquise sua proxima leitura"
      />
    </PesquisaContainer>
  );
}
//a função onblur é chamado sempre que saimos do campo
//o target.value deste evento, é o valor digitado no input

export default Pesquisar;
