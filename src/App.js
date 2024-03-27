import React, { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [iframeWidth, setIframeWidth] = useState(100);

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleIframewidthChange = (event) => {
    setIframeWidth(event.target.value);
  };

  const handleLoadUrl = () => {
    const iframe = document.getElementById("iframe");
    iframe.src = url;
  };

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    iframe.src = url;
  }, [url]);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    const toStop = ["click", "mousemove", "keypress"];

    toStop.forEach((eventType) => {
      iframe.contentWindow.addEventListener(eventType, (event) => {
        event.stopPropagation();
      });
    });
  }, []);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    iframe.style.width = `${iframeWidth}%`;
  }, [iframeWidth]);

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Enter URL"
      />
      <button onClick={handleLoadUrl}>Load URL</button>
      <br />
      <input
        type="number"
        value={iframeWidth}
        onChange={handleIframewidthChange}
        placeholder="Enter Iframe Number"
      />
      <br />
      <iframe
        id="iframe"
        title="Loaded URL"
        style={{ width: `${iframeWidth}%`, height: "500px" }}
      />
    </div>
  );
}

export default App;
