import { useState } from "react";

// Task input form component
const Register = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("med");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, priority);
    setTitle("");
    setPriority("med");
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <form onSubmit={submitHandler}>
        {/* Input box */}
        <div
          className="input-box"
          style={{
            display: "flex",
            gap: "10px",
            background: "#1a1a2e",
            border: "1px solid rgba(139,92,246,0.25)",
            borderRadius: "14px",
            padding: "6px 6px 6px 16px",
            marginBottom: "12px",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#e2e8f0",
              fontSize: "14px",
              fontFamily: "inherit",
            }}
          />
          <button
            type="submit"
            className="btn-gradient"
            style={{
              border: "none",
              borderRadius: "10px",
              padding: "9px 20px",
              color: "#fff",
              fontSize: "13px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            + Add Task
          </button>
        </div>

        {/* Priority selector */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "12px",
              color: "#4a5568",
              fontWeight: "600",
            }}
          >
            PRIORITY:
          </span>
          {[
            { val: "high", label: "High", bg: "rgba(239,68,68,0.15)", color: "#f87171" },
            { val: "med",  label: "Med",  bg: "rgba(245,158,11,0.15)", color: "#fbbf24" },
            { val: "low",  label: "Low",  bg: "rgba(16,185,129,0.15)", color: "#34d399" },
          ].map((p) => (
            <button
              key={p.val}
              type="button"
              onClick={() => setPriority(p.val)}
              style={{
                padding: "4px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "600",
                background: priority === p.val ? p.bg : "transparent",
                color: priority === p.val ? p.color : "#4a5568",
                border: `1px solid ${priority === p.val ? p.color + "55" : "rgba(255,255,255,0.06)"}`,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Register;