import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxe from "../../../hoc/Auxe";

const SideDrawer = props => {
  let attachedClasses = "SideDrawerClose";
  if (props.open) {
    attachedClasses = "SideDrawerOpen";
  }
  return (
    <Auxe>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxe>
  );
};

export default SideDrawer;
