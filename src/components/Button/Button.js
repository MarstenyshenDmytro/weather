import React from "react";
import "./button.scss";

const Button = props => {
  const { handler, styles, label } = props;

  return (
    <button className={`${styles || ""}`} onClick={handler}>
      {label}
    </button>
  );
};

export default Button;
