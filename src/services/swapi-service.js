export default class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _apiImg = 'https://starwars-visualguide.com/assets/img';
  
  getResuorce = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    
    return await res.json();
  }
  
  getPlanet = async (id) => {
    const planet = await this.getResuorce(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  
  getAllPeople = async () => {
    const people = await this.getResuorce(`/people/`);
    return people.results.map(this._transformPerson);
  }
  
  getPerson = async (id) => {
    const person = await this.getResuorce(`/people/${id}/`);
    return this._transformPerson(person);
  }
  
  getUrlPersonImg = (id) => {
    return `${this._apiImg}/characters/${id}.jpg`;
  }
  
  getAllStarShips = async () => {
    const starships = await this.getResuorce('/starships/');
    return starships.results.map(this._transformStarship);
  }
  
  getStarship = async (id) => {
    const starship = await this.getResuorce(`/starships/${id}/`);
    return this._transformStarship(starship);
  }
  
  getUrlStarshipImg = (id) => {
    return `${this._apiImg}/starships/${id}.jpg`;
  }
  
  regExpIdElement(url) {
    return url.replace(/[^\d]/g, '');
  }
  
  _transformPlanet = (planet) => {
    return {
      id: this.regExpIdElement(planet.url),
      name: planet.name,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      population: planet.population
    };
  }
  
  _transformPerson = (person) => {
    return {
      id: this.regExpIdElement(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      urlPic: this.getUrlPersonImg(this.regExpIdElement(person.url))
    };
  }
  
  _transformStarship = (starship) => {
    return {
      id: this.regExpIdElement(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      length: starship.length,
      urlPic: this.getUrlStarshipImg(this.regExpIdElement(starship.url))
    }
  }
}