import React from 'react'

// Components
import Logo from './logo.jsx'
import Weather from './weather.jsx'
import Clock from './clock.jsx'
import Navigation from './navigation.jsx'


class Home extends React.Component {
    render() {
        return (
            <div className="Home container-fluid">
                <div className="Header row">
                    <div className="col-md-2">
                        <div className="Column Header-column Logo-wrapper">
                            <Logo widgetId={0} currentHomeWidgetId={this.props.currentHomeWidgetId}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="Column Header-column Meteo-wrapper Shadowed-column">
                            <Weather widgetId={1} currentHomeWidgetId={this.props.currentHomeWidgetId} current={this.props.currentWeather}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Column Header-column Time-wrapper Shadowed-column">
                            <Clock date={this.props.date} widgetId={2} currentHomeWidgetId={this.props.currentHomeWidgetId}/>
                        </div>
                    </div>
                </div>
                <div className="Menus row">
                    <div className="col-md-12">
                        <div className="Column Menus-column Shadowed-column">
                            <Navigation widgetId={3} currentHomeWidgetId={this.props.currentHomeWidgetId}/>
                        </div>
                    </div>
                </div>
                <div className="Content row">
                    <div className="messages col-md-6">
                        Messages here
                    </div>
                    <div className="reminders col-md-6">
                        Reminders here
                    </div>
                </div>
            </div>
        );
    }
};

// Props
Home.propTypes = {
    currentHomeWidgetId: React.PropTypes.number,
    date: React.PropTypes.instanceOf(Date)
};
Home.defaultProps = {
    currentHomeWidgetId : null,
    date: new Date()
};

export default Home;