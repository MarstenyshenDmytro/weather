import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import { ContextApp } from "../../store/context";
import SelectForm from "../../components/SelectForm/SelectForm";
import { changeTemperature } from "../../actions/weather";

import "./settingPage.scss";

const SettingPage = props => {
  const history = useHistory();
  const { state, dispatch } = useContext(ContextApp);
  const { temperature } = state;
  const [currentTemperature, setCurrentTemperature] = useState(temperature);

  const handleChange = e => {
    const { value } = e.target;
    setCurrentTemperature(value);
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(changeTemperature(currentTemperature));
    history.push("/");
  };

  return (
    <div className="setting-center">
      <SelectForm
        handleClick={handleClick}
        handleChange={handleChange}
        temperature={currentTemperature}
      />
    </div>
  );
};

export default SettingPage;
