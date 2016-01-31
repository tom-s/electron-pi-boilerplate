// Tools
import React from 'react'
import _ from 'lodash'

// Streams
import ConfirmationStream from '../streams/confirmationStream.js'

class Confirmation extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
        this.state = {
            confirm: true
        };
    }

    componentDidMount() {
        ConfirmationStream.subscribe((confirm) => {
            console.log("confirm ?", confirm);
            this.setState({
                confirm: confirm
            });
            window.clearTimeout(this.timeout);
            this.timeout = window.setTimeout(() => {
                this.setState({
                    confirm: null
                });
            }, 3000);
        });
    }

    componentWillUnmount() {
        ConfirmationStream.dispose();
    }

    render() {
        if(this.state.confirm === null) return null;

        return (
            <div className="Confirmation Confirmation-success">
              <div className="Circle"></div>
              <div className="Circle"></div>    
            </div> 

        );
    }
};

export default Confirmation;