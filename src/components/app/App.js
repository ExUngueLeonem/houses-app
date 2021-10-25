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

  updateCardsList = () => {
    let promise = this.gotService.getData()
      .then(item => this.setState({cardData: item}))
      .then(() => console.log('state allo', this.state.cardData))
      return promise
  }

  //я хочу получить массив данных из getData
  //я хочу поместить массив данных в cardList
  //вся эта хуйня асинхронная, поэтому надо, как-то сделать чтобы card list подождал данные

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
