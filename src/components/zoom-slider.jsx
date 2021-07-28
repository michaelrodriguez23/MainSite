import React, { Component } from "react";
import p5 from "p5";
class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let canvas;

    let cursor;
    let angle = 0;
    let img;

    function preLoad() {}
    function windowResized() {
      p.resizeCanvas(p.windowWidth / 2.59, p.windowHeight / 1.58, p.WEBGL);
    }
    p.setup = () => {
      canvas = p.createCanvas(p.windowWidth / 2.59, p.windowHeight / 1.58);
      img = p.loadImage(
        "https://michaelrodriguez23.github.io/MainSite/assets/selfie.jpg"
      );
      cursor = p.loadImage(
        "https://michaelrodriguez23.github.io/MainSite/assets/100.png"
      );
    };
    function cursorDraw() {
      p.noCursor();
      p.image(cursor, p.mouseX, p.mouseY, 100, 100);
    }

    p.draw = () => {
      windowResized();
      p.background(1);
      cursorDraw();
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }
  render() {
    return (
      <div id="canvasWrapper" ref={this.myRef}>
        <h1 className="App-title"> {this.props.title} </h1>
      </div>
    );
  }
}
export default Sketch;
