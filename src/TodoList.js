import React, { useState } from 'react';

function TodoList() {
    // 使用 useState 钩子来管理 todoList 状态
    const [todoList, setTodoList] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    // newTodo 是一個狀態變數，它存儲了一個表示待辦事項（todo）的字串。在這個例子中，初始值被設置為空字串 ''。
    // setNewTodo 是一個函數，用來更新 newTodo 狀態的值。當你呼叫這個函數時，React 將重新渲染組件並將新的值設置給 newTodo。
  
    // 处理输入框内容变化
    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
  
    // 处理提交按钮点击事件
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        // 将新任务添加到 todoList 中
        setTodoList([...todoList, newTodo]);
        // 清空输入框
        setNewTodo('');
      }
    };
  
    return (
      <>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="新增待辦事項"
          />
          <button onClick={handleAddTodo}>提交</button>
        </div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </>
    );
  }
export default TodoList;
