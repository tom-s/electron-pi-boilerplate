import React from 'react'
import Clock from './clock.jsx'

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="logo col-sm-1 col-md-4 col-lg-3">logo</div>
                    <div className="meteo col-lg-5">meteo</div>
                    <div className="time col-lg-4"><Clock/></div>
                </div>
                <div className="row">
                    <div className="Navigation col-sm-1 col-md-4 col-lg-12">
                        Navigation here
                    </div>
                </div>
                <div className="row">
                    <div className="messages col-sm-1 col-md-7 col-lg-6">
                        Messages here
                    </div>
                    <div className="reminderscol-lg-6">
                        Reminders here
                    </div>
                </div>
            </div>
        );
    }
};