import React from "react";

class Header extends React.Component {
  render = () => (
    <header className="container__header">
      <h1>{this.props.title}</h1>
    </header>
  );
}

export default Header;
