import Register from './components/Register';
import View from './components/View';
import { useState } from 'react';

const App = () => {

  const [todo, settodo] = useState(() => {
    const saved = localStorage.getItem('todos');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, title: 'Learn React',       isCompleted: false, priority: 'high' },
      { id: 2, title: 'Learn Redux',        isCompleted: false, priority: 'med'  },
      { id: 3, title: 'Build a Todo App',   isCompleted: true,  priority: 'low'  },
    ];
  });

  const updateTodo = (newTodo) => {
    settodo(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f1a', padding: '40px 24px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <Register todo={todo} settodo={updateTodo} />
        <View todo={todo} settodo={updateTodo} />
      </div>
    </div>
  );
};

export default App;