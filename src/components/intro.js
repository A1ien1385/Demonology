import React, {useRef, useEffect} from "react";
import { ReactComponent as Scene } from "../assets/BackgroundPage.svg";
import gsap from "gsap";


export default function Intro() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    // const UpperRunes = elements.getElementById('otherRUnes');
    // const DownRunes = elements.getElementById('otherRunes2');
    const pentagram = elements.getElementById('pentagram');
    const circles = elements.getElementById('Pengtagram_x5F_circle');
    const title = elements.getElementById('title_2_');
    const eyes = elements.getElementById('eyes');
    
    
    // gsap.set([UpperRunes, pentagram], {autoAlpha: .3, ease: "power3.inout"});
    gsap.set(eyes, {autoAlpha: 0});
    gsap.set([title], {autoAlpha: .1, x: -550, ease: "power3.inout"});
    // gsap.set([UpperRunes], {autoAlpha: .1, x: 550, ease: "power3.inout"});
    

    // gsap.to(UpperRunes, {duration: 2, ease: "power1.out", repeat: -1, yoyo: true, autoAlpha: 1});
    // gsap.to(UpperRunes, {duration: 1.7, x: 0});
    gsap.to(eyes, {duration: 2, ease: "power1.out", repeat: -1, yoyo: true, autoAlpha: 1});
    // gsap.to(DownRunes, {duration: 1.7, x: 0});
    gsap.to(pentagram, {duration: 2, ease: "power1.out", repeat: -1, yoyo: true, autoAlpha: 1});
    gsap.to(circles, {duration: 15, ease: "none", rotate: 360, transformOrigin: "center", repeat: -1});
    gsap.to(title, {duration: 1.7, x: -20});
    gsap.to(title, {duration: 2, autoAlpha: 1, repeat: -1, yoyo: true})

   
      
  })

  return (
    <>
      <div ref={wrapper} className="background">
        <Scene/>
        <div className="prevNextBox">
            <a className="prevNext introBtn" href="/praeambulum">next page</a>
        </div>
      </div>

    </>
  );
}