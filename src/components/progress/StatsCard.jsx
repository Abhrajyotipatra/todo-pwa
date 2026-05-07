// Single stat card component — shows a number with label
const StatsCard = ({ label, value, subLabel, color }) => {
  return (
    <div
      style={{
        background: "#16162a",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "#4a5568",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: ".06em",
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: color || "#a78bfa",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "#4a5568",
          marginTop: "4px",
        }}
      >
        {subLabel}
      </div>
    </div>
  );
};

export default StatsCard;