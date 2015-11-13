import React from 'react'

// Components
//import Logo from './home/logo.jsx'
import Clock from './clock.jsx'
import SearchQuery from './searchQuery.jsx'
import Io from 'socket.io-client'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.socket = Io.connect('http://localhost:8000');
    }

    render() {
        return (
            <div className="Home container-fluid">
                <div className="Header row">
                    <div className="col-md-10">
                    </div>
                    <div className="col-md-2">
                        <div className="Clock-wrapper">
                           <Clock />
                        </div>
                    </div>
                </div>
                <div className="Menus row">
                    <div className="col-md-12">
                        <div className="SearchQuery-wrapper">
                            <SearchQuery />
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    componentDidMount() {
        this.socket.on('wakeUp', this._wakeUp.bind(this));
        this.socket.on('listenForOrder', this._listenForOrder.bind(this));
    }

    _wakeUp(data) {
        console.log('wake up', data);
    }

    _listenForOrder(data) {
        console.log('listen for orders', data);
    }
};

// Props
Home.propTypes = {
};
Home.defaultProps = {
};

export default Home;