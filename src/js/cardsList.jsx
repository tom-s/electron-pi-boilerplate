import React from 'react'
import _ from 'lodash'

export default class CardsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCardIndex: 0
        };
    }
    render() {
        var cardsList = _.map(this.props.cards, function(card, i) {
          return (
              <li className="cardListItem" onClick={_.bind(this.clickCard, this, i)}>
                  {card.title}
              </li>
          );
        }.bind(this));

        return (

            <ul className="cardsList">
                {cardsList}
            </ul>
        );
    }

    clickCard(cardIndex) {
        console.log("click on card", cardIndex);
        this.setState({
            currentCardIndex: cardIndex
        });
    }
};

CardsList.propTypes = {
    cards: React.PropTypes.array,
};
CardsList.defaultProps = {
    cards: []
};