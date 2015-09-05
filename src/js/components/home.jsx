import React from 'react'
import PictureShow from 'react-picture-show'

// Components
import Logo from './home/logo.jsx'
import Weather from './home/weather.jsx'
import Clock from './home/clock.jsx'
import Navigation from './home/navigation.jsx'


class Home extends React.Component {
    render() {
        return (
            <div className="Home container-fluid">
                <div className="Header row">
                    <div className="col-md-2">
                        <div className="Column Header-column Logo-wrapper">
                            <Logo widgetId={0}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="Column Header-column Weather-wrapper Shadowed-column">
                             <Weather widgetId={1}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Column Header-column Time-wrapper Shadowed-column">
                            <Clock widgetId={2}/>
                        </div>
                    </div>
                </div>
                <div className="Menus row">
                    <div className="col-md-12">
                        <div className="Column Menus-column Shadowed-column">
                            <Navigation widgetId={3}/>
                        </div>
                    </div>
                </div>
                <div className="Pages row">
                    <PictureShow className="col-md-12 Pages-wrapper">
                        <div className="Page">
                            page 1
                        </div>
                        <div className="Page">
                            page 2
                        </div>
                        <div className="Page">
                            page 3
                        </div>
                        <div className="Page">
                            page 4
                        </div>
                        <div className="Page">
                            page 5
                        </div>
                    </PictureShow>
                </div>
            </div>
        );
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;