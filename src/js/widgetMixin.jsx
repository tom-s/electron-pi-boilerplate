import React from 'react'
import classnames from 'classnames'

function widgetMixin(Component) {
    const widgetComponent = React.createClass({
        getInitialState() {
            return {
                activated: false
            };
        },

        componentWillUpdate(nextProps) {
            if(this.props.currentHomeWidgetId !== nextProps.currentHomeWidgetId) {
                this.setState({
                    activated : nextProps.currentHomeWidgetId === this.props.widgetId
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

widgetMixin.propTypes = {
    currentHomeWidgetId: React.PropTypes.number
};
widgetMixin.defaultProps = {
    currentHomeWidgetId : null
};

export default widgetMixin;