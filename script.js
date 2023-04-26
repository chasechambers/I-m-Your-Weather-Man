// API KEY 947fa14763c9be5d3b12ac0ba332906f

let fiveDayForecastBox = document.getElementById('five-day-row');
let day1Day = document.getElementById('day-1-day');
let day1Img = document.getElementById('day-1-img');
let day1Temp = document.getElementById('day-1-temp');
let day1Wind = document.getElementById('day-1-wind');
let day1Humidity = document.getElementById('day-1-humidity');
let day2Day = document.getElementById('day-2-day');
let day2Img = document.getElementById('day-2-img');
let day2Temp = document.getElementById('day-2-temp');
let day2Wind = document.getElementById('day-2-wind');
let day2Humidity = document.getElementById('day-2-humidity');
let day3Day = document.getElementById('day-3-day');
let day3Img = document.getElementById('day-3-img');
let day3Temp = document.getElementById('day-3-temp');
let day3Wind = document.getElementById('day-3-wind');
let day3HUmidity = document.getElementById('day-3-humidity');
let day4Day = document.getElementById('day-4-day');
let day4Img = document.getElementById('day-4-img');
let day4Temp = document.getElementById('day-4-temp');
let day4Wind = document.getElementById('day-4-wind');
let day4Humidity = document.getElementById('day-4-humidity');
let day5Day = document.getElementById('day-5-day');
let day5Img = document.getElementById('day-5-img');
let day5Temp = document.getElementById('day-5-temp');
let day5Wind = document.getElementById('day-5-wind');
let day5Humidity = document.getElementById('day-5-humidity');
let currentTemp = document.getElementById('current-temp');
let currentWind = document.getElementById('current-wind');
let currentHumidity = document.getElementById('current-humidity');
let currentCityDay = document.getElementById('current-city-day');
let currentWeatherSection = document.getElementById('current-weather-section');

let localStorageItem = [];


let searchBox = document.getElementById('search-box');
let searchButton = document.getElementById('search-button');
const errorBox = document.getElementById('error-box');


let userCity = 'lewisville,nc,us';
const weatherURL = 'https://api.openweathermap.org/data/2.5/';
let query = 'q=';
let userUnits = 'imperial';
const appID = '&appid=947fa14763c9be5d3b12ac0ba332906f';

const buildURL = (route) => {
    query = query + userCity;
    return weatherURL + route + '?' + query + '&units=' + userUnits + appID;
}

searchButton.addEventListener('click', function() {
    if (searchBox && searchBox.value) {
        userCity = searchBox.value;
    } 
    fetchWeather('weather');
    fetchWeather('forecast');
    currentWeatherSection.style.display = "initial";
    displayForecastData();
});



function fetchWeather(route) {
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
            // console.log(completedata);
            if (route === 'weather') {
                // displayWeatherData();
                currentCityDay.textContent = completedata.name + ' ' + dayjs(completedata.dt*1000).format('MM-DD-YYYY') + ' ' ;
                currentTemp.textContent = 'Temp: ' + completedata.main.temp + ' °F';
                currentWind.textContent = 'Wind: ' + completedata.wind.speed + ' MPH';
                currentHumidity.textContent = 'Humidity: ' + completedata.main.humidity + ' %';

            } else {
                // displayForecastData();

                // day1Day.textContent = dayjs(completedata.list[5].dt*1000).format('MM-DD-YYYY');
                // day1Img.src = `http://openweathermap.org/img/w/${completedata.list[5].weather[0].icon}.png`;
                // day1Temp.textContent = 'Temp: ' + completedata.list[5].main.temp + ' °F';
                // day1Wind.textContent =  'Wind: ' + completedata.list[5].wind.speed + ' MPH';
                // day1Humidity.textContent = 'Humidity: ' + completedata.list[5].main.humidity + ' %';
                // day2Day.textContent = dayjs(completedata.list[13].dt*1000).format('MM-DD-YYYY');
                // day2Img.src = `http://openweathermap.org/img/w/${completedata.list[13].weather[0].icon}.png`;
                // day2Temp.textContent = 'Temp: ' + completedata.list[13].main.temp + ' °F';
                // day2Wind.textContent = 'Wind: ' + completedata.list[13].wind.speed + ' MPH';
                // day2Humidity.textContent = 'Humidity: ' + completedata.list[13].main.humidity + ' %';
                // day3Day.textContent = dayjs(completedata.list[21].dt*1000).format('MM-DD-YYYY');
                // day3Img.src = `http://openweathermap.org/img/w/${completedata.list[21].weather[0].icon}.png`;
                // day3Temp.textContent = 'Temp: ' + completedata.list[21].main.temp + ' °F';
                // day3Wind.textContent = 'Wind: ' + completedata.list[21].wind.speed + ' MPH';
                // day3HUmidity.textContent = 'Humidity: ' + completedata.list[21].main.humidity + ' %';
                // day4Day.textContent = dayjs(completedata.list[29].dt*1000).format('MM-DD-YYYY');
                // day4Img.src = `http://openweathermap.org/img/w/${completedata.list[29].weather[0].icon}.png`;
                // day4Temp.textContent = 'Temp: ' + completedata.list[29].main.temp + ' °F';
                // day4Wind.textContent = 'Wind: ' + completedata.list[29].wind.speed + ' MPH';
                // day4Humidity.textContent = 'Humidity: ' + completedata.list[29].main.humidity + ' %';
                // day5Day.textContent = dayjs(completedata.list[37].dt*1000).format('MM-DD-YYYY');
                // day5Img.src = `http://openweathermap.org/img/w/${completedata.list[37].weather[0].icon}.png`;
                // day5Temp.textContent = 'Temp: ' + completedata.list[37].main.temp + ' °F';
                // day5Wind.textContent = 'Wind: ' + completedata.list[37].wind.speed + ' MPH';
                // day5Humidity.textContent = 'Humidity: ' + completedata.list[37].main.humidity + ' %';

                localStorageItem.push(completedata);

                }

                
        })
        .catch((err) => {
            errorBox.textContent = err;
        });
}

