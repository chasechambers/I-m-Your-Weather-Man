// API KEY 947fa14763c9be5d3b12ac0ba332906f

let fiveDayForecastBox = document.getElementById('five-day-row');
let day1 = document.getElementById('day_1');
let day2 = document.getElementById('day_2');
let day3 = document.getElementById('day_3');
let day4 = document.getElementById('day_4');
let day5 = document.getElementById('day_5');
let searchBox = document.getElementById('search-box');
let searchButton = document.getElementById('search-button');
const errorBox = document.getElementById('error-box');


let userCity = 'lewisville,nc,us';
const weatherURL = 'https://api.openweathermap.org/data/2.5/';
let query = 'q=';
let userUnits = 'imperial';
const appID = '&appid=947fa14763c9be5d3b12ac0ba332906f';

const buildURL = () => {
    query = query + userCity;
    return weatherURL + route + '?' + query + '&units=' + userUnits + appID;
}

searchButton.addEventListener('click', function() {
    if (searchBox && searchBox.value) {
        userCity = searchBox.value;
    } 
    fetchWeather('weather');
    fetchWeather('forecast');
});

const displayWeatherData = (data) => {
    
}

const displayForecastData = (data) => {

}

const fetchWeather = (route) => {
    fetch(buildURL(route))
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            switch (response.status) {
                case 404: 
                    throw new Error('City Not Found');
                default:
                    throw new Error(response.error);
            }
        })
        .then((completedata) => {
            console.log(completedata);
            if (route === 'weather') {
                displayWeatherData(completedata);
            } else {
                displayForecastData(completedata);
            }

        })  
        .catch((err) => {
            errorBox.textContent = err;
        });
};
