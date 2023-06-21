import styled from "styled-components";

const textoOpcoes = [
  { nome: "CATEGORIAS", key: 1 },
  { nome: "FAVORITOS", key: 2 },
  { nome: "ESTANTE", key: 3 },
];

const Lista = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  display: flex;
  font-size: 20px;
  font-family: 
  min-width: 120px;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  cursor: pointer;
  font-family: sans-serif;
`;

function Opcoes() {
  return (
    <Lista>
      {
        //o .map serve para passar pelos itens da lista
        //logo ele vai criar uma lista para cada elemento que ver no map
        //para cada elemento da lista, ele vai retornar um elemento li com a opcao dentro
        textoOpcoes.map((e) => (
          <Opcao key={e.key}>
            <p>{e.nome}</p>
          </Opcao>
        ))
      }
    </Lista>
  );
}

export default Opcoes;
