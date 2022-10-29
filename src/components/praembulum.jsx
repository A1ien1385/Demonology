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
      <div className="banner preambulumhBanner"></div>
        <h1 className="page_title">Praeambulum</h1>
        <main id="succub"  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
        </main>
        <div className="page_description_content"><h5 className="page_desc_content_txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
          </h5></div>


          <div className="prevNextBox">
            <a className="prevNext" href="/">prev</a>
            <a className="prevNext" href="/lilith">next</a>
               </div>
      </div> 
      
      </>
    );
  }
  
  export default Praeambulum;