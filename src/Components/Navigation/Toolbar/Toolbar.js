import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigatioItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
  <header className="Toolbar">
    <div>MENU</div>
    <Logo />
    <div>LOGO</div>
    <nav>
      <NavigatioItems />
    </nav>
  </header>
);

export default toolbar;
