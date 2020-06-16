import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'first todo',
      checked: true,
    },
    {
      id: 2,
      text: 'sedond todo',
      checked: false,
    },
    {
      id: 3,
      text: 'third todo',
      checked: false,
    },
    {
      id: 4,
      text: 'extra todo',
      checked: true,
    },
  ]);

  const nextId = useRef(5);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos])

  const onCheck = useCallback(id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked} : todo
    ));
  })

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
      </TodoTemplate>
    </div>
  );
};

export default App;