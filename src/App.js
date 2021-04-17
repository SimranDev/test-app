import "./App.css";

function App() {
  const memory = navigator.deviceMemory;

  return (
    <div className="App" id="fb-root">
      <div>
        <h2>Memory: {memory * 2}</h2>
      </div>
    </div>
  );
}

export default App;
