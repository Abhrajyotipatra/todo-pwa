const TODOS_KEY = "todos";

// Load todos from localStorage
export const loadTodos = () => {
  const saved = localStorage.getItem(TODOS_KEY);
  return saved ? JSON.parse(saved) : [];
};

// Save todos to localStorage
export const saveTodos = (todos) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

// Clear all todos from localStorage
export const clearTodos = () => {
  localStorage.removeItem(TODOS_KEY);
};