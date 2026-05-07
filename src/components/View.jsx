const PRIORITY_MAP = {
  high: { bg: 'rgba(239,68,68,0.15)',   color: '#f87171', label: 'High' },
  med:  { bg: 'rgba(245,158,11,0.15)',  color: '#fbbf24', label: 'Med'  },
  low:  { bg: 'rgba(16,185,129,0.15)', color: '#34d399', label: 'Low'  },
};

const View = ({ todo, settodo }) => {

  const toggleDone = (id) => {
    settodo(todo.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  const deleteHandler = (id) => {
    settodo(todo.filter(t => t.id !== id));
  };

  if (todo.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: '#2d2d4e' }}>
        <div style={{ fontSize: '40px', marginBottom: '12px' }}>✓</div>
        <p style={{ fontSize: '14px' }}>No tasks yet — add one above!</p>
      </div>
    );
  }

  return (
    <div>
      <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '.08em', color: '#4a5568', textTransform: 'uppercase', marginBottom: '12px' }}>
        Pending Tasks
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {todo.map((t, i) => {
          const p = PRIORITY_MAP[t.priority] || PRIORITY_MAP.med;
          return (
            <div
              key={t.id}
              className={`todo-card fade-slide-in ${t.isCompleted ? 'done-item' : ''}`}
              style={{
                display:       'flex',
                alignItems:    'center',
                gap:           '12px',
                background:    t.isCompleted ? '#111120' : '#16162a',
                border:        '1px solid rgba(255,255,255,0.06)',
                borderRadius:  '12px',
                padding:       '13px 14px',
                opacity:       t.isCompleted ? 0.55 : 1,
                animationDelay: `${i * 0.04}s`,
              }}
            >
              {/* Check button */}
              <button
                onClick={() => toggleDone(t.id)}
                className="check-circle"
                aria-label="Toggle complete"
                style={{
                  width:        '22px',
                  height:       '22px',
                  borderRadius: '50%',
                  border:       t.isCompleted ? 'none' : '2px solid rgba(139,92,246,0.4)',
                  background:   t.isCompleted
                    ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
                    : 'transparent',
                  cursor:      'pointer',
                  display:     'flex',
                  alignItems:  'center',
                  justifyContent: 'center',
                  flexShrink:  0,
                  color:       '#fff',
                  fontSize:    '11px',
                }}
              >
                {t.isCompleted && '✓'}
              </button>

              {/* Title with strikethrough */}
              <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                <span
                  style={{
                    fontSize:   '14px',
                    color:      t.isCompleted ? '#4a5568' : '#e2e8f0',
                    fontWeight: '500',
                    position:   'relative',
                    display:    'inline-block',
                    transition: 'color 0.2s',
                  }}
                >
                  {t.title}
                  <span className="strike-line" />
                </span>
              </div>

              {/* Priority badge */}
              <span style={{
                fontSize:     '10px',
                fontWeight:   '700',
                padding:      '2px 8px',
                borderRadius: '8px',
                background:   p.bg,
                color:        p.color,
                flexShrink:   0,
              }}>
                {p.label}
              </span>

              {/* Delete button */}
              <button
                onClick={() => deleteHandler(t.id)}
                className="del-btn"
                aria-label="Delete task"
                style={{
                  background:   'transparent',
                  border:       'none',
                  color:        '#4a5568',
                  cursor:       'pointer',
                  padding:      '4px 6px',
                  borderRadius: '6px',
                  fontSize:     '16px',
                  flexShrink:   0,
                }}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;