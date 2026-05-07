export const getTodayKey = () => {
  return new Date().toISOString().split("T")[0];
};

// Get the start of current week (Monday)
export const getWeekStartKey = () => {
  const today = new Date();
  const day = today.getDay(); // 0=Sun, 1=Mon...
  const diff = day === 0 ? 6 : day - 1; // adjust so Monday=0, Sunday=6
  const monday = new Date(today);
  monday.setDate(today.getDate() - diff);
  return monday.toISOString().split("T")[0];
};

// Check if a date string is today
export const isToday = (dateStr) => {
  return dateStr === getTodayKey();
};

// Check if a date string is within this week
export const isThisWeek = (dateStr) => {
  return dateStr >= getWeekStartKey() && dateStr <= getTodayKey();
};

// Get all 7 days of current week as array ["Mon", "Tue", etc]
export const getWeekDays = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? 6 : day - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - diff);

  return days.map((label, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return {
      label,
      key: date.toISOString().split("T")[0],
    };
  });
};