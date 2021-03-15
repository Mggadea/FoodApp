import React from "react";
import './Loading.css'

export const Loading = () => {
  return (
    <div>
      <h1>Cooking in progress..</h1>
      <div id="cooking">
        <div id="area">
          <div id="sides">
            <div id="pan"></div>
            <div id="handle"></div>
          </div>
          <div id="pancake">
            <div id="pastry"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
