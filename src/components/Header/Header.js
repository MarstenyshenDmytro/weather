import React from "react";
import Button from "../Button/Button";
import Location from "../Location/Location";
import "./header.scss";

const Header = props => {
  const { redirect } = props;

  return (
    <header className="page-header">
      <Button handler={redirect} name="setting" styles="button-setting" />
      <Location />
    </header>
  );
};

export default Header;
