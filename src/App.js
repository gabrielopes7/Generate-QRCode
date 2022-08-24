import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {

  const [link, setLink] = useState("");


  function handleURL(event){
    setLink(event.target.value);
  }

  return (
    <div>
      <header id="header">
        <h1>Gerador de QRCode</h1>
      </header>
      <main className="container">
        <QRCode value={link}></QRCode>

        <input
          placeholder="Digite sua URL"
          className="inputURL"
          value={link}
          onChange={(event) => handleURL(event)}
        ></input>
      </main>
    </div>
  );
}

export default App;
