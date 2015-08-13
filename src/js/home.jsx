import React from 'react'
import Clock from './clock.jsx'

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home container-fluid">
                <div className="Header row">
                    <div className="col-md-2">
                        <div className="Column Header-column Logo-wrapper">
                            Logo
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="Column Header-column Meteo-wrapper Shadowed-column">
                            Meteo
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="Column Header-column Time-wrapper Shadowed-column">
                            <Clock />
                        </div>
                    </div>
                </div>
                <div className="Navigation row">
                    <div className="col-md-12">
                        <div className="Column Navigation-column Shadowed-column">
                            Navigation here
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