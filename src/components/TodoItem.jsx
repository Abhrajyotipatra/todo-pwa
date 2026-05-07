// Single todo item component
const PRIORITY_MAP = {
  high: { bg: "rgba(239,68,68,0.15)", color: "#f87171", label: "High" },
  med:  { bg: "rgba(245,158,11,0.15)", color: "#fbbf24", label: "Med" },
  low:  { bg: "rgba(16,185,129,0.15)", color: "#34d399", label: "Low" },
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const p = PRIORITY_MAP[todo.priority] || PRIORITY_MAP.med;

  return (
    <div
      className={`todo-card fade-slide-in ${todo.isCompleted ? "done-item" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: todo.isCompleted ? "#111120" : "#16162a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "13px 14px",
        opacity: todo.isCompleted ? 0.55 : 1,
      }}
    >
      {/* Check button */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label="Toggle complete"
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          border: todo.isCompleted ? "none" : "2px solid rgba(139,92,246,0.4)",
          background: todo.isCompleted
            ? "linear-gradient(135deg, #8b5cf6, #ec4899)"
            : "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#fff",
          fontSize: "11px",
        }}
      >
        {todo.isCompleted && "✓"}
      </button>

      {/* Title */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <span
          style={{
            fontSize: "14px",
            color: todo.isCompleted ? "#4a5568" : "#e2e8f0",
            fontWeight: "500",
            position: "relative",
            display: "inline-block",
            transition: "color 0.2s",
          }}
        >
          {todo.title}
          <span className="strike-line" />
        </span>
      </div>

      {/* Priority badge */}
      <span
        style={{
          fontSize: "10px",
          fontWeight: "700",
          padding: "2px 8px",
          borderRadius: "8px",
          background: p.bg,
          color: p.color,
          flexShrink: 0,
        }}
      >
        {p.label}
      </span>

      {/* Delete button */}
      <button
        onClick={() => onDelete(todo.id)}
        className="del-btn"
        aria-label="Delete task"
        style={{
          background: "transparent",
          border: "none",
          color: "#4a5568",
          cursor: "pointer",
          padding: "4px 6px",
          borderRadius: "6px",
          fontSize: "16px",
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;