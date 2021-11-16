import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import DropdownList from "../DropdownList/DropdownList";
import "./styles.css";

function DropdownLink(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  DropdownLink.handleClickOutside = () => {
    setShowDropdown(false);
  };

  return (
    <div className="headerSec">
      <div
        class="nav-item nav-link profile-link"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        ☰
      </div>
      <div className="headTitle"> <p>WE'RE GETTING MARRIED - 3.10.2022 - MONTVERDE, FL</p></div>
      {showDropdown ? <DropdownList /> : null}
      
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownLink.handleClickOutside,
};

export default onClickOutside(DropdownLink, clickOutsideConfig);
