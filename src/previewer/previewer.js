import React, { Component } from "react";
import AppContext from "../contextAPI";
import TextInput from "./input/inputWrapper";
import ButtonGroup from "./buttons/sizeControlGroup";
/**
 * Previewer
 */
export class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleTxtChange: this.handleTxtChange,
      text: this.props.text,
      selectItem: this.handleSelection,
      size: this.props.size,
      sizeList: this.props.sizeList,
      selectedSize: this.props.selectedSize
    };
  }

  handleSelection = item => {
    // console.log("selection", item);
    this.setState(state => ({ size: item }));
  };

  handleTxtChange = e => {
    // console.log("text", e.target.value);
    const text = e.target.value;
    this.setState(state => ({ text: text }));
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div>App Preview</div>
        <p>My input</p>
        <TextInput />
        <ButtonGroup />
      </AppContext.Provider>
    );
  }
}

export default Previewer;
