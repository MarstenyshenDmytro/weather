import React from "react";
import Button from "../Button/Button";
import "./selectForm.scss";

const SelectForm = props => {
  const { handleClick, handleChange, temperature } = props;

  return (
    <form className="select-form">
      <span>Choose temperature type: </span>
      <select
        onChange={handleChange}
        className="selector"
        defaultValue={temperature}
      >
        <option value="f">F</option>
        <option value="c">C</option>
      </select>
      <Button handler={handleClick} label="submit" styles="button-submit" />
    </form>
  );
};

export default SelectForm;
