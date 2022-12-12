import "./App.css";
import Header from "./Components/Header";
import Node from "./Components/Articles/Node";
import JSONart from "./Components/Articles/JSON";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Backend</h1>
      <button type="button" className="btn btn-primary">
        Send
      </button>
      <Node />
    </div>
  );
}

export default App;
