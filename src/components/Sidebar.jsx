const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "ti-layout-dashboard" },
  { id: "tasks", label: "My Tasks", icon: "ti-checklist" },
  { id: "progress", label: "Progress", icon: "ti-chart-bar" },
  { id: "notifications", label: "Notifications", icon: "ti-bell" },
];

const Sidebar = ({ activePage, onNavigate, isMobile }) => {
  // Mobile — bottom navigation bar
  if (isMobile) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#12121f",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0 16px",
          zIndex: 100,
        }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: activePage === item.id ? "#a78bfa" : "#6b7280",
              fontSize: "11px",
              fontWeight: "700",
              padding: "4px 16px",
              borderTop: activePage === item.id
                ? "2px solid #a78bfa"
                : "2px solid transparent",
              transition: "all 0.2s",
            }}
          >
            <i
              className={`ti ${item.icon}`}
              style={{ fontSize: "22px" }}
              aria-hidden="true"
            />
            {item.label}
          </button>
        ))}
      </div>
    );
  }

  // Desktop — left sidebar
  return (
    <div
      style={{
        width: "220px",
        background: "#12121f",
        borderRight: "1px solid rgba(255,255,255,0.08)",
        padding: "28px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flexShrink: 0,
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "800",
          color: "#fff",
          marginBottom: "32px",
          paddingLeft: "12px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Todo
        </span>{" "}
        App
      </div>

      {/* Nav items */}
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "11px 14px",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: activePage === item.id ? "700" : "600",
            cursor: "pointer",
            color: activePage === item.id ? "#a78bfa" : "#9ca3af",
            background: activePage === item.id
              ? "rgba(139,92,246,0.15)"
              : "transparent",
            border: "none",
            width: "100%",
            textAlign: "left",
            transition: "all 0.2s",
          }}
        >
          <i
            className={`ti ${item.icon}`}
            style={{
              fontSize: "20px",
              color: activePage === item.id ? "#a78bfa" : "#9ca3af",
            }}
            aria-hidden="true"
          />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;