import React from "react";

export default function HistoryList({ versions }) {
  return (
    <div className="history card">
      <h3>Version History</h3>
      {versions.length === 0 ? (
        <p className="empty">No versions saved yet.</p>
      ) : (
        <ul>
          {versions.map((v) => (
            <li key={v.id} className="history-card">
              <div className="timestamp">{v.timestamp}</div>
              <div>
                <span className="label">Added:</span>{" "}
                <span className="added">{v.addedWords.join(", ") || "None"}</span>
              </div>
              <div>
                <span className="label">Removed:</span>{" "}
                <span className="removed">{v.removedWords.join(", ") || "None"}</span>
              </div>
              <div className="length">
                <span className="label">Length:</span> {v.oldLength} → {v.newLength}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}