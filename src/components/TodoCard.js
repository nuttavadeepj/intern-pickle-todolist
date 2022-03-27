import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../styles/todolist.css";

function TodoCard() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    const combineTodo = [...todoList, todo];
    // console.log(todo);
    setTodoList(combineTodo);
    console.log(...combineTodo);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setTodoList(todoList.filter((todo) => todo.id !== id));
    console.log("delete", id);
  };

  const handleComplete = (e, id) => {
    e.preventDefault();

    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodoList(newTodoList);
    console.log("complete", id);
    console.log(newTodoList);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} todoList={todoList} />
      <TodoList
        todoList={todoList}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default TodoCard;
