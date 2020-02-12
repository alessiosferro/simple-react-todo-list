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
      <div className="add-todo__container">
        <header className="container__header container__header--left">
          <h3>Cose da fare</h3>
        </header>
        <form className="add-todo__form" onSubmit={this.onSubmit}>
          <div className="add-todo__mobile">
            <input
              onChange={this.onChange}
              type="text"
              name="title"
              className="add-todo__input-field"
              placeholder="Aggiungi cosa da fare..."
              value={this.state.title}
            />
            <button type="submit" className="add-todo__submit-btn">
              + Aggiungi
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
