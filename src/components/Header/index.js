import Opcoes from "../ListaHeader";
import Icons from "../IconesHeader";
import Logo from "../Logo";
import "./style.css";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <Opcoes />
      <Icons />
    </header>
  );
}

export default Header;
