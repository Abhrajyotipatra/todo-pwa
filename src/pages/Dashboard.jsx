import Register from "../components/Register";
import View from "../components/View";
import StatsCard from "../components/progress/StatsCard";

// Dashboard page — main page with stats and todo list
const Dashboard = ({
  todos,
  onAdd,
  onToggle,
  onDelete,
  loading,
  isMobile,
  todayDone,
  todayTotal,
  weeklyDone,
  weeklyTotal,
  highDone,
  highTotal,
}) => {
  return (
    <div>
      {/* Header */}
      <h1
        style={{
          fontSize: isMobile ? "22px" : "28px",
          fontWeight: "700",
          color: "#fff",
          marginBottom: "20px",
          letterSpacing: "-0.5px",
        }}
      >
        Set{" "}
        <span
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Reminders
        </span>{" "}
        for Task
      </h1>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <StatsCard
          label="Today"
          value={`${todayDone}/${todayTotal}`}
          subLabel="tasks done"
          color="#a78bfa"
        />
        <StatsCard
          label="This week"
          value={`${weeklyDone}/${weeklyTotal}`}
          subLabel="tasks done"
          color="#34d399"
        />
        <StatsCard
          label="High priority"
          value={`${highDone}/${highTotal}`}
          subLabel="tasks done"
          color="#f87171"
        />
      </div>

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

export default Dashboard;