// Notifications page — shows notification status
const Notifications = ({ todos }) => {
  const pending = todos.filter((t) => !t.isCompleted).length;

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
        Notifications
      </h2>

      {/* Status card */}
      <div
        style={{
          background: "#16162a",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#e2e8f0",
            marginBottom: "8px",
          }}
        >
          Reminder Status
        </div>
        <div style={{ fontSize: "13px", color: "#6b7280" }}>
          {pending > 0
            ? `You have ${pending} pending tasks. Hourly reminders are active.`
            : "All tasks completed! No reminders needed."}
        </div>
      </div>

      {/* Notification permission status */}
      <div
        style={{
          background: "#16162a",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#e2e8f0",
            marginBottom: "8px",
          }}
        >
          Permission
        </div>
        <div
          style={{
            fontSize: "13px",
            color:
              Notification.permission === "granted" ? "#34d399" : "#f87171",
          }}
        >
          {Notification.permission === "granted"
            ? "Notifications are allowed."
            : "Notifications are blocked. Please allow from browser settings."}
        </div>
      </div>
    </div>
  );
};

export default Notifications;