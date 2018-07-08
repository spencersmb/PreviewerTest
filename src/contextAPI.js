import * as React from "react";

const store = {
  sizeList: [24, 36, 44],
  selectedSize: 24,
  size: 24,
  text: "placeholder",
  handleTxtChange: () => {},
  selectItem: () => {}
};

const ThemeContext = React.createContext(store);

export default ThemeContext;
