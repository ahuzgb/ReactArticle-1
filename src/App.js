import "./App.css";
import Header from "./Components/Header";
import JSONart from "./Components/Header/JSON";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Backend</h1>
      <JSONart />
      <button type="button" className="btn btn-primary">
        Send
      </button>
    </div>
  );
}

export default App;
