import React from 'react'

class SearchQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'searchResult': '',
            'currentlyDisplayed': '',
            'currentLetterIndex': 0
        }
    }

    componentDidMount() {
        this.setState({
            searchResult: 'This is a super test ! I hope it works !'
        }, this._tick);
    }

    render() {
        return (
            <div className="SearchResult">
                {this.state.currentlyDisplayed}
            </div>
        );
    }

    _tick() {
        var currentlyDisplayed = this.state.searchResult.substr(0, this.state.currentLetterIndex);
        this.setState({
            currentlyDisplayed: currentlyDisplayed,
            currentLetterIndex: ++this.state.currentLetterIndex
        });

        if(this.state.currentLetterIndex <= this.state.searchResult.length) {
            window.setTimeout(function() {
                this._tick();
            }.bind(this), 50);
        }
    }
};

// Props
SearchQuery.propTypes = {
};
SearchQuery.defaultProps = {
};

export default SearchQuery;