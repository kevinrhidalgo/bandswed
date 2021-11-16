import React from "react";
import DropdownLink from "../DropdownLink/DropdownLink";

export default function Navigation() {
  return (
    <nav class="navbar navbar-light justify-content-between">
      <form class="form-inline">
        <DropdownLink />
      </form>
    </nav>
  );
}
