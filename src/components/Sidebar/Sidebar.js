import React from "react";
import { SidebarData } from "./SidebarData";
import '../../App.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        {SidebarData.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              onClick={() => (window.location.pathname = value.link)}
            >
              {""}
              <div id="sidebarItemIcon">{value.icon}</div>
              <div id="sidebarItemText">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
