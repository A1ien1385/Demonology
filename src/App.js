import "./style/main.scss";
import Nav from "./components/nav";
import Intro from "./components/intro";
import Praeambulum from "./components/praembulum";
import Scriptum from "./components/scriptum";

function App() {

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Intro/>;
      break;
   
    case "/praeambulum":
      component = <Praeambulum />;
      break;

    case "/scriptum":
      component = <Scriptum />;
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
