import React, {useRef, useEffect} from "react";
import { ReactComponent as Scene } from "./assets/BackgroundPage.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Gui() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    const UpperRunes = elements.getElementById('otherRUnes');
    const DownRunes = elements.getElementById('otherRunes2');
    const pentagram = elements.getElementById('pentagram');
    
    
    gsap.set([DownRunes, UpperRunes], {autoAlpha: .3, ease: "power3.inout"});
    gsap.set([pentagram], {y: -20, scale: .9});

    gsap.to(UpperRunes, {duration: 2, ease: "power1.out", repeat: -1, yoyo: true, autoAlpha: 1});
    gsap.to(DownRunes, {duration: 2, ease: "power1.out", repeat: -1, yoyo: true, autoAlpha: 1});
    gsap.to(pentagram, {rotate: 360, ease: "none", transformOrigin:"center", repeat: -1, duration: 7,});
      
  })

  return (
    <>
      <div ref={wrapper} className="background">
        <Scene/>
      </div>

    </>
  );
}