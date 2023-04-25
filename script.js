// API KEY 947fa14763c9be5d3b12ac0ba332906f

let fiveDayForecastBox = document.getElementById('five-day-row');
let day1 = document.getElementById('day_1');
let day2 = document.getElementById('day_2');
let day3 = document.getElementById('day_3');
let day4 = document.getElementById('day_4');
let day5 = document.getElementById('day_5');

fetch('https://api.openweathermap.org/data/2.5/forecast?lat=36.0971&lon=36.0971&units=imperial&appid=947fa14763c9be5d3b12ac0ba332906f')
    .then((data) => {
        console.log(data);
        return data.json()
    })
        .then((completedata) => {
            console.log(completedata)

            


            let temp1 = completedata.list[0].main.temp;
            let temp2 = completedata.list[8].main.temp;
            let temp3 = completedata.list[16].main.temp;
            let temp4 = completedata.list[24].main.temp;
            let temp5 = completedata.list[32].main.temp;

            let wind1 = completedata.list[0].wind.speed;
            let wind2 = completedata.list[8].wind.speed;
            let wind3 = completedata.list[16].wind.speed;
            let wind4 = completedata.list[24].wind.speed;
            let wind5 = completedata.list[32].wind.speed;

            let humidity1 = completedata.list[0].main.humidity;
            let humidity2 = completedata.list[8].main.humidity;
            let humidity3 = completedata.list[16].main.humidity;
            let humidity4 = completedata.list[24].main.humidity;
            let humidity5 = completedata.list[32].main.humidity;

            day1.append(`Temp: ${temp1} °F`);
            day2.append(`Temp: ${temp2} °F`);
            day3.append(`Temp: ${temp3} °F`);
            day4.append(`Temp: ${temp4} °F`);
            day5.append(`Temp: ${temp5} °F`);

            day2.append(`Wind: ${wind2} mph`);
            day1.append(`Wind: ${wind1} mph`);
            day3.append(`Wind: ${wind3} mph`);
            day4.append(`Wind: ${wind4} mph`);
            day5.append(`Wind: ${wind5} mpF`);

            day1.append(`Humidity: ${humidity1} %`);
            day2.append(`Humidity: ${humidity2} %`);
            day3.append(`Humidity: ${humidity3} %`);
            day4.append(`Humidity: ${humidity4} %`);
            day5.append(`Humidity: ${humidity5} %`);

            

            });
           
         
       

       

