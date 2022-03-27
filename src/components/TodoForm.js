import React, { useState, Fragment } from "react";
import "../styles/todolist.css";

function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    todo !== ""
      ? props.onSubmit({
          id: props.todoList.length + 1,
          value: todo,
        })
      : alert("Please enter a todo list");
    setTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.code === "NumpadEnter") {
      handleAdd(e);
    }
  };

  return (
    <Fragment>
      <form className="input-form" onSubmit={(e) => handleAdd(e)}>
        <input
          type="text"
          name="text"
          value={todo}
          placeholder="Add your list ..."
          onChange={handleChange}
          onKeyPress={(e) => handleKeyPress(e)}
          className="input"
        />
        <button className="input-btn" onClick={(e) => handleAdd(e)}>
          Add
        </button>
      </form>
    </Fragment>
  );
}

export default TodoForm;
