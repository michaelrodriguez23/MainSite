import React, { Component } from "react";
import App from "../App";
import Mobile from "./mobile";
import Desktop from "./desktop";
export default class ResizeClass extends Component {
  constructor() {
    super();
    // Media Query Reference
    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };
    // Initial State is is the size of the document width
    this.state = {
      windowWidth: document.body.clientWidth,
    };
  }
  // Begining of the component lifecyle.
  // Whenever the page is changed, the state of the windowWidth will change accordingly.
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ windowWidth: document.body.clientWidth });
    });
  }
  render() {
    //  The render of mobile vs desktop is toggled based on the size of the webpage.
    const isDesktop = this.state.windowWidth > this.mediaQuery.tablet;
    const desktopRender = isDesktop ? <Desktop> </Desktop> : <Mobile> </Mobile>; //  👈🏽 2nd ternary right here
    return (
      <div>
        <div>{desktopRender}</div>
      </div>
    );
  }
}
