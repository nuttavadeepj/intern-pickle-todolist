import React, { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Result from "./Result";
import "../styles/todolist.css";

function TodoList({ todoList, handleComplete, handleDelete }) {
  //Check all TodoList, if all are number then sum all, if not then concat all string and number
  var inputValue = [];
  var list = [];
  var total;
  for (let i = 0; i < todoList.length; i++) {
    if (!isNaN(+todoList[i].value)) {
      inputValue = todoList.map((p) => parseInt(p.value));
      total = inputValue.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      console.log("total", total);
    } else {
      inputValue = todoList.map((p) => p.value);
      list = inputValue.map((p) => p);
    }
  }

  //check in each list, sum all the TodoList that is a number, and concat all the string one.
  var sum = 0;
  var text = [];
  for (let i = 0; i < todoList.length; i++) {
    if (!isNaN(+todoList[i].value)) {
      sum = sum + parseInt(todoList[i].value);
    } else {
      text = text + todoList[i].value + ", ";
    }
  }

  return (
    <Fragment>
      <div>
        {todoList !== ""
          ? todoList.map((item, idx) => (
              <div
                className={item.isComplete ? "completed" : "uncomplete"}
                key={idx}
              >
                <div key={item.id} onClick={(e) => handleComplete(e, item.id)}>
                  {item.value}
                </div>
                <div>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={(e) => handleDelete(e, item.id)}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </div>
            ))
          : alert("Please enter a todo")}
      </div>
      {inputValue.length === 0 ? null : (
        <Result
          total={total}
          inputValue={inputValue}
          list={list}
          sum={sum}
          text={text}
        />
      )}
    </Fragment>
  );
}

export default TodoList;
