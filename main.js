var cityName = document.querySelectorAll('#city h1 span');
var weatherToday = document.querySelectorAll('#weather h2 span'); 

//Weather API
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);
        
        cityName[0].innerHTML = apiResult.name; 
        weatherToday[0].innerHTML = apiResult.weather[0].description

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=81211,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();