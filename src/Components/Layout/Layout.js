import React from "react";
import Auxe from "../../hoc/Auxe";
import "./Layout.css";

const layout = props => (
  <Auxe>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Auxe>
);

export default layout;
