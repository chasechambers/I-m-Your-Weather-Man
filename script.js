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
let currentCityIcon = document.getElementById('current-city-icon')
let currentWeatherSection = document.getElementById('current-weather-section');
let searchBox = document.getElementById('search-box');
let searchButton = document.getElementById('search-button');
const errorBox = document.getElementById('error-box');
let buttonList = document.getElementById('button-list');
let buttonLinks = document.getElementById('buttonLinks');
let fiveDaySection = document.getElementById('five-day-section');


const appID = '947fa14763c9be5d3b12ac0ba332906f';


// SEARCH BUTTON

searchButton.addEventListener('click', function(e) {
    console.log(e);
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    if (city && !state) {
        userCity = city;
    } else if (city && state) {
        userCity = city + ',' + state
    } else if (city && country) {
        userCity = city + ',' + country
    }
    clearButtons();
    saveCity(userCity);
    fetchCity(userCity);
    fetchWeather(userCity);
    displayCities(userCity);
    currentWeatherSection.style.display = "initial";
    fiveDaySection.style.display = "initial";
});

// LOCAL STORAGE

let saveCity = (userCity) => {
    let allCities = JSON.parse(localStorage.getItem('saved-cities')) || [];
    if(!allCities.includes(userCity)) {
        allCities.unshift(userCity);
        localStorage.setItem('saved-cities', JSON.stringify(allCities));
    }
};

// HISTORY BUTTON CREATOR 

buttonLinks.addEventListener('click', function(e) {
    fetchCity(e.target.innerText);
    fetchWeather(e.target.innerText);
    currentWeatherSection.style.display = "initial";
    fiveDaySection.style.display = "initial";
});

let displayCities = (userCity) => {
    allCities=JSON.parse(localStorage.getItem('saved-cities')) || [];
    if( allCities.length >=1 ) {   //loop code here
    let i = 0;
    for (i=0; i<allCities.length; i++) {
        
        var li = document.createElement("li");
        let createCityButton = document.createElement('button');
        createCityButton.innerHTML = allCities[i];
        createCityButton.classList.add("btn-primary", "btn")
        li.appendChild(createCityButton);
        buttonList.appendChild(li);
    }

}
};

let clearButtons = () => {
    if (buttonList) {
        buttonList.innerHTML = "";
      }
}



// THIS FETCHES THE 5 DAY FORECAST

function fetchCity(userCity) {
    let urlQuery = `https://api.openweathermap.org/data/2.5/forecast?q=${userCity}&units=imperial&appid=${appID}`;
    return fetch(urlQuery)       
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
            day1Day.textContent = dayjs(completedata.list[0].dt*1000).format('MM-DD-YYYY');
                day1Img.src = `http://openweathermap.org/img/w/${completedata.list[0].weather[0].icon}.png`;
                day1Temp.textContent = 'Temp: ' + completedata.list[0].main.temp + ' °F';
                day1Wind.textContent =  'Wind: ' + completedata.list[0].wind.speed + ' MPH';
                day1Humidity.textContent = 'Humidity: ' + completedata.list[0].main.humidity + ' %';
                day2Day.textContent = dayjs(completedata.list[8].dt*1000).format('MM-DD-YYYY');
                day2Img.src = `http://openweathermap.org/img/w/${completedata.list[8].weather[0].icon}.png`;
                day2Temp.textContent = 'Temp: ' + completedata.list[8].main.temp + ' °F';
                day2Wind.textContent = 'Wind: ' + completedata.list[8].wind.speed + ' MPH';
                day2Humidity.textContent = 'Humidity: ' + completedata.list[8].main.humidity + ' %';
                day3Day.textContent = dayjs(completedata.list[16].dt*1000).format('MM-DD-YYYY');
                day3Img.src = `http://openweathermap.org/img/w/${completedata.list[16].weather[0].icon}.png`;
                day3Temp.textContent = 'Temp: ' + completedata.list[16].main.temp + ' °F';
                day3Wind.textContent = 'Wind: ' + completedata.list[16].wind.speed + ' MPH';
                day3HUmidity.textContent = 'Humidity: ' + completedata.list[16].main.humidity + ' %';
                day4Day.textContent = dayjs(completedata.list[24].dt*1000).format('MM-DD-YYYY');
                day4Img.src = `http://openweathermap.org/img/w/${completedata.list[24].weather[0].icon}.png`;
                day4Temp.textContent = 'Temp: ' + completedata.list[24].main.temp + ' °F';
                day4Wind.textContent = 'Wind: ' + completedata.list[24].wind.speed + ' MPH';
                day4Humidity.textContent = 'Humidity: ' + completedata.list[24].main.humidity + ' %';
                day5Day.textContent = dayjs(completedata.list[32].dt*1000).format('MM-DD-YYYY');
                day5Img.src = `http://openweathermap.org/img/w/${completedata.list[32].weather[0].icon}.png`;
                day5Temp.textContent = 'Temp: ' + completedata.list[32].main.temp + ' °F';
                day5Wind.textContent = 'Wind: ' + completedata.list[32].wind.speed + ' MPH';
                day5Humidity.textContent = 'Humidity: ' + completedata.list[32].main.humidity + ' %';
        })
        .catch((err) => {
            errorBox.textContent = err;
        });
};

// THIS FETCHES THE CURRENT WEATHER

function fetchWeather(userCity) {
    let urlFetchWeather = `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=imperial&appid=${appID}`
    return fetch(urlFetchWeather)
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
                currentCityDay.textContent = completedata.name + ' ' + dayjs(completedata.dt*1000).format('MM-DD-YYYY');
                currentCityIcon.src = `http://openweathermap.org/img/w/${completedata.weather[0].icon}.png`;
                currentTemp.textContent = 'Temp: ' + completedata.main.temp + ' °F';
                currentWind.textContent = 'Wind: ' + completedata.wind.speed + ' MPH';
                currentHumidity.textContent = 'Humidity: ' + completedata.main.humidity + ' %';
        })
        .catch((err) => {
            errorBox.textContent = err;
        });
};

displayCities();