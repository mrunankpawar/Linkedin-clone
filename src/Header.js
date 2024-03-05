import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedIn from "./img/linkedin-2.png";

function Header() {
  return (
    <div className="header">
      <div class="header__left">
        <img src={LinkedIn} alt="" />

        <div class="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div class="header__right"></div>
    </div>
  );
}

export default Header;
