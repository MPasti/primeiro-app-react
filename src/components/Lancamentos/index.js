import styled from "styled-components";
import { livrosLancamento } from "./dadosLancamentos";
import { Titulo } from "../Titulo";
import Sugestao from "../Sugestao";
//como não é um export default, ele precisa estar dentro de {} para buscar o elemento la

const Secao = styled.section`
  margin: 120px 0 0 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(70deg, #121111 20%, #292423);
`;

const LivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  img {
    width: 200px;
  }
`;

function Lancamentos() {
  return (
    <Secao>
      {
        // isso é um props, variavel que passa para modificar o style
      }
      <Titulo
        cor="#fff"
        tamanhofonte="36px"
        alinhamento="left"
        margin="0 0 0 0"
        padding="60px 0 0 260px"
      >
        Últimos Lançamentos
      </Titulo>
      <LivrosContainer>
        {livrosLancamento.map((livro) => (
          <img key={livro.key} src={livro.src} alt="livros lancamento"></img>
        ))}
      </LivrosContainer>
      <Sugestao
        titulo="Talvez você se interesse por "
        subtitulo="coraline"
        descricao="Certas portas não devem ser abertas. E Coraline descobre isso
        pouco tempo depois de chegar com os pais à sua nova casa, um apartamento
        em um casarão antigo ocupado por vizinhos excêntricos e envolto por uma
        névoa insistente, um mundo de estranhezas e magia, o tipo de universo
        que apenas Neil Gaiman pode criar."
      />
    </Secao>
  );
}

export default Lancamentos;
