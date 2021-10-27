export default class GotService { 
  getData = async () => { 
        const res = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
        
        if (!res.ok) {
          throw new Error(`get Data fetch Error ${res.status}`)
        }
        
        return await res.json();  
  }

  getDataArr = async () => {
    return await this.getData().then(res => res.map(this._transformData))
  }

  //getData().map(_transformData) --> потом в стейт

  _transformData = (card) => {
    
      let obj = {
        address: card.address,
        id: card.id,
        price: (card.price/1000).toFixed(3),
        title: card.title,
        type: card.type
      };

      switch (obj.type) {
        case 'SupportAvailable':
            obj.type = 'Support Available'    
            break;
        case 'IndependentLiving':
            obj.type = 'Independent Living'    
            break;
        default:
            break;
      }

      return obj;

    //я должен вернуть один объект
    
  }
}


    //https://www.anapioficeandfire.com/api
    //https://603e38c548171b0017b2ecf7.mockapi.io/homes           --- нужная апишка
    //http://www.mocky.io/v2/5944e07213000038025b6f30

    //https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10