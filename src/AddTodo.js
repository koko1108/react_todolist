import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ onAdd, placeholder }) {
  const [newTodo, setNewTodo] = useState("");
  // setNewTodo 是一個函數，用來更新 newTodo 狀態的值。當你呼叫這個函數時，React 將重新渲染組件並將新的值設置給 newTodo。

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = () => {
    if (newTodo.trim() !== "") {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div className="d-flex mb-2">
      <input
        className="p-2 border-2 border-gray-200 rounded mr-2"
        placeholder={placeholder}
        type="text"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        onClick={handleSubmit}
      >
        提交
      </button>
    </div>
  );
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

AddTodo.defaultProps = {
  placeholder: "請輸入任務...",
};

export default AddTodo;
