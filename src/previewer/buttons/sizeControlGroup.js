import * as React from "react";
import { Component } from "react";
import SizeButton from "./sizeControlBtn";
import GenericButton from "./genericButton";
import ThemeContext from "../../contextAPI";

export class SizeSelectGroup extends Component<{}, {}> {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          console.log("Button group re-render", context);
          return (
            <div>
              {context.sizeList.map(itemSize => (
                <SizeButton
                  key={itemSize}
                  size={itemSize}
                  selected={context.selectedSize}
                  handleSelection={context.selectItem}
                >
                  {({ active, toggle }: any) => (
                    <div>
                      <p>Selected: {JSON.stringify(active)}</p>
                      <GenericButton onClick={toggle}>{itemSize}</GenericButton>
                    </div>
                  )}
                </SizeButton>
              ))}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default SizeSelectGroup;
