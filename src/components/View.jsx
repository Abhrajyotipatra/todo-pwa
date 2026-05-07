import TodoItem from "./TodoItem";
import SkeletonLoader from "../skeleton/SkeletonLoader";

// Todo list component
const View = ({ todos, onToggle, onDelete, loading }) => {
  // Show skeleton while loading
  if (loading) {
    return <SkeletonLoader count={3} />;
  }

  // Empty state
  if (todos.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 0",
          color: "#2d2d4e",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "12px" }}>✓</div>
        <p style={{ fontSize: "14px" }}>No tasks yet — add one above!</p>
      </div>
    );
  }

  return (
    <div>
      {/* Section label */}
      <p
        style={{
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: ".08em",
          color: "#4a5568",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Pending Tasks
      </p>

      {/* Todo list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default View;