import React from 'react'
import classnames from 'classnames'

export default function widgetMixin(Component) {
    const widgetComponent = React.createClass({
        getInitialState() {
            return {
                activated: false
            };
        },

        componentWillUpdate() {
            if(this.props.currentHomeWidgetId === this.props.widgetId) {
                this.setState({
                    activated : true
                });
            } else {
                this.setState({
                    activated : true
                });
            }
        },

        render() {
            var wrapperClasses = classnames({
                Widget: true,
                active: this.state.activated,
            });
            return (
                <div className={wrapperClasses}>
                    <Component {...this.props} {...this.state} />
                </div>
            );
        }
    });
    return widgetComponent;
};