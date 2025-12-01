import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import HistoryList from "./components/HistoryList";
import "./App.css";

function App() {
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveVersion = async (text) => {
    try {
      const res = await fetch("http://localhost:4000/save-version", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Failed to save version");
      const data = await res.json();
      setVersions(data);
    } catch (err) {
      setError("Error saving version. Please try again.");
    }
  };

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const res = await fetch("http://localhost:4000/versions");
        if (!res.ok) throw new Error("Failed to fetch versions");
        const data = await res.json();
        setVersions(data);
      } catch (err) {
        setError("Error loading history. Please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchVersions();
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Mini Audit Trail Generator</h1>
      </header>

      {}
      <main className="main-grid">
        <Editor onSave={saveVersion} />
        {loading ? (
          <p className="loading">Loading history...</p>
        ) : (
          <HistoryList versions={versions} />
        )}
      </main>

      {error && <p className="error">{error}</p>}

      <footer className="footer">
        Built by Priti ·{" "}
        <a
          href="https://github.com/pritisingh19"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;