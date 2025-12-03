const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();

// ✅ Whitelist all allowed frontend origins
const allowedOrigins = [
  "http://localhost:3000", 
  "https://audit-trail-wsye.onrender.com", // Render frontend (if used)
  "https://audit-trail-2hgndxa58-flobits-projects-1520648e.vercel.app" // Vercel frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// Root route for health check
app.get("/", (req, res) => {
  res.send("API is running");
});

let versions = [];
let lastText = "";

// Save a new version
app.post("/save-version", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

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

// Get all versions
app.get("/versions", (req, res) => {
  res.json(versions);
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));