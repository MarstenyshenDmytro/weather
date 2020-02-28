import React from "react";
import "./button.scss";

const Button = props => {
  const { handler, styles, name } = props;
  return (
    <button className={`${styles || ""}`} onClick={handler}>
      {name}
    </button>
  );
};

export default Button;
