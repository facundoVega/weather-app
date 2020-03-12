export class Weather{

    constructor(city, countryCode){
        this.apiKey = 'c8c97c7ad591d5cbd121928df84ed8ac';
        this.city = city;
        this.countryCode = countryCode;
    }
    
    async getWeather(){
       const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
       const response =   await fetch(URI);
       const data = await response.json();
       return data;
    }

    changeLocation(city, countryCode){
        this.countryCode = countryCode;
        this.city = city;
    }

}