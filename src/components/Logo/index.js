import logo from "../../images/logo.svg";
//.. é para voltar
import "./style.css";

function Logo() {
  return (
    <div className="logo">
      <img className="logo-img" src={logo} alt="logo do site"></img>
      <p className="titulo-logo">
        {" "}
        <strong>Pasti</strong>Books{" "}
      </p>
    </div>
  );
}

export default Logo;
//exportando a função para os outros arquivos
