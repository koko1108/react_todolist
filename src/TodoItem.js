import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, index, onDelete }) {
  return (
    <li className="mb-2 flex justify-between items-center">
      <span className="flex-1 pr-2">{todo}</span>
      <button 
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs transition duration-300" 
      onClick={() => onDelete(index)}>刪除</button>
      {/* 當你需要傳遞一個參數到事件處理函數時（如handleDeleteTodo(index)），你需要用一個函數來包裹它（如onClick={() => handleDeleteTodo(index)}），這樣就可以避免在渲染時立即調用它。 */}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;
