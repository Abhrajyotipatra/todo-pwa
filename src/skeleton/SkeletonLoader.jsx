// Skeleton loader — shows while content is loading
const SkeletonLoader = ({ count = 3 }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: "52px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #16162a 25%, #1e1e35 50%, #16162a 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;