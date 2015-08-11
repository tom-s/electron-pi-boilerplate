import React from 'react'
import Card from './card.jsx'
import CardsList from './cardsList.jsx'

var cards  = [
    {
        title: 'caca',
        steps: [
            {content: 'ca sort de tes fesses'},
            {content: 'tu pues comme du caca', style: 'italic'},
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
            <div className="home">
                <h1> Hello {this.props.name}! </h1>
                <div className="card-container">
                    <Card title={todayCard.title} steps={todayCard.steps}/>
                </div>

                <div className="cardsList-container">
                    <CardsList cards={cards} />
                </div>
            </div>
        );
    }
};