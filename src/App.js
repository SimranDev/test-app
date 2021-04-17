import "./App.css";
import { useEffect } from "react";

function App() {
  const memory = navigator.deviceMemory;
  const geo = navigator.geolocation.getCurrentPosition;
  var ua = navigator.userAgent;

  useEffect(() => {
    console.log(geo);
  });

  return (
    <div className="App" id="fb-root">
      <div>
        <h2>Memory: {memory * 2}</h2>
        <h2>{ua}</h2>
      </div>
    </div>
  );
}

export default App;
