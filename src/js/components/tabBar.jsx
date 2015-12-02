
import React from 'react'
import classnames from 'classnames'

class TabBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        var tools = [
            {
                icon: 'icon-person',
                label: 'Profile'
            }
        ]; // temp

        var tabs = _.map(tools, function(tool, i) {
            var classes = classnames({
                'tab-item': true,
            });
            return (
                <a className={classes} href="#" key={'tab' + i}>
                    <span className="icon icon-person"></span>
                    <span className="tab-label">{tool.label}</span>
                </a>
            )
        });

        return (
            <nav className="bar bar-tab">
                <a className="tab-item active" href="#">
                    <span className="icon icon-home"></span>
                    <span className="tab-label">Home</span>
                </a>
                {tabs}
            </nav>
        );
    }

};


export default TabBar;