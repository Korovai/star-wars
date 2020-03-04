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
}