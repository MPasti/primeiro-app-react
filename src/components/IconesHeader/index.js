import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import "./style.css";

const icones = [perfil, sacola];

function Icons() {
  return (
    <ul className="icones">
      {icones.map((e) => (
        <li>
          <img className="icon-header" src={e} alt="icon-header"></img>
        </li>
      ))}
    </ul>
  );
}

export default Icons;
