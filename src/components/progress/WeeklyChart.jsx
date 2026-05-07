import { getWeekDays } from "../../utils/dateHelper";

// Weekly bar chart — shows completed tasks per day
const WeeklyChart = ({ todos }) => {
  const weekDays = getWeekDays();

  // Count completed todos for each day
  const chartData = weekDays.map((day) => {
    const count = todos.filter(
      (t) => t.isCompleted && t.completedAt === day.key
    ).length;
    return { ...day, count };
  });

  const maxCount = Math.max(...chartData.map((d) => d.count), 1);

  return (
    <div
      style={{
        background: "#16162a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "13px",
          fontWeight: "600",
          color: "#e2e8f0",
          marginBottom: "16px",
        }}
      >
        Weekly Task Chart
      </div>

      {/* Bars */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          height: "100px",
        }}
      >
        {chartData.map((day) => {
          const heightPercent = (day.count / maxCount) * 100;
          return (
            <div
              key={day.key}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                height: "100%",
                justifyContent: "flex-end",
              }}
            >
              {/* Count value */}
              <span style={{ fontSize: "10px", color: "#6b7280" }}>
                {day.count}
              </span>

              {/* Bar */}
              <div
                style={{
                  width: "100%",
                  height: `${Math.max(heightPercent, 4)}%`,
                  borderRadius: "4px 4px 0 0",
                  background:
                    heightPercent > 70
                      ? "linear-gradient(180deg, #8b5cf6, #ec4899)"
                      : "rgba(139,92,246,0.4)",
                  transition: "height 0.5s ease",
                }}
              />

              {/* Day label */}
              <span style={{ fontSize: "10px", color: "#4a5568" }}>
                {day.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyChart;