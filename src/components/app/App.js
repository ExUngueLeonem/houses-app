import React, {Component} from 'react';
import './App.css';
import Card from '../card';
import gotService from '../../services/gotService';


class App extends Component {
  gotService = new gotService();

  cons = () => {
    this.gotService.getData();
    //console.log(arr);
  };

 render() {
  return (
    <div className='MainContainer'>
      {this.cons()}
      <header className='header'>
        <h1>
          Our Latest Developments
        </h1>
        <div className='filter'>
          <span>Filter</span>
          <input></input>
        </div>
      </header>
      
      <div className='cardsContainer'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <button className='btnSeeMore'>
        See more >
      </button>

    </div>//mainContainer

  );

 }
}

export default App;
