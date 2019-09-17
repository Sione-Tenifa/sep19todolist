import React, { Component, } from 'react';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true, },
      { id: 2, name: "Learn React", complete: false, },
      { id: 3, name: "Graduate DPL", complete: false, },
    ]
  };

renderTodos = () => {
  const { todos, } = this.state;
  return todos.map( todo => 
    <li key={todo.id}>{todo.name}</li>
  )
};

  render() {
    return (
      <div>
        <ul>
          { this.renderTodos() }
        </ul>
      </div>
    )
  }
}

export default App;