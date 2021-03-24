import React, { Component } from "react";

import p5 from "p5";

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let canvas;
    let graphics;
    let angle = 0;
    let grap;
    let img;

    function preLoad() {}

    p.setup = () => {
      canvas = p.createCanvas(
        p.windowWidth / 2.59,
        p.windowHeight / 1.58,
        p.WEBGL
      );
      img = p.loadImage("scan.png");
    };
    p.draw = () => {
      p.background(0);
      let camX = p.map(p.mouseY, 0, p.width, -1000, 0);
      p.camera(camX, 0, p.height / p.tan(p.PI / 6), 0, 2, 0, 0, 0, 4);
      p.ambientLight(p.mouseY);
      p.directionalLight(255, 255, 255, 10, 1, 0);
      p.texture(img);
      p.rotateX(angle / 10);
      p.rotateZ(angle);
      p.plane(1500, 1500);
      angle += 0.008;
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }
  render() {
    return (
      <div ref={this.myRef}>
        <h1 className="App-title"> {this.props.title} </h1>
      </div>
    );
  }
}
export default Sketch;
