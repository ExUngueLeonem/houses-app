export default class GotService { 
  getData = async () => { 
        const response = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
        let json = await response.json()//.map(this._transformCharacter);
        console.log(json)

        for (let item of json) {
          console.log(item)
        }

        return json//.map(this._transformCharacter);
        
        
     //https://www.anapioficeandfire.com/api
        //https://603e38c548171b0017b2ecf7.mockapi.io/homes           --- нужная апишка
     //http://www.mocky.io/v2/5944e07213000038025b6f30

     //https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10
  }
/* 
  _transformData = (res) => {
    //let id = this._extractId(book);
    let transformedData = {
        title: res.name,
        id: res.numberOfPages,
        address: res.address,
        price: res.price,
        type: res.type           
    }
    //transformedBook.id = this._extractId(book);
    return transformedData
}

getAllCharacters = async () => {
  const res = await fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes');
  return res.map(this._transformCharacter);
}

_transformCharacter = (char) => {
  //let id = this._extractId(char);

  let character = {
      id: char.id,
      title: char.title,
      born: char.born,
      died: char.died,
      culture:char.culture//,
      //id: id   
  }

  character.id = this._extractId(char);

  return character

}

 */

}

