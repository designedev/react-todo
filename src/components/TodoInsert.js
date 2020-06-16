import React, { useState, useCallback } from 'react';
import {MdAddCircle} from 'react-icons/md'
import '../styles/TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="Enter Todo Item" value={value} onChange={onChange} />
      <button type="submit">
        <MdAddCircle />
      </button>
    </form>
  );
};

export default TodoInsert;