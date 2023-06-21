import "./style.css";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

function Opcoes() {
  return (
    <ul className="opcoes">
      {
        //o .map serve para passar pelos itens da lista
        //logo ele vai criar uma lista para cada elemento que ver no map
        //para cada elemento da lista, ele vai retornar um elemento li com a opcao dentro
        textoOpcoes.map((e) => (
          <li className="opcao">
            <p>{e}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default Opcoes;
