import React, { useState, useEffect, useContext, useCallback } from "react";
import { useHistory } from "react-router";

import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import ModalWindow from "../ModalWindow/ModalWindow";
import Header from "../../components/Header/Header";
import Portal from "../Portal/Portal";
import { ContextApp } from "../../store/context";
import { getWeatherAPI } from "../../api/weather";
import {
  requestWeather,
  successWeather,
  errorWeather
} from "../../actions/weather";

import "./mainPage.scss";

const MainPage = props => {
  const { state, dispatch } = useContext(ContextApp);
  const [permision, setPermision] = useState(null);
  const [open, setIsOpen] = useState(false);
  const [target, setTarget] = useState(null);
  const history = useHistory();

  const permisionSucces = useCallback(
    async position => {
      setPermision(true);
      dispatch(requestWeather);
      try {
        const result = await getWeatherAPI(position, state.temperature);
        dispatch(successWeather(result));
      } catch (error) {
        dispatch(errorWeather(error));
      }
    },
    [dispatch, state.temperature]
  );

  const permisionDenied = () => {
    setPermision(false);
  };
  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      return "Geolocation is not supported by Your browser";
    } else {
      geolocation.getCurrentPosition(permisionSucces, permisionDenied);
    }
  }, [permisionSucces]);

  const redirect = () => {
    history.push("/setting");
  };

  const handleClick = id => {
    setTarget(id);
    setIsOpen(true);
  };

  const handleModalClick = e => {
    setIsOpen(false);
  };

  const {
    loading,
    data: { forecasts }
  } = state;

  if (permision === null) {
    return <p className="info-p">Waiting for permision...</p>;
  }
  if (permision === false) {
    return (
      <p className="info-p">You must to allow to recieve Your geolocation</p>
    );
  }
  if (loading) {
    return <p className="info-p">Loading...</p>;
  }

  return (
    <div>
      <Header redirect={redirect} />
      <section className="main-section">
        {forecasts.map((item, i) => {
          return <WeatherInfo click={handleClick} id={i} key={i} />;
        })}
      </section>
      {open && (
        <Portal>
          <ModalWindow handler={handleModalClick} id={target} />
        </Portal>
      )}
    </div>
  );
};

export default MainPage;
