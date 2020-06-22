import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.scss'
import { List } from 'react-virtualized';
const TodoList = ({todos, onRemove, onCheck}) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem todo={todo} key={key} onRemove={onRemove} onCheck={onCheck} style={style}/>
      )
    },
    [onRemove, onCheck, todos]
  );
  return (
    <List className="TodoList"
    width={512}
    height={342}
    rowCount={todos.length}
    rowHeight={57}
    rowRenderer={rowRenderer}
    list={todos}
    style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);