import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  const itemStyle = {
    backgroundColor: "grey",
    borderRadius: "5px",
    padding: "16px",
    margin: "40px 0 40px 0",
  };
  return (
    <div className='my-3' style={itemStyle}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className='bt btn-sm btn-danger'
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
