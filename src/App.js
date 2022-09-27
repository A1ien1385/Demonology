import "./style/main.scss";
import Main from "./gui";
import Intro from "./intro";

function App() {

  
  return (
    <div className="App">
      
      <Main />
      <nav>
        
          <a href="/intro" className="title_btn intro">
            Intro
          </a>
          <a href="/lilith" className="title_btn lilith">
            Lilith
          </a>
          <a href="/eligos" className="title_btn eligos">
            Eligos
          </a>
          <a href="/vapar" className="title_btn vapar">
            Vapar
          </a>
          <a href="/amdusias" className="title_btn amdusias">
            Amdusias
          </a>
          <a href="/dantalion" className="title_btn dantalion">
            Dantalion
          </a>
        
      </nav>
      
    </div>
  );
}

export default App;
