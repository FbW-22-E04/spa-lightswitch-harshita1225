import { useState } from "react";
import "./Room.css";

export default function Room() {
  const [lightOn, setLightOn] = useState(true);

  const lightHandler = () => {
    setLightOn(!lightOn);
    //console.log("clicked");
  };
  return (
    <div className={lightOn ? "room lit" : "room dark"}>
      <button onClick={lightHandler}>{lightOn ? "ON" : "OFF"}</button>
      {lightOn ? <p>The Room is Lit</p> : <p>The Room is Dark</p>}
    </div>
  );
}
