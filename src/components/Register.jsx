import { useState } from 'react';
import { nanoid } from 'nanoid';

const Register = ({ todo, settodo }) => {
  const [title, setTitle]       = useState('');
  const [priority, setPriority] = useState('med');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id:          nanoid(),
      title:       title.trim(),
      isCompleted: false,
      priority,
    };

    settodo([newTodo, ...todo]);
    setTitle('');
    setPriority('med');
  };

  const total = todo.length;
  const done  = todo.filter(t => t.isCompleted).length;
  const left  = total - done;

  const pillStyle = (bg, color) => ({
    padding:      '4px 14px',
    borderRadius: '20px',
    fontSize:     '12px',
    fontWeight:   '600',
    background:   bg,
    color,
  });

  return (
    <div style={{ marginBottom: '32px' }}>

      {/* Header */}
      <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '16px', letterSpacing: '-0.5px' }}>
        Set{' '}
        <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Reminders
        </span>{' '}
        for Task
      </h1>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
        <span style={pillStyle('rgba(139,92,246,0.15)', '#a78bfa')}>{total} Total</span>
        <span style={pillStyle('rgba(16,185,129,0.15)',  '#34d399')}>{done} Done</span>
        <span style={pillStyle('rgba(239,68,68,0.12)',   '#f87171')}>{left} Left</span>
      </div>

      {/* Input form */}
      <form onSubmit={submitHandler}>
        <div
          className="input-box"
          style={{
            display:      'flex',
            gap:          '10px',
            background:   '#1a1a2e',
            border:       '1px solid rgba(139,92,246,0.25)',
            borderRadius: '14px',
            padding:      '6px 6px 6px 16px',
            marginBottom: '12px',
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex:        1,
              background:  'transparent',
              border:      'none',
              outline:     'none',
              color:       '#e2e8f0',
              fontSize:    '14px',
              fontFamily:  'inherit',
            }}
          />
          <button
            type="submit"
            className="btn-gradient"
            style={{
              border:       'none',
              borderRadius: '10px',
              padding:      '9px 20px',
              color:        '#fff',
              fontSize:     '13px',
              fontWeight:   '600',
              cursor:       'pointer',
              display:      'flex',
              alignItems:   'center',
              gap:          '6px',
            }}
          >
            + Add Task
          </button>
        </div>

        {/* Priority selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', color: '#4a5568', fontWeight: '600' }}>PRIORITY:</span>
          {[
            { val: 'high', label: 'High', bg: 'rgba(239,68,68,0.15)',   color: '#f87171' },
            { val: 'med',  label: 'Med',  bg: 'rgba(245,158,11,0.15)',  color: '#fbbf24' },
            { val: 'low',  label: 'Low',  bg: 'rgba(16,185,129,0.15)', color: '#34d399' },
          ].map(p => (
            <button
              key={p.val}
              type="button"
              onClick={() => setPriority(p.val)}
              style={{
                padding:      '4px 14px',
                borderRadius: '20px',
                fontSize:     '12px',
                fontWeight:   '600',
                background:   priority === p.val ? p.bg : 'transparent',
                color:        priority === p.val ? p.color : '#4a5568',
                border:       `1px solid ${priority === p.val ? p.color + '55' : 'rgba(255,255,255,0.06)'}`,
                cursor:       'pointer',
                transition:   'all 0.2s',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Register;