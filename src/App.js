import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Gettare la spazzatura nel bidone dei rifiuti.",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Portare la moglie a cena fuori.",
        completed: true
      },
      {
        id: uuid.v4(),
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

  addTodo = title => {
    const { todos } = this.state;

    this.setState({
      todos: [
        ...todos,
        {
          // id: todos[todos.length - 1].id + 1,
          id: uuid.v4(),
          title,
          completed: false
        }
      ]
    });
  };

  render = () => {
    return (
      <main className="container container--main container--border container--larger container--shadow">
        <Header title="Lista delle cose da fare" />
        <Todos
          addTodo={this.addTodo}
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          deleteTodo={this.deleteTodo}
        />
      </main>
    );
  };
}

export default App;
