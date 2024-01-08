import React, { useState } from "react";

function TodoList() {
  // 使用 useState 钩子来管理 todoList 状态
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  // newTodo 是一個狀態變數，它存儲了一個表示待辦事項（todo）的字串。在這個例子中，初始值被設置為空字串 ''。
  // setNewTodo 是一個函數，用來更新 newTodo 狀態的值。當你呼叫這個函數時，React 將重新渲染組件並將新的值設置給 newTodo。

  // 处理输入框内容变化
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  // 处理提交按钮点击事件
  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      // 将新任务添加到 todoList 中
      setTodoList([...todoList, newTodo]);
      // 清空输入框
      setNewTodo("");
    }
  };

  // 新增的刪除待辦事項的功能
  const handleDeleteTodo = (index) => {
    const newTodoList = todoList.filter((_, idx) => idx !== index);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="新增待辦事項"
            className="flex-1 p-2 border-2 border-gray-200 rounded mr-2"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={handleAddTodo}
          >
            提交
          </button>
        </div>
        <ul className="list-disc pl-5">
          {todoList.map((todo, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span className="flex-1 pr-2">{todo}</span>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs transition duration-300"
                onClick={() => handleDeleteTodo(index)}
              >
                刪除
              </button>
              {/* 當你需要傳遞一個參數到事件處理函數時（如handleDeleteTodo(index)），你需要用一個函數來包裹它（如onClick={() => handleDeleteTodo(index)}），這樣就可以避免在渲染時立即調用它。 */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TodoList;
