import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigatioItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className="Toolbar">
    <div>MENU</div>
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigatioItems />
    </nav>
  </header>
);

export default toolbar;
