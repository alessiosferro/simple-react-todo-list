import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import About from "./components/pages/About";

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
      <Router>
        <main className="container container--main container--border container--larger container--shadow">
          <Header title="Lista delle cose da fare" />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleComplete={this.toggleComplete}
                  deleteTodo={this.deleteTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About}></Route>
        </main>
      </Router>
    );
  };
}

export default App;
