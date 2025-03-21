import React, { useState } from "react";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [inputText, setInputText] = useState("");

  const addEntry = () => {
    if (inputText.trim() !== "") {
      const newEntry = {
        id: Date.now(),
        text: inputText,
      };
      setEntries([...entries, newEntry]);
      setInputText("");
    }
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="App">
      <h1>Random - Journal</h1>
      <div className="journal-form">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholde="Write your journal entry here..."
        />
      </div>
    </div>
  );
}

export default App;
