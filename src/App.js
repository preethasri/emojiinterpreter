import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😴": "sleeping face",
  "😏": "smirking face",
  "🤩": "star struck",
  "🤓": "nerd face",
  "🤪": "zany face",
  "😌": "relieved face"
};

const emojipedia = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("the name will appear here");
  function inputchangeHandler(event) {
    const emojiInput = event.target.value;
    setMeaning(emojiInput);

    if (emojiInput in emojiDictionary) {
      setMeaning(emojiDictionary[emojiInput]);
    } else {
      setMeaning("Failure to reconize this!!");
    }
  }
  function emojiclickHandler(emojiInput) {
    setMeaning(emojiDictionary[emojiInput]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={inputchangeHandler}
        placeholder={"put an emoji to know the meaning of it"}
        style={{
          padding: "1rem"
        }}
      />
      <div>{emoji}</div>
      <h3>{meaning}</h3>
      {emojipedia.map((emoji) => (
        <span
          onClick={() => emojiclickHandler(emoji)}
          style={{ padding: "1rem", cursor: "pointer", fontSize: "1rem" }}
        >
          {""}
          {emoji}
          {""}
        </span>
      ))}
    </div>
  );
}
