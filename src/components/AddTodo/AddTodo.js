import React, { Component } from "react";
import "./AddTodo.css";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = event => {
    const { title } = this.state;

    event.preventDefault();
    event.stopPropagation();

    if (title.length === 0) return;

    this.props.addTodo(title);
    this.setState({ title: "" });
  };

  onChange = event => {
    event.stopPropagation();

    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="add-todo__form">
        <input
          onChange={this.onChange}
          type="text"
          name="title"
          className="add-todo__input-field"
          placeholder="Aggiungi todo..."
          value={this.state.title}
        />
        <button type="submit" className="add-todo__submit-btn">
          Aggiungi
        </button>
      </form>
    );
  }
}

export default AddTodo;
