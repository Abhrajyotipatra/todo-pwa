// Single progress bar component
const ProgressBar = ({ label, percent, color }) => {
  return (
    <div style={{ marginBottom: "12px" }}>
      {/* Label and percentage */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#6b7280",
          marginBottom: "6px",
        }}
      >
        <span>{label}</span>
        <span style={{ color: color }}>{percent}%</span>
      </div>

      {/* Track */}
      <div
        style={{
          height: "8px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {/* Fill */}
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: color,
            borderRadius: "4px",
            transition: "width 0.5s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;