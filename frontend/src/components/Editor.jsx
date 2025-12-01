import React, { useState } from "react";

export default function Editor({ onSave }) {
  const [text, setText] = useState("");

  return (
    <div className="editor card">
      <h3>Content Editor</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your content here..."
      />
      <button onClick={() => onSave(text)}>Save Version</button>
    </div>
  );
}