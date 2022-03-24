import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ReactComponent as YourSvg } from '../../images/credit-suisse-1.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <img src="../../images/credit-suisse-1.svg" class="image" alt="logo"/>
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
