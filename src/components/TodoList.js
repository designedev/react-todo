import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss'
const TodoList = ({todos, onRemove, onCheck}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onCheck={onCheck}/>
      ))}
    </div>
  );
};

export default TodoList;