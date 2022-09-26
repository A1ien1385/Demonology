import React, {useRef, useEffect} from "react";
import Gui from "./gui";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";
import "./style/main.scss";

function App() {
  return (
    <div className="App">
      <Gui />
    </div>
  );
}

export default App;
