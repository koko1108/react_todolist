import React, { useState,useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  // 使用 useState 钩子来管理 todoList 状态
  const [todoList, setTodoList] = useState([]);
  // newTodo 是一個狀態變數，它存儲了一個表示待辦事項（todo）的字串。在這個例子中，初始值被設置為空字串 ''。

  // 處理添加新待辦事項的事件，它會改變 state
  const handleAddTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todoList.filter((_, idx) => idx !== index);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    // 这里可以执行待办事项列表更新后的操作
    console.log("待办事项列表已更新", todoList);
  }, [todoList]); // 当todoList变化时，这个effect会运行

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AddTodo onAdd={handleAddTodo} />
      <ul className="list-disc pl-5">
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
