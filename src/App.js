import "./style/main.scss";
import Nav from "./components/nav";
import Intro from "./components/intro";
import Praeambulum from "./components/praembulum";
import Scriptum from "./components/scriptum";
import Lilith from "./components/lilith";
import Lucifer from "./components/lucifer";
import Samael from "./components/samael";
import Eligos from "./components/eligos";
import Vapar from "./components/vapar";
import Amdusias from "./components/amdusias";
import Dantalion from "./components/dantalion";

function App() {

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Intro/>;
      break;
   
    case "/praeambulum":
      component = <Praeambulum />;
      break;

    case "/lilith":
      component = <Lilith/>  
      break; 

    case "/lucifer":
      component = <Lucifer/>
        break;
     
    case "/samael":
      component = <Samael />
        break;
  
    case "/eligos":
      component = <Eligos />
        break;  
  
    case "/vapar":
      component = <Vapar/>  
        break;   

    case "/amdusias":
      component = <Amdusias/>  
        break;  

    case "/dantalion":
      component = <Dantalion/>  
        break; 

    case "/scriptum":
      component = <Scriptum />
        break;    
  }
  
  return (
    <div className="App">
      
      { component }
      <Nav/>
    
    </div>
  );
}

export default App;
