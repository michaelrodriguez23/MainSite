import React, { Component } from "react";

import p5 from "p5";

class Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let canvas;
    let love;
    let graphics;
    let angle = 0;
    let img;
    let img2;
    function preLoad() {}

    p.setup = () => {
      canvas = p.createCanvas(
        p.windowWidth / 2.59,
        p.windowHeight / 1.58,
        p.WEBGL
      );
      love = p.createGraphics(500, 500);
      love.fill(255);
      love.textSize(55);
      love.text("LOVE", 150, 150);
      img = p.loadImage("./scan.PNG");
      img2 = p.loadImage("./scan3.PNG");
    };

    p.draw = () => {
      p.background(0);
      let camX = p.map(p.mouseY, 0, p.width, -1000, 0);
      p.camera(camX, 0, p.height / p.tan(p.PI / 6), 0, 2, 0, 0, 0, 4);
      // p.translate(0, 0, p.mouseY / 2);
      p.ambientLight(p.mouseY);
      p.directionalLight(255, 255, 255, 10, 1, 0);
      p.texture(img2);
      // if (p.floor(angle) % 2 == 0) {
      //   p.texture(img);
      // }
      console.log(p.floor(angle));
      p.rotateX(angle / 10);
      // p.rotateY(angle / 10);
      p.rotateZ(angle);
      p.plane(1500, 1500, 200, 100);
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
