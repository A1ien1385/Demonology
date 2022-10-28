import { useState } from "react";

function Amdusias(props) {
    const [isActive, setActive] = useState(false);
    function toggleClass()
    {
     setActive(!isActive);
    };
  
      return (
        <>
        <div className="page_container--horizon">
        <div className="banner amdusiasBanner"></div>
          <h1 className="page_title">Amdusias</h1>
          <main id="amdusias"  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
          </main>
          <a className="showMore" href="/amdusiasTwo">Amdusias ver 2</a>
          <div className="page_description_content"><h5 className="page_desc_content_txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
            </h5></div>
        </div> 
        
        </>
      );
    }
    
    export default Amdusias;