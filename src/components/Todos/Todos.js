import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import PropTypes from "prop-types";
import AddTodo from "../AddTodo/AddTodo";

export default class Todos extends React.Component {
  render = () => {
    return (
      <div className="container">
        <div style={this.addTodoContainerStyle}>
          <header className="container__header container__header--left">
            <h3>Todos</h3>
          </header>
          <AddTodo addTodo={this.props.addTodo} />
        </div>
        <ul style={{ listStyleType: "none" }}>
          {this.props.todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={this.props.toggleComplete}
                deleteTodo={this.props.deleteTodo}
              />
            );
          })}
        </ul>
      </div>
    );
  };

  addTodoContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
