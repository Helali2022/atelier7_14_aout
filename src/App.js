//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Badge from "./components/Badge.js";
function App() {
  const [Personne, setPersonne] = useState({
    name: "Miloud",
    age: 40,
    prof: "enseignant",
    photo: "./images/ma_photo.jpg",
  });
  const [Show, setShow] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <>
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </>
        <h1>{Personne.name}</h1>
        <h1>{Personne.age}</h1>
        <h1>{Personne.prof}</h1>
        <img src={Personne.photo} alt="jhjhghj" width="20" height="20"></img>
      </header>

      {Show ? <Badge att={Personne} /> : null}

      <button onClick={() => setShow(!Show)}> cliquer ici</button>
    </div>
  );
}

export default App;
