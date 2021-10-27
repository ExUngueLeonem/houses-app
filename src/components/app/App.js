import React, {Component} from 'react';
import './App.css';
import gotService from '../../services/gotService';
import CardList from '../cardList'


class App extends Component {
  gotService = new gotService();

  constructor(props){
    super(props);

    this.state = {
      cardData: []
    }

    this.updateCardsList = this.updateCardsList.bind(this);
  }

  updateCardsList = async () => { //correct state
    const itemList = await this.gotService.getDataArr()
    this.setState({cardData: itemList})
    console.log('APP STATE', this.state)        
  }

  componentDidMount(){
    this.updateCardsList()
  }
 
/* 
    componentDidUpdate(prevProps){
      this.updateCardsList()
    } 
*/

 render() {
  return (
    <div className='MainContainer'>
      <header className='header'>
        <h1>
          Our Latest Developments
        </h1>
        <div className='filter'>
          <span>Filter</span>
          <input></input>
        </div>
      </header>
      <CardList
        onUpdateCardsList={this.updateCardsList} 
        cardData={this.state.cardData}
        />
      <button className='btnSeeMore'>
        See more >
      </button>

    </div>//mainContainer

  );

 }
}

export default App;
