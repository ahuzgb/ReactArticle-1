import "./App.css";
import Header from "./Components/Header";

import ApiArticle from "./Components/Header/Api-article";

import Node from "./Components/Articles/Node";
import JSONart from "./Components/Articles/JSON";


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Backend</h1>

      <ApiArticle />

      <button type="button" className="btn btn-primary">
        Send
      </button>
      <Node />

    </div>
  );
}

export default App;
