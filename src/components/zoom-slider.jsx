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
    let selfie;
    let hunnid; 

    function preLoad() {}
    function windowResized() {
      p.resizeCanvas(p.windowWidth / 2.59, p.windowHeight / 1.58, p.WEBGL);
    }
    p.setup = () => {
      canvas = p.createCanvas(p.windowWidth / 2.59, p.windowHeight / 1.58);
      selfie = p.loadImage(
        "https://michaelrodriguez23.github.io/MainSite/assets/selfie.jpg"
      );
      hunnid = p.loadImage(
        "https://michaelrodriguez23.github.io/MainSite/assets/100.png"
      );
       
    };
    function cursorDraw() {
      p.noCursor();
      p.imageMode(p.CORNERS);
      p.tint(p.mouseY,p.mouseY,p.MouseY)
      
      if(p.mouseX < p.windowWidth/6){
        p.image(hunnid, p.mouseX, p.mouseY, 300, 300);
      } else {
        p.image(selfie, p.mouseX, p.mouseY, 300, 300);
      }
    }

    p.draw = () => {
      windowResized();
      p.background(0);
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
