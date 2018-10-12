import React, { Component } from "react";
import Auxe from "../../hoc/Auxe";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Auxe>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxe>
    );
  }
}

export default BurgerBuilder;
