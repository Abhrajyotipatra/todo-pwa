import ProgressBar from "../components/progress/ProgressBar";
import WeeklyChart from "../components/progress/WeeklyChart";

// Progress page — shows progress bars and weekly chart
const Progress = ({
  todos,
  dailyPercent,
  weeklyPercent,
  highPercent,
}) => {
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
        Progress
      </h2>

      {/* Progress bars */}
      <div
        style={{
          background: "#16162a",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            fontWeight: "600",
            color: "#e2e8f0",
            marginBottom: "14px",
          }}
        >
          Progress Overview
        </div>

        <ProgressBar
          label="Daily Progress"
          percent={dailyPercent}
          color="linear-gradient(90deg, #8b5cf6, #ec4899)"
        />
        <ProgressBar
          label="Weekly Progress"
          percent={weeklyPercent}
          color="linear-gradient(90deg, #10b981, #34d399)"
        />
        <ProgressBar
          label="High Priority Done"
          percent={highPercent}
          color="linear-gradient(90deg, #ef4444, #f87171)"
        />
      </div>

      {/* Weekly bar chart */}
      <WeeklyChart todos={todos} />
    </div>
  );
};

export default Progress;