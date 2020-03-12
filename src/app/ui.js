export class UI{

    constructor(){
        this.location = document.getElementById('weatherLocation');
        this.des = document.getElementById('weatherDescription');
        this.string = document.getElementById('weatherString');
        this.humidity = document.getElementById('weatherHumidity');
        this.wind = document.getElementById('weatherWind');
    }


    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.des.textContent = weather.weather[0]["description"];
        this.string.textContent = weather.main.temp + ' °C';
        this.humidity.textContent = "Humidity: " + weather.main.humidity + '%';
        this.wind.textContent = 'Wind: ' + weather.wind.speed + ' m/s';
    }
        
}
        
    
        
