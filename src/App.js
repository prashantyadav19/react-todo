import React, { Component } from 'react';
import Todo from './container/Todo/Todo';
class App extends Component {
  render() {
    return (
      <div className="app">
          <p className="todo-heading"> React Todo App</p>
        <Todo />
      </div>
    );
  }
}

export default App;
