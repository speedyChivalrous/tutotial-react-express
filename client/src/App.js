import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({ message: "" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/restapi")
      .then((response) => response.text())
      .then((item) => setData(item))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <hr />
      <h1>{data.message ? data.message : "Loading"}</h1>
    </div>
  );
}

export default App;