// const displayWeatherData = (data) => {
//     currentCityDay.textContent = completedata.name + ' ' + dayjs(completedata.dt*1000).format('MM-DD-YYYY') + ' ' ;
//                 currentTemp.textContent = 'Temp: ' + completedata.main.temp + ' °F';
//                 currentWind.textContent = 'Wind: ' + completedata.wind.speed + ' MPH';
//                 currentHumidity.textContent = 'Humidity: ' + completedata.main.humidity + ' %';
    
// }

const displayForecastData = (data) => {
    console.log(dayjs(localStorageItem.list[5].dt*1000).format('MM-DD-YYYY'));

    // day1Day.textContent = dayjs(localStorageItem[0].list.dt*1000).format('MM-DD-YYYY');
    // day1Img.src = `http://openweathermap.org/img/w/${localStorageItem[0].list[5].weather[0].icon}.png`;
    // day1Temp.textContent = 'Temp: ' + localStorageItem.list[5].main.temp + ' °F';
    // day1Wind.textContent =  'Wind: ' + localStorageItem.list[5].wind.speed + ' MPH';
    // day1Humidity.textContent = 'Humidity: ' + localStorageItem.list[5].main.humidity + ' %';
    // day2Day.textContent = dayjs(completedata.list[13].dt*1000).format('MM-DD-YYYY');
    // day2Img.src = `http://openweathermap.org/img/w/${completedata.list[13].weather[0].icon}.png`;
    // day2Temp.textContent = 'Temp: ' + completedata.list[13].main.temp + ' °F';
    // day2Wind.textContent = 'Wind: ' + completedata.list[13].wind.speed + ' MPH';
    // day2Humidity.textContent = 'Humidity: ' + completedata.list[13].main.humidity + ' %';
    // day3Day.textContent = dayjs(completedata.list[21].dt*1000).format('MM-DD-YYYY');
    // day3Img.src = `http://openweathermap.org/img/w/${completedata.list[21].weather[0].icon}.png`;
    // day3Temp.textContent = 'Temp: ' + completedata.list[21].main.temp + ' °F';
    // day3Wind.textContent = 'Wind: ' + completedata.list[21].wind.speed + ' MPH';
    // day3HUmidity.textContent = 'Humidity: ' + completedata.list[21].main.humidity + ' %';
    // day4Day.textContent = dayjs(completedata.list[29].dt*1000).format('MM-DD-YYYY');
    // day4Img.src = `http://openweathermap.org/img/w/${completedata.list[29].weather[0].icon}.png`;
    // day4Temp.textContent = 'Temp: ' + completedata.list[29].main.temp + ' °F';
    // day4Wind.textContent = 'Wind: ' + completedata.list[29].wind.speed + ' MPH';
    // day4Humidity.textContent = 'Humidity: ' + completedata.list[29].main.humidity + ' %';
    // day5Day.textContent = dayjs(completedata.list[37].dt*1000).format('MM-DD-YYYY');
    // day5Img.src = `http://openweathermap.org/img/w/${completedata.list[37].weather[0].icon}.png`;
    // day5Temp.textContent = 'Temp: ' + completedata.list[37].main.temp + ' °F';
    // day5Wind.textContent = 'Wind: ' + completedata.list[37].wind.speed + ' MPH';
    // day5Humidity.textContent = 'Humidity: ' + completedata.list[37].main.humidity + ' %';
 }
    

// TEST CODE - https://stackoverflow.com/questions/70409217/how-to-use-local-storage-on-append-child

// let buttonsLength = 0;

//  let buttonCreater = () => { addEventListener('click', function () {
//     createButton();
//     buttonsLength++;
//     localStorage.setItem('buttonsLength', buttonsLength)
//   });

//   function createButton() {
    // var button = document.createElement('button');
    // button.innerHTML = completedata.name;
    // document.getElementById('buttonLinks').appendChild(button);
//   }

//   window.addEventListener('load', (event) => {
//     buttonsLength = Number(localStorage.getItem('buttonsLength')) || 0;
//     for (let i = 0; i < buttonsLength; i++) {
//       createButton();
//     }
// });
//  };