import Register from "../components/Register";
import View from "../components/View";

// Tasks page — add and view all tasks
const Tasks = ({ todos, onAdd, onToggle, onDelete, loading }) => {
  return (
    <div>
      {/* Header */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "700",
          color: "#fff",
          marginBottom: "20px",
        }}
      >
        My Tasks
      </h2>

      {/* Add task */}
      <Register onAdd={onAdd} />

      {/* Todo list */}
      <View
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        loading={loading}
      />
    </div>
  );
};

export default Tasks;