import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Progress from "./pages/Progress";
import Notifications from "./pages/Notifications";
import useTodo from "./hooks/useTodo";
import { getTodayKey, isThisWeek } from "./utils/dateHelper";

const App = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodo();
  const [activePage, setActivePage] = useState("dashboard");
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Simulate loading for skeleton
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Request notification permission
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Send hourly notification if tasks pending
  useEffect(() => {
    if (Notification.permission === "granted") {
      const interval = setInterval(() => {
        const remaining = todos.filter((t) => !t.isCompleted).length;
        if (remaining > 0) {
          new Notification("Todo Reminder!", {
            body: `You have ${remaining} tasks still pending!`,
            icon: "/icon-192.png",
          });
        }
      }, 60 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [todos]);

  // Calculate stats for dashboard and progress
  const todayKey = getTodayKey();
  const todayTotal = todos.filter((t) => t.createdAt === todayKey).length;
  const todayDone = todos.filter((t) => t.isCompleted && t.completedAt === todayKey).length;
  const weeklyTotal = todos.filter((t) => isThisWeek(t.createdAt)).length;
  const weeklyDone = todos.filter((t) => t.isCompleted && isThisWeek(t.completedAt)).length;
  const highTotal = todos.filter((t) => t.priority === "high").length;
  const highDone = todos.filter((t) => t.priority === "high" && t.isCompleted).length;

  const dailyPercent = todayTotal > 0 ? Math.round((todayDone / todayTotal) * 100) : 0;
  const weeklyPercent = weeklyTotal > 0 ? Math.round((weeklyDone / weeklyTotal) * 100) : 0;
  const highPercent = highTotal > 0 ? Math.round((highDone / highTotal) * 100) : 0;

  // Render active page
  const renderPage = () => {
    if (activePage === "dashboard")
      return (
        <Dashboard
          todos={todos}
          onAdd={addTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          loading={loading}
          isMobile={isMobile}
          todayDone={todayDone}
          todayTotal={todayTotal}
          weeklyDone={weeklyDone}
          weeklyTotal={weeklyTotal}
          highDone={highDone}
          highTotal={highTotal}
        />
      );

    if (activePage === "tasks")
      return (
        <Tasks
          todos={todos}
          onAdd={addTodo}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          loading={loading}
        />
      );

    if (activePage === "progress")
      return (
        <Progress
          todos={todos}
          dailyPercent={dailyPercent}
          weeklyPercent={weeklyPercent}
          highPercent={highPercent}
        />
      );

    if (activePage === "notifications")
      return <Notifications todos={todos} />;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        display: "flex",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Desktop sidebar */}
      {!isMobile && (
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
      )}

      {/* Main content */}
      <div
        style={{
          flex: 1,
          padding: isMobile ? "24px 16px 80px" : "32px",
          // maxWidth: isMobile ? "100%" : "760px",
            width: "100%",
          overflowY: "auto",
        }}
      >
        {renderPage()}
      </div>

      {/* Mobile bottom nav */}
      {isMobile && (
        <Sidebar
          activePage={activePage}
          onNavigate={setActivePage}
          isMobile={true}
        />
      )}
    </div>
  );
};

export default App;