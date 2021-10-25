import React, {Component} from 'react';
import Card from '../card';
import './cardList.css';
//import Card from '../card';

class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardList: null
        }

        //this.gotCardList = this.gotCardList.bind(this);
        //this.setCardList = this.setCardList.bind(this);
    }

            elements = this.props.cardData.map(card => {
                return( 
                <div className='card' key={card.id}>
                    <div className='cardHeaderContainer'>
                        <img className='houseImg' alt='houseImage' src="https://loremflickr.com/320/240?random=3"/>
                        <div className='type'>{card.type}</div>
                    </div>
                    <div className='cardDescription'>
                        <div className='title'>{card.title}</div>
                        <div className='address'>{card.address}</div>
                        <div className='cost'>New Properties for Sale from <strong>{card.price}</strong></div>
                        <div className='ownership'>Shared Ownership Available</div>
                    </div>
                    <Card/>
                </div>  
                )      
            })
        
/*
    componentDidUpdate(){
        this.props.onCardList()
        .then(cards => {
            this.setState({cardList: cards})
        }
    )
    }
*/

componentDidUpdate(prevProps) {
    const {onCardList} = this.props;
    if (prevProps.cardData !== this.props.cardData) {
        this.setState({cardList: this.elements})
        console.log('АБНАВЛЯЯЙ')
    }
}

    render() {

        return (
            <div className='cardsContainer'>
                {this.elements}
                <Card/>
            </div>
        )
    }
}

export default CardList;