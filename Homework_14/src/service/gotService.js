export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`
             + `, received ${res.status}`);
        }
       
        return await res.json();
    }

    getAllCharacter = async () => {
       const res = await this.getResource(`/characters?page=5&pageSize=10`);
       return res.map(this._transformCharacter);
    }

    getCharacter = async (id) =>  {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }

    ifSet(data) {
        if(data) {
            return data;
        } else {
            return 'no data!';
        }
    }

    _extractId = (item) => {
         const idRegExp = /\/([0-9]*)$/;
         return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.ifSet(char.name),
            gender: this.ifSet(char.gender),
            born: this.ifSet(char.born),
            died: this.ifSet(char.died),
            culture: this.ifSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.ifSet(house.name),
            region: this.ifSet(house.region),
            words: this.ifSet(house.words),
            titles:this.ifSet(house.titles),
            overlord: this.ifSet(house.overlord),
            ancestralWeapons: this.ifSet(house.ancestralWeapons)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.ifSet(book.name),
            numberOfPages: this.ifSet(book.bumberOfPages),
            publiser: this.ifSet(book.publiser),
            released: this.ifSet(book.released)
        }
    }
  
}

