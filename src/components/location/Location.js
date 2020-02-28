import React, { useContext } from "react";
import { ContextApp } from "../../store/context";
import "./location.scss";

const Location = props => {
  const { state } = useContext(ContextApp);
  const { city } = state.data.location;

  if (!city) {
    return null;
  }
  return (
    <p className="location-name">
      Current location: <span>{city}</span>
    </p>
  );
};

export default Location;
