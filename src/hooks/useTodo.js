import { useState } from "react";
import { loadTodos, saveTodos } from "../utils/localStorage";
import { getTodayKey } from "../utils/dateHelper";
import { nanoid } from "nanoid";

const useTodo = () => {
  const [todos, setTodos] = useState(() => loadTodos());

  // Add a new todo
  const addTodo = (title, priority = "med") => {
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
      priority,
      createdAt: getTodayKey(),
      completedAt: null,
    };
    const updated = [newTodo, ...todos];
    setTodos(updated);
    saveTodos(updated);
  };

  // Delete a todo by id
  const deleteTodo = (id) => {
    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
    saveTodos(updated);
  };

  // Toggle complete/incomplete
  const toggleTodo = (id) => {
    const updated = todos.map((t) =>
      t.id === id
        ? {
            ...t,
            isCompleted: !t.isCompleted,
            completedAt: !t.isCompleted ? getTodayKey() : null,
          }
        : t
    );
    setTodos(updated);
    saveTodos(updated);
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};

export default useTodo;