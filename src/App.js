import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&from=2022-04-08&to=2022-04-08?country=us";
  const options = {
    headers: {
      "X-API-Key": "7707bb33d2e24ed1b60961fc6131a778",
    },
  };

  axios
    .get(url, options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
