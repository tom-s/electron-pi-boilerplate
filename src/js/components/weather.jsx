import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'

// Components
import LocationHeader from './weather/locationHeader.jsx'
import CurrentStatus from './weather/currentStatus.jsx'

// Streams
import WeatherStream from '../streams/weather.js'

const WEATHER = new WeatherStream();

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            forecasts: null
        };
    }

    getState() {
        return this.state;
    }

    componentDidMount() {
        this.handleLocationChange(this.props.initialAddress);
        // Subscribe to streams
        this._unsubscribe = WEATHER.onValue(forecasts => {
            console.log("forecasts", forecasts);
            this.setState({
                forecasts: forecasts
            });
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    handleLocationChange(address) {
        this.setState( this.getState() );
    }

    render() {
        var classes = classnames({

        });

        var forecasts = _.map(this.state.forecasts, (forecast) => {
            console.log("forecast", forecast);
            return (
                <li className="Weather">
                    <LocationHeader
                        address={ "Lyon, France" } />
                    <CurrentStatus
                        temperature={ forecast.temperature }
                        icon={ forecast.icon }
                        summary={ forecast.summary } />
                </li>
            )
        });

        return (
            <div className="Weather-list">
                <ul className={ classes }>
                    {{forecasts}}
                </ul>
            </div>

        );
    }
};

// Props
Weather.propTypes = {
};
Weather.defaultProps = {
};

export default Weather;