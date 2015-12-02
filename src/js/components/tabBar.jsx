
import React from 'react'
import ClassNames from 'classnames'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
    }

    componentDidMount() {
        /*
        this.responseStream = new ResponseStream();
        this.responseStream.onValue((data) => {
            console.log("data.result", data.result);
            if(data.result.speech) {
                this.setState({
                    response: data.result.speech
                });
            }
        });*/
    }

    componentWillUnmount() {
        //this.responseStream();
    }

    render() {
        return (
            <nav className="bar bar-tab">
                <a className="tab-item active" href="#">
                    <span className="icon icon-home"></span>
                    <span className="tab-label">Home</span>
                </a>
                <a className="tab-item" href="#">
                    <span className="icon icon-person"></span>
                    <span className="tab-label">Profile</span>
                </a>
                <a className="tab-item" href="#">
                    <span className="icon icon-star-filled"></span>
                    <span className="tab-label">Favorites</span>
                </a>
                <a className="tab-item" href="#">
                    <span className="icon icon-search"></span>
                    <span className="tab-label">Search</span>
                </a>
                <a className="tab-item" href="#">
                    <span className="icon icon-gear"></span>
                    <span className="tab-label">Settings</span>
                </a>
            </nav>
        );
    }

};


export default TabBar;