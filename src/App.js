import React, { useState, useEffect } from "react";

function App() {
  const [url, setUrl] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const handleLoadUrl = () => {
    // You might want to do some validation on the URL here
    const iframe = document.getElementById("iframe");
    iframe.src = url;
  };

  useEffect(() => {
    // Ensure DOM is fully loaded before accessing elements
    const iframe = document.getElementById("iframe");
    iframe.src = url;
  }, [url]); // Empty dependency array ensures this effect runs only once after initial render

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
      <iframe
        id="iframe"
        title="Loaded URL"
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}

export default App;
