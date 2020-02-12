import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import PropTypes from "prop-types";

export default class Todos extends React.Component {
  render = () => {
    return (
      <div className="container">
        <ul className="container--background" style={{ listStyleType: "none" }}>
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
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
