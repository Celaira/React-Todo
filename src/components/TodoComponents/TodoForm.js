import React from 'react';
import './Todo.css';


const TodoForm = props => {
  return (
    <form>
      <input onChange={props.handleTodoChange} type="text" name="todo" value={props.todo} placeholder="...todo" />
      <button onClick={props.handleAddTodo}>Add Item</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
    </form>
  );
}
export default TodoForm
