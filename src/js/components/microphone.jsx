
import React from 'react'
import ClassNames from 'classnames'

// Images
var imgMicrophone = require("../../images/retromicrophone.jpg");

class Microphone extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var backgroundClasses = ClassNames({
            'Background': true,
            'active': this.props.active
        });
        console.log("render microphone", backgroundClasses);

        return (
            <div className={backgroundClasses}>
                <img src={imgMicrophone}/>
                <div className="Microphone"></div>
            </div>
        );
    }


};

// Props
Microphone.propTypes = {
    active: React.PropTypes.bool
};
Microphone.defaultProps = {
    active: false
};

export default Microphone;