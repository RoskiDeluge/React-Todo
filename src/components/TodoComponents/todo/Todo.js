import React from "react";
import './Todo.scss'

const Todo = props => {
  return (
    <div
      onClick={event => props.toggleCompleted(props.item.id)}
      className={`${props.item.completed}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;