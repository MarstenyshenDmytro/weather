import React, { useEffect, useState, Component } from "react";
import { requestWeather } from "../actions/users";
import { connect } from "react-redux";
import WeatherInfo from "../components/weatherInfo/WeatherInfo";
import Location from "../components/location/Location";
import "./app.scss";

// const App = props => {
//   const { loading, error, data } = props.weather;
//   //const [isLoading, setIsLoading] = useState(loading);
//   const { requestWeather } = props;
//   useEffect(() => {
//     //requestWeather();
//     //console.log(loading);
//     //setIsLoading(false);
//   }, [data]);
//   console.log(props);
//   return (
//     <div>
//       <span>It's work</span>;
//       <Weather />
//     </div>
//   );
// };

class App extends Component {
  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    const { requestWeather } = this.props;
    if (!navigator.geolocation) {
      return "Geolocation is not supported by Your browser";
    } else {
      navigator.geolocation.getCurrentPosition(requestWeather, () =>
        console.log("error")
      );
    }
  }

  render() {
    const { loading } = this.props.weather;
    const { forecasts } = this.props.weather.data;
    const { location } = this.props.weather.data;
    // console.log(this.props.weather.data.current_observation);
    //console.log(this.props.weather.data);
    //console.log(typeof forecasts);
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <Location location={location} />
        <section className="main-section">
          {forecasts ? (
            Object.keys(forecasts).map(item => {
              return <WeatherInfo key={item} info={forecasts[item]} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps, { requestWeather })(App);
