import React from "react";
import Todo from "./todo/Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.tasks.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default TodoList;
