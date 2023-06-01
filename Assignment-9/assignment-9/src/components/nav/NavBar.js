import React from "react";
import IMG1 from "../../assets/images/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="container relative py-3">
      <div class="flex items-center justify-between">
        <a href="./index.html">
          <img alt="" src={IMG1} />
        </a>
        <div class="flex-1 max-w-xs search-field group">
          <i class="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            class="search-input"
            id="lws-searchJob"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
