import React, { useEffect, useState, Component } from "react";
import Weather from "../components/TestApi";
import { requestWeather } from "../actions/users";
import { connect } from "react-redux";
import WeatherInfo from "../components/WeatherInfo";
import Location from "../components/Location";
import { GEOLOCATION } from "../app.constans";
// const App = props => {
//   const { loading, error, data } = props.weather;
//   const [isLoading, setIsLoading] = useState(loading);
//   const { requestWeather } = props;
//   useEffect(() => {
//     //requestWeather();
//     //setIsLoading(false);
//   });
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
    const { requestWeather } = this.props;
    requestWeather();
  }

  render() {
    const { loading } = this.props.weather;
    console.log(this.props.weather.data.current_observation);
    console.log(this.props.weather.data.forecasts);
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <Weather data={this.props} />
        <Location location={GEOLOCATION} />
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
