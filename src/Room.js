import { useState } from "react";
import "./Room.css";

export default function Room() {
  const [lightOn, setLightOn] = useState(true);

  const lightHandler = () => {
    setLightOn(!lightOn);
    //console.log("clicked");
  };
  return (
    <div className={lightOn ? "lit" : "dark"}>
      <button onClick={lightHandler}>LightSwitch</button>
      {lightOn ? <p>The Room is Lit</p> : <p>The Room is Dark</p>}
    </div>
  );
}
