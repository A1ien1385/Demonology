import Nav from "./nav";
import { useState } from "react";

function Praeambulum(props) {
  const [isActive, setActive] = useState(false);
  function toggleClass()
  {
   setActive(!isActive);
  };

    return (
      
      <div className="page_container--horizon">
        <h1 className="page_title">Praembulum</h1>
        <main  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
        </main>
      </div> 
      
    );
  }
  
  export default Praeambulum;