import * as React from "react";

const Input = props => {
  const { placeHolderText, handleTxtInput } = props;
  return (
    <input
      id="textInput"
      type="text"
      placeholder={placeHolderText}
      onChange={handleTxtInput}
    />
  );
};

export default Input;
