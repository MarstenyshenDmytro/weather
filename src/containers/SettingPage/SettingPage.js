import React, { useState } from "react";
import "./settingPage.scss";
import SelectForm from "../../components/SelectForm/SelectForm";
import { useHistory } from "react-router";
import { getCookie, setCookie } from "../../api/cookie";

const SettingPage = props => {
  const history = useHistory();
  const [temp, setTemp] = useState(getCookie("t"));

  const handleChange = e => {
    const { value } = e.target;
    setTemp(value);
  };

  const handleClick = e => {
    e.preventDefault();
    setCookie("t", temp);
    history.push("/");
  };

  return (
    <div className="setting-center">
      <SelectForm
        handleClick={handleClick}
        handleChange={handleChange}
        t={temp}
      />
    </div>
  );
};

export default SettingPage;
