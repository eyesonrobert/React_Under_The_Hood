import React from "react";
import Auxe from "../../hoc/Auxe";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => (
  <Auxe>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Auxe>
);

export default layout;
