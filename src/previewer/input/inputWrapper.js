import * as React from "react";
import ThemeContext from "../../contextAPI";
import Input from "./input";

const InputWrapper = props => {
  return (
    <ThemeContext.Consumer>
      {({ text, handleTxtChange }) => {
        console.log("placeholder render text:", text);
        return (
          <div>
            Input wrapper
            <Input placeHolderText={text} handleTxtInput={handleTxtChange} />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default InputWrapper;
