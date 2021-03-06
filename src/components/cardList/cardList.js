import React, {Component} from 'react';
import './cardList.css';
import gotService from '../../services/gotService';

class CardList extends Component {
    gotService = new gotService();

    constructor(props) {
        super(props);

        this.renderCards = this.renderCards.bind(this);
    }

    renderCards(){
        const elements = this.props.cardData.map(card => {
            let rest = '';
            if (card.type === 'Support Available') rest = 'rest';
            console.log('cardList rendering')
            const cardHref = `/house/${card.id}`
            return( 
            <a className='card' key={card.id} href={cardHref}>
                <div className='cardHeaderContainer'>
                 <img className='houseImg' alt='houseImage' src="https://loremflickr.com/320/240?random=3"/>

                    <div className={`type ${rest}`}>{card.type}</div>
                </div>
                <div className='cardDescription'>
                    <div className='title'>{card.title}</div>
                    <div className='address'>{card.address}</div>
                    <div className='cost'>New Properties for Sale from <strong>£{card.price}</strong></div>
                    <div className='ownership'>Shared Ownership Available</div>
                </div>
            </a>  
            )      
        })
        return elements//arr
    }

    render() {
        return (
            <div className='cardsContainer'>
                {this.renderCards(this.props.cardData)}
            </div>
        )
    }
}

export default CardList;