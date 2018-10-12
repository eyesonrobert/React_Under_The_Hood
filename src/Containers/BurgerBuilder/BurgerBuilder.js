import React, { Component } from "react";
import Auxe from "../../hoc/Auxe";
import Burger from "../../Components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  };

  render() {
    return (
      <Auxe>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxe>
    );
  }
}

export default BurgerBuilder;
