import { useState } from "react";

function Lucifer(props) {
    const [isActive, setActive] = useState(false);
    function toggleClass()
    {
     setActive(!isActive);
    };
  
      return (
        <>
        <div className="page_container--horizon">
        <div className="banner luciferBanner"></div>
          <h1 className="page_title">Lucifer</h1>
          <main id="lucifer"  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
          </main>
          <a className="showMore" href="/luciferTwo">Lucifer art 2</a>
          <a className="showMore" href="/luciferThree">Lucifer art 3</a>
          <a className="showMore" href="/luciferFour">Lucifer art 4</a>
          <a className="showMore" href="/luciferFive">Lucifer art 5</a>
          <div className="page_description_content"><h5 className="page_desc_content_txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
            </h5></div>
        </div> 
        
        </>
      );
    }
    
    export default Lucifer;