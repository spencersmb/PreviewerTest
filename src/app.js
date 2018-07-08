import * as React from "react";
import Previewer from "./previewer/previewer.js";

const initPreviewProps = {
  sizeList: [24, 36, 44],
  size: 24,
  text: "Custom Text",
  selectedSize: 24
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewOpen: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Previewer {...initPreviewProps} />
      </div>
    );
  }
}

export default App;
