import React from "react";
import { NavbarData } from "./NavbarData";
import Avatar from "@material-ui/core/Avatar";

import "./Navbar.css";
// toDo: en el componente Avatar hacer la función handleClick y vincularla al componente usando onClick={this.handleClick}
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        {NavbarData.map((value) => {
          return (
            <div className="navbarItem">
              <div className="navbarTitle">{value.icon} {value.title}</div>
              <Avatar>H</Avatar>
            </div>
          );
        })}
      </div>
    </div>
  );
};
