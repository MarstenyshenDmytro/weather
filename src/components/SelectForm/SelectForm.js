import React from "react";
import Button from "../Button/Button";
import "./selectForm.scss";

const SelectForm = props => {
  const { handleClick, handleChange, t } = props;

  return (
    <form className="select-form">
      <span>Choose temperature type: </span>
      <select onChange={handleChange} className="selector" defaultValue={t}>
        <option value="f">F</option>
        <option value="c">C</option>
      </select>
      <Button handler={handleClick} name="submit" styles="button-submit" />
    </form>
  );
};

export default SelectForm;
