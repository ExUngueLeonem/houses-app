import React, {Component} from 'react';
import './App.css';
import gotService from '../../services/gotService';
import CardList from '../cardList'


class App extends Component {
  gotService = new gotService();

  constructor(props){
    super(props);

    this.state = {
      cardData: [],
      filteredData: []
    }
    this.updateFilterList = this.updateFilterList.bind(this)
    this.updateCardsList = this.updateCardsList.bind(this);
  }

  updateCardsList = async () => { //correct state
    const itemList = await this.gotService.getDataArr()
    this.setState({cardData: itemList})
    //console.log('APP STATE', this.state)        
  }

  componentDidMount(){
    this.updateCardsList()
  }
 
/* //предотвратить лишние перерисовки
    componentDidUpdate(prevProps){
      
    } 
*/
    updateFilterList (e) {
      if (!e) return this.state.cardData
      if (!this.state.cardData) return
      
      if (e.target.value.length <= 3) {
        this.updateCardsList() 
        return
      }
      let filterExp = e.target.value.toLocaleLowerCase();

      let res = this.state.cardData.filter((item) => item.title.toLocaleLowerCase().search(filterExp) !== -1)
      console.log(this.state.cardData)
      console.log('FILTER', res.filter((item) => item.title.toLocaleLowerCase().search(filterExp) !== -1))
      this.setState({cardData: res})
      //return res;
    }


 render() {

   console.log('App rendering')
   console.log('APP STATE', this.state)
  return (
    <div className='MainContainer'>
      <header className='header'>
        <h1>
          Our Latest Developments
        </h1>

        <div className='filter'>
          <span>Filter</span>
          <input onChange={this.updateFilterList}></input>
        </div>
        {/* на input нужно повесить событие, которое будет доставать e.target.value
            должна запускаться функция, которая будет:
              если символов в инпуте <3, то она ретернит cardData
              если нет, то функция фильтрует cardData и записывает filteredData. 
              !!! обязательно условие на апдейт, чтобы много раз не отрисовывалось
              в cardList передавать результат выполнения этой функции
              
        */}
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
