// Objects


const person={
    name: "shahzad",
    age: "20",
    eyecolour: "brown",
}

const person1={
    name: "ali",
    age: "23",
    eyecolour: "black",
}

const person2= JSON.stringify(person);
console.log(person);

// Weather App

async function getweather(){
    const citynameref= document.getElementById("cityname");
    const responseref= document.getElementById("weather");
    
    const city = citynameref.value;
    console.log(city);
    const weatherRef = await fetch(`
        https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
    );
        const weather = await weatherRef.json();

    const currentTemp = weather.current.temp_c;
    responseref.innerHTML =   `Today's temperature in ${city} is ${currentTemp}°C`
}
