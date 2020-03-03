import React from "react";

import DetailsWeather from "../../components/DetailsWeather/DetailsWeather";
import Button from "../../components/Button/Button";

import "./modalWindow.scss";

const ModalWindow = props => {
  const { handler, id } = props;

  const handleClick = e => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      handler();
    }
  };

  return (
    <div className="modal-back" onClick={handleClick}>
      <div className="dialog-window">
        <Button label="x" handler={handler} styles="button-close-style" />
        <DetailsWeather id={id} />
      </div>
    </div>
  );
};

export default ModalWindow;
