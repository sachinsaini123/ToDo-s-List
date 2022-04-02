import React from "react";
import { TodoItem } from "./todoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className='container' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      <div>
        {props.todos.length === 0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};
