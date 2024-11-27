let ajax1 = new XMLHttpRequest();
ajax1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Muestra toda la información
        console.log(this.responseText);
        let obj = this.responseText;
        let obj1 = JSON.parse(obj);
        console.log(obj1);
        console.log(obj1.weather[0].main);
        console.log(obj1.weather[0].description);
        console.log(obj1.main.temp);
        console.log(obj1.main.temp_min);
        console.log(obj1.main.temp_max);
        console.log(obj1.main.pressure);
        console.log(obj1.main.humidity);
        console.log(obj1.wind.speed);
        console.log(obj1.sys.country);
        console.log(obj1.name);
        document.getElementById('ciudad').innerHTML += obj1.name;
        document.getElementById('temperatura').innerHTML += obj1.main.temp;
        document.getElementById('temperatura-maxima').innerHTML += obj1.main.temp_max;
        document.getElementById('temperatura-minima').innerHTML += obj1.main.temp_min;
    }
};
ajax1.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Madrid,es&units=metric&appid=bd8724adbb6096ba56487942d2186e55", true);
ajax1.send();