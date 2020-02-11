import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Gettare la spazzatura nel bidone dei rifiuti.",
        completed: false
      },
      {
        id: 2,
        title: "Portare la moglie a cena fuori.",
        completed: true
      },
      {
        id: 3,
        title: "Parlare con il direttore.",
        completed: false
      }
    ]
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;

        return todo;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render = () => {
    return (
      <main className="app-container">
        <div className="container container--main container--border container--larger container--shadow">
          <header className="container__header">
            <h1>React Crash Course</h1>
          </header>
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </main>
    );
  };
}

export default App;
