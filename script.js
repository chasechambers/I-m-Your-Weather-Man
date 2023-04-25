// API KEY 947fa14763c9be5d3b12ac0ba332906f


fetch('https://api.openweathermap.org/data/2.5/forecast?lat=36.0971&lon=-80.4192&units=imperial&appid=947fa14763c9be5d3b12ac0ba332906f')
    .then((data) => {
        return data.json()
    })
        .then((completeddata) => {
            console.log(completeddata.list[0].main.feels_like);
            });