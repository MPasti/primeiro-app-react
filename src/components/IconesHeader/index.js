import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
  margin-right: 80px;
`;

const Lista = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

//transformou em objeto pois estava dando erro nas keys, pos quando cria uma lista precisa de uma
//tudo que há um sistema de repetição precisa de uma key (id)
const icones = [
  { key: 1, img: perfil },
  { key: 2, img: sacola },
];

function Icons() {
  return (
    <Lista>
      {icones.map((e) => (
        <Icone key={e.key}>
          <img src={e.img} alt="icon-header"></img>
        </Icone>
      ))}
    </Lista>
  );
}

export default Icons;
