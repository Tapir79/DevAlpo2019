import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

const shouldGoForCoffee = weather => {
  return weather < -10 || weather > 25
    ? "Jää kotiin kahville"
    : "No eiköhän mennä kahvilaan!";
};

class Header extends Component {
  render() {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h6" color="inherit">
            <h1>Sää Tampereella on: {this.props.weather} astetta</h1>
            <h2> {shouldGoForCoffee(this.props.weather)} </h2>
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
