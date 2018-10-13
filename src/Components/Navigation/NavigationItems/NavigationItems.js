import React from "react";
import "./NavigationItems.css";
import NaviagtionItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className="NavigationItems">
    <NaviagtionItem link="/" active={true}>
      Burger Builder
    </NaviagtionItem>
    <NaviagtionItem link="/">Checkout</NaviagtionItem>
  </ul>
);
export default navigationItems;
