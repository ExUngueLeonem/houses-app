import React, {Component} from 'react';
import Card from '../card';
import './cardList.css';
import gotService from '../../services/gotService';
//import Card from '../card';

class CardList extends Component {
    gotService = new gotService();

    constructor(props) {
        super(props);

        this.state = {
            cardList: 'хуй там плавал'
        }

        this.renderCards = this.renderCards.bind(this);
        //this.setCardList = this.setCardList.bind(this);
    }

    renderCards(){
        const elements = this.state.cardList.map(card => {
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
        return elements//arr
    }

    componentDidMount(){
        fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
            .then(response => response.json())
            .then(data => this.setState({cardList: data}))
            .then(console.log(this.state.cardList))
/*         
        this.props.onUpdateCardsList()
            .then(this.getJSXFromObj())
            .then(item => this.setState({cardList: item}))
            .then(console.log(this.state.cardList))
            //.then()
 */    
}

    componentDidUpdate(prevProps) {
        if (prevProps.cardData !== this.props.cardData) {
            this.setState({cardList: this.elements})    //вопрос
            console.log('АБНАВЛЯЯЙ')
        }
    }

    render() {
        return (
            <div className='cardsContainer'>
                {/* {this.state.cardList} */}
                <Card/>
            </div>
        )
    }
}

export default CardList;