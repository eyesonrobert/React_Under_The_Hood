import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigatioItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.DrawerToggleClicked} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigatioItems />
    </nav>
  </header>
);

export default toolbar;
