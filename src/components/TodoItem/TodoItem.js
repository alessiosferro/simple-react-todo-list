import React, { Component } from "react";
import "./TodoItem.css";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  render = () => {
    const { id, title, completed } = this.props.todo;

    return (
      <li className="todo-list__item">
        <label className="todo-list__item-label" htmlFor={`todo_${id}`}>
          <input
            id={`todo_${id}`}
            className="todo-list__item-checkbox"
            type="checkbox"
            name="todo-item"
            checked={completed}
            onChange={this.props.toggleComplete.bind(this, id)}
            onClick={event => event.stopPropagation()}
          />
          <span style={this.getStyle()}>{title}</span>
        </label>
        <button
          onClick={this.props.deleteTodo.bind(this, id)}
          className="todo-list__item__remove-todo-btn"
          type="button"
        >
          Elimina
        </button>
      </li>
    );
  };

  getStyle = () =>
    this.props.todo.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired
};

export default TodoItem;
