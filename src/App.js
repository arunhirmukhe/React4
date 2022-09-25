import "./styles.css";
import { useState } from "react";
export default function App() {
  const [fontHeight, setFontsize] = useState("2rem");
  const changeSize = (size) => setFontsize((_fontSize) => size);

  return (
    <div className="App">
      <button onClick={() => changeSize("5rem")}>h1</button>
      <button onClick={() => changeSize("3rem")}>h2</button>
      <button onClick={() => changeSize("1rem")}>h3</button>
      <p style={{ fontSize: fontHeight }}>Hi,we are learing useState</p>
    </div>
  );
}
