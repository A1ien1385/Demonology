import React, {useRef, useEffect} from "react";
import { ReactComponent as Scene } from "./assets/BackgroundPage.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Gui() {
  const wrapper = useRef(null);

  useEffect(()=> {
    
      
      
  })

  return (
    <>
      <div ref={wrapper} className="background">
        <Scene/>
      </div>

    </>
  );
}