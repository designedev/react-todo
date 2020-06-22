import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const arr = [];
  for (let i = 1; i <= 80000; i += 1) {
    arr.push ({
      id: i,
      text: `TODO NO.${i}`,
      checked: false,
    });
  }
  return arr;
}

const App = () => {

  const [todos, setTodos] = useState(createBulkTodos)
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: 'first todo',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'sedond todo',
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: 'third todo',
  //     checked: false,
  //   },
  //   {
  //     id: 4,
  //     text: 'extra todo',
  //     checked: true,
  //   },
  // ]);

  const nextId = useRef(80001);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, [])

  const onCheck = useCallback(id => {
    setTodos(todos =>
      todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked} : todo
    ));
  }, [])

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