import React, {Component} from 'react';
import './card.css';

class Card extends Component {
    //cards = this.props.cardJSX();
    
    render () {
        return (
            
             <div className='card'>
                <div className='cardHeaderContainer'>
                    <img className='houseImg' alt='houseImage' src="https://loremflickr.com/320/240?random=3"/>
                    <div className='type'>Independent living</div>
                </div>
                <div className='cardDescription'>
                    <div className='title'>Brunlees Court</div>
                    <div className='address'>19-23 Cambridge Road, Southport</div>
                    <div className='cost'>New Properties for Sale from <strong>£214,999</strong></div>
                    <div className='ownership'>Shared Ownership Available</div>
                </div>
            </div>        
        )
    }
}
export default Card;