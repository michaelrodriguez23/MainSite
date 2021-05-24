import React, { Component } from "react";
import App from "../App"
import  Mobile from "./mobile";
import  Desktop from "./desktop";
export default class ResizeClass extends Component {
  constructor() {
    super();

    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };
    this.state = {
      windowWidth: null,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({ windowWidth: document.body.clientWidth });
    });
  }
  render() {
    const isTablet = this.state.windowWidth < this.mediaQuery.tablet;
    const testRender = isTablet ?<Mobile></Mobile>: <Desktop> </Desktop>; //  👈🏽 2nd ternary right here
    return (
      <div>
    
        <div>
          <p>{testRender}</p>
        </div>
      </div>
    );
  }
}
