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
      canvas = p.createCanvas(
        p.windowWidth / 2.59,
        p.windowHeight / 1.58,
        p.WEBGL
      );
      img = p.loadImage(
        "https://michaelrodriguez23.github.io/brecklyn_portfolio/assets/FastService.jpeg"
      );
      cursor = p.loadImage(
        "https://michaelrodriguez23.github.io/brecklyn_portfolio/assets/100.png"
      );


      
    };

    p.draw = () => {
      windowResized();
      p.noCursor();
      p.background(0);
      p.image(cursor,p.mouseX-450,p.mouseY-350);
      let camX = p.map(p.mouseY, 0, p.width, -1000, 0);
      p.camera(camX, 0, p.height / p.tan(p.PI / 6), 0, 2, 0, 0, 0, 4);
      p.ambientLight(p.mouseY);
      p.directionalLight(255, 255, 255, 10, 1, 0);
      p.texture(img);
     p.rotateX(angle);
     p.rotateZ(angle);
     p.box(500, 500);
    angle += 0.008;
     };
    function cursorDraw(){
    
    }
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
