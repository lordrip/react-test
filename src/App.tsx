import { useState } from "react";
import "./App.css";
import { SlowComponent } from "./components/SlowComponent";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        title="Write your name"
        placeholder="e.g. Kylo Ren"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <SlowComponent />
    </>
  );
}

export default App;
