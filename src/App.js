import "./App.css";
import { useEffect } from "react";
import { version } from "react-dom";

function App() {
  var OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
  if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";

  const memory = navigator.deviceMemory;
  const geo = navigator.geolocation.getCurrentPosition;

  const osRegEx = /(?<=\()(.*?)(?=\;)/;
  const osTypeRegEx = /(?<=\;)(.*?)(?=\))/;
  const edgeVRegEx = /(?<=Edg\/)(.*?)(?=\.)/;
  const chromeVRegEx = /(?<=Chrome\/)(.*?)(?=\s)/;

  var ua = navigator.userAgent;

  let browserName = "Unknown";
  let versionMatched = "version";

  if (ua.includes("Edg")) {
    browserName = "Edge";
    versionMatched = edgeVRegEx.exec(ua)[0];
  } else if (ua.includes("Chrome") && !ua.includes("Edg")) {
    browserName = "Chrome";
    versionMatched = chromeVRegEx.exec(ua)[0];
  }

  const osMatched = osRegEx.exec(ua)[0];
  const osTypeMatched = osTypeRegEx.exec(ua)[0];

  return (
    <div className="App">
      <div>
        <h2>Memory: {memory * 2}</h2>
        <h1>{ua}</h1>
        <h2>OS: {osMatched}</h2>
        <h2>OS Type: {osTypeMatched}</h2>
        <h2>Browser: {browserName}</h2>
        <h2>Version: {versionMatched}</h2>
      </div>
    </div>
  );
}

export default App;
