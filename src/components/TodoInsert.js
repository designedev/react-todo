import React from 'react';
import {MdAddCircle} from 'react-icons/md'
import '../styles/TodoInsert.scss'

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Enter Todo Item" />
      <button type="submit">
        <MdAddCircle />
      </button>
    </form>
  );
};

export default TodoInsert;