import React from 'react';
import './Todo.css';


// The Todo items. Adds an event by which Todo items can be toggled to completed.

const Todo = props => {
  return (
    <div className={`item${props.todo.completed ? ' completed' : ''}`} onClick={() => props.handleToggleComplete(props.todo.id)}>
      {props.todo.task}
    </div>
  );
}

export default Todo;
