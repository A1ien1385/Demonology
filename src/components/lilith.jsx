import { useState } from "react";

function Lilith(props) {
    const [isActive, setActive] = useState(false);
    function toggleClass()
    {
     setActive(!isActive);
    };
  
      return (
        <>
        <div className="page_container--horizon">
          <div className="banner lilithBanner"></div>
          <h1 className="page_title">Lilith</h1>
          <main id="lilith"  onClick={toggleClass} className={isActive ? 'activeArt' : null}>
          </main>
          <a className="showMore" href="/lilithTwo">Lilith art 2</a>
          <a className="showMore" href="/succubus">Succubus art 3</a>
          <a className="showMore" href="/succubusTwo">Succubus art 4</a>
          <a className="showMore" href="/succubusThree">Succubus art 5</a>
          <div className="page_description_content"><h5 className="page_desc_content_txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero placeat voluptas aliquid explicabo id debitis similique officiis quod architecto suscipit. Expedita animi saepe aspernatur et autem earum quis dolore adipisci!
            </h5></div>
            <div className="prevNextBox">
            <a className="prevNext" href="/praeambulum">prev</a>
            <a className="prevNext" href="/lucifer">next</a>
               </div>
        </div> 
        
        </>
      );
    }
    
    export default Lilith;