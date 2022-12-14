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
import LilithTwo from "./components/lilithTwo";
import LuciferTwo from "./components/luciferTwo";
import LuciferThree from "./components/luciferThree";
import LuciferFour from "./components/luciferFour";
import AmdusiasTwo from "./components/amdusiasTwo";
import LuciferFive from "./components/luciferFive";
import Succubus from "./components/succubus";
import SuccubusTwo from "./components/succubusTwo";
import SuccubusThree from "./components/succubusThree";
import SamaelTwo from "./components/samaelTwo";

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

      case "/lilithTwo":
        component = <LilithTwo/>  
        break;   
        
        case "/succubus":
          component = <Succubus/>  
          break;   
        
          case "/succubusTwo":
          component = <SuccubusTwo/>  
          break;   

          case "/succubusThree":
          component = <SuccubusThree/>  
          break;   

    case "/lucifer":
      component = <Lucifer/>
        break;

        case "/luciferTwo":
        component = <LuciferTwo/>  
        break;   

        case "/luciferThree":
        component = <LuciferThree/>  
        break;   

        case "/luciferFour":
        component = <LuciferFour/>  
        break;   

        case "/luciferFive":
        component = <LuciferFive/>  
        break;   
     
    case "/samael":
      component = <Samael />
        break;

        case "/samaelTwo":
      component = <SamaelTwo />
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

        case "/amdusiasTwo":
      component = <AmdusiasTwo/>  
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
