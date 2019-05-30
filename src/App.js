import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        task: "Write Code",
        id: 123,
        completed: false,
      },
    {
      task: "debug Code",
      id: 124,
      completed: false,
    },
  {
    task: "add Events",
    id: 125,
    completed: false,
  }]

    };
  }

    addTodo = e => {
      e.preventDefault();
      const newTodo = {
        task: this.state.todo,
        id: Date.now(),
        completed: false,
      };

      this.setState({
        todos: [...this.state.todos, newTodo],
        todo: '',
      });
    };

    changeTodo = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    toggleCompleted = id => {
      let todos = this.state.todos.slice();

      todos = todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      this.setState({ todos });
    };

    clearCompleted = e => {
      e.preventDefault();
      let todos = this.state.todos.filter(todo => !todo.completed);
      this.setState({ todos });
    };




  render() {
    return (
      <div className="app">
        <TodoList
          handleToggleComplete={this.toggleCompleted}
          todos={this.state.todos}
        />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompleted}
        />
      </div>

    );
  }
}

export default App;
