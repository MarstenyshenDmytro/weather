import React from "react";
import "./location.scss";

export default function Location(props) {
  return props.location !== undefined ? (
    <h2 className="location-name">{`Current location: ${props.location.city}`}</h2>
  ) : null;
}
