import React, {Component} from 'react';
import './App.css';
import gotService from '../../services/gotService';
import CardList from '../cardList'
import Filter from '../filter';

class App extends Component {
  gotService = new gotService();

  constructor(props){
    super(props);

    this.state = {
      cardData: [],
      filteredData: []
    }
    this.updateCardsList = this.updateCardsList.bind(this)
    this.onUpdateFilterList = this.onUpdateFilterList.bind(this);
  }

  updateCardsList = async () => { //correct state
    const itemList = await this.gotService.getDataArr()
    this.setState({cardData: itemList, filteredData: itemList})
  }

  componentDidMount(){
    this.updateCardsList()
  }
  
  shouldComponentUpdate(prevState) {
      if (prevState === this.state) return false
      else return true
  }
    
  onUpdateFilterList(e) {
    const checkPoint = this.state.cardData;
    if (!e) return this.state.cardData
    if (!this.state.cardData) return
    
    if (e.target.value.length <= 3) {
    this.setState({filteredData: checkPoint})
    return 
    }

    let filterExp = e.target.value.toLocaleLowerCase();
    let res = this.state.cardData.filter((item) => item.title.toLocaleLowerCase().search(filterExp) !== -1)
    this.setState({filteredData: res})
  }


 render() {
  return (
    <div className='MainContainer'>
      <header className='header'>
        <h1>
          Our Latest Developments
        </h1>
      <Filter onUpdateFilterList={this.onUpdateFilterList}/>
      </header>

      <CardList
        onUpdateCardsList={this.updateCardsList} 
        cardData={this.state.filteredData}
      />

      <button className='btnSeeMore'>
        See more >
      </button>

    </div>//mainContainer

  );

 }
}

export default App;
