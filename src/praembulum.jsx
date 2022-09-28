import Nav from "./nav";
import { useState } from "react";

function Praeambulum(props) {
  const [isActive, setActive] = useState(false);
  function toggleClass()
  {
   setActive(!isActive);
  };

    return (
      <>
      <div className="page_container--horizon">
        <h1 className="page_title">Praembulum</h1>
        <main  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
        </main>
        <div className="page_description_content"><h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
          </h5></div>
      </div> 
      
      </>
    );
  }
  
  export default Praeambulum;