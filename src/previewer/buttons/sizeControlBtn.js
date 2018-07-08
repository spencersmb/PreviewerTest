import { Component } from "react";

export class FontSizeToggle extends Component {
  render() {
    return this.props.children(this.getStateAndHelpers());
  }

  getStateAndHelpers() {
    return {
      active: this.props.selected === this.props.size,
      toggle: this.toggle
    };
  }

  toggle = () => {
    const { selected, size, handleSelection } = this.props;
    if (selected === size) {
      return;
    }
    handleSelection(this.props.size);
  };
}

export default FontSizeToggle;
