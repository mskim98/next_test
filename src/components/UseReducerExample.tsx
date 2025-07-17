'use client';

import { useReducer, useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'REMOVE'; payload: number };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD', payload: input });
      setInput('');
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="할 일 입력"
          className="border px-3 py-2 w-full"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          추가
        </button>
      </div>
      <ul className="list-disc pl-5 text-gray-700">
        {todos.map(todo => (
          <li key={todo.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{todo.text}</span>
              <button
                className="text-red-500 hover:text-red-700 text-sm ml-2"
                onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 