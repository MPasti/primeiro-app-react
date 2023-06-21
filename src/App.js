import Header from "./components/Header/index";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisar";

//criamos o estilo dentro deste container do styled
//ele é um componente como cada componente do js, ele é usado igual a um componente
//assim não precisamos de classes, nem de arquivo css
//então aquela div virou o AppContainer
//é um container que guarda estilos

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(180deg, #000 50%, #f70f0f);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
