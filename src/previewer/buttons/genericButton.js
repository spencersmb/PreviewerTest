import * as React from "react";
import { Component } from "react";

export class GenericButton extends Component {
  render() {
    const { onClick, children } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}

export default GenericButton;
