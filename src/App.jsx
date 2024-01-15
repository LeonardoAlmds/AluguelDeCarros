import Navbar from "./components/navbar/Navbar";
import ContentBox from "./components/content_box/ContentBox";
import Search from "./components/search/search";
import './App.css';

function App() {
  const opcoes = [];

  for (let hora = 0; hora <= 24; hora++) {

    opcoes.push(
      <option key={hora} value={`${hora}:00`}>
        {hora}:00
      </option>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="container">
        <ContentBox>
          <h1>Alugueis de carro em [cidade/regiao] a partir de [preço da região]</h1>

          <form action={'#'} method="post">
            <Search />
            <input type="date" name="retirar-data" id="retirar-data" className="form-input"/>
            <select className="form-input" id="retirar_hora">
              {opcoes}
            </select>
            <input type="date" name="receber-data" id="receber-data" className="form-input" />
            <select className="form-input" id="retirar_hora">
              {opcoes}
            </select>
            <input type="submit" value="Buscar" className="form-input input-button" />
          </form>

          <div className="retangulo"></div>
        </ContentBox>

        <ContentBox>
          <h2>O motivo que todos escolhem a [empresa]</h2>

          <div className="flex-content">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </ContentBox>
      </div>
    </>
  )
}

export default App;