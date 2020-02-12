import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos/Todos";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo/AddTodo";
import About from "./components/pages/About";
import Axios from "axios";

class App extends Component {
  baseUrl = "https://jsonplaceholder.typicode.com/todos";

  state = {
    todos: []
  };

  componentDidMount = () => {
    Axios.get(`${this.baseUrl}?_limit=10`).then(res => {
      this.setState({ todos: res.data });
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

  toggleComplete = id => {
    Axios.patch(`${this.baseUrl}/${id}`, { completed: true }).then(res => {
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) return res.data;

          return todo;
        })
      });
    });
  };

  deleteTodo = id => {
    if (!window.confirm("Sei sicuro di voler eliminare il todo?")) return;

    Axios.delete(`${this.baseUrl}/${id}`).then(() => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      });
    });
  };

  addTodo = title => {
    const { todos } = this.state;

    Axios.post(this.baseUrl, { title }).then(res => {
      this.setState({ todos: [...todos, res.data] });
    });
  };
}

export default App;
