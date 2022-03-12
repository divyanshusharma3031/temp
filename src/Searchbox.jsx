import React, { useState } from "react";
// import { useState } from "react";
import "./Searchbox.css"
function Searchbox() {
  return (
    <div id="container">
      <div id="divform">
        <form action="fds.js" id="form1">
          <input
            type="text"
            name="search1"
            id="search1"
            placeholder="Codeforces Handle"
            onFocus="toggle()"
            onBlur="toggle1()"
          />
          <label for="search1" id="labelsearch">
            <ion-icon name="search" id="searchicon"></ion-icon>
          </label>
        </form>
      </div>
      <div id="invisible"></div>
    </div>
  );
}

export default Searchbox;
