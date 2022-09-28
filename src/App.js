import "./style/main.scss";
import Nav from "./nav";
import Intro from "./intro";
import Praeambulum from "./praembulum";

function App() {

  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Intro/>;
      break;
   
    case "/praeambulum":
      component = <Praeambulum />;
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
