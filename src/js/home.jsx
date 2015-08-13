import React from 'react'
import Card from './card.jsx'
import CardsList from './cardsList.jsx'
import Clock from './clock.jsx'

var cards  = [
    {
        title: 'test',
        steps: [
            {content: 'adsddf'},
            {content: 'aafdsfds', style: 'italic'},
            {content: 'poop'}
        ]
    },
    {
        title: 'mijoteuse',
        steps: [
            {content: 'ca a rendu Hester & Thomas heureux'},
            {content: 'faisons du pulled porc dans la mijoteuse', style: 'italic'},
            {content: 'crock-pot'}
        ]
    }
];

var todayCard = cards[0];

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <h1> Hello {this.props.name}! </h1>
                <div className="Card-wrapper">
                    <Card title={todayCard.title} steps={todayCard.steps}/>
                </div>

                <div className="Clock-wrapper">
                    <Clock/>
                </div>

                <div className="CardsList-wrapper">
                    <CardsList cards={cards} />
                </div>
            </div>
        );
    }
};