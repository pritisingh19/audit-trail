const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();


app.use(cors({
  origin: "https://audit-trail-h7t7va920-flobits-projects-1520648e.vercel.app"
}));

app.use(express.json());

let versions = [];
let lastText = "";

app.post("/save-version", (req, res) => {
  const { text } = req.body;
  const oldWords = lastText.split(/\s+/).filter(Boolean);
  const newWords = text.split(/\s+/).filter(Boolean);

  const added = newWords.filter((w) => !oldWords.includes(w));
  const removed = oldWords.filter((w) => !newWords.includes(w));

  const entry = {
    id: uuidv4(),
    timestamp: new Date().toLocaleString(),
    addedWords: added,
    removedWords: removed,
    oldLength: lastText.length,
    newLength: text.length,
  };

  versions.push(entry);
  lastText = text;

  res.json(versions);
});

app.get("/versions", (req, res) => {
  res.json(versions);
});

app.listen(4000, () => console.log("Backend running on port 4000"));