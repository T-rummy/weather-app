var searchBtnEl = document.querySelector("#searchBtn");
var searchUl = document.querySelector("#search-list");
var inputEl = document.querySelector("#input");
var currentEl = document.querySelector("#current-weather");

var getApi = function(cityContent){
    var city = "oklahoma city";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityContent + "&units=imperial&appid=71b95b62ab18e8bb8a299c550074ab71";

    fetch(apiUrl).then(function(response){
        if(response.ok){
        response.json().then(function(data){

            var weatherH1 = document.createElement("h1");
            weatherH1.setAttribute("class", "weather-header");
            weatherH1.textContent = data.name + " " + "(" + new Date().toLocaleDateString() + ")";

            currentEl.setAttribute("class", "weather");

            var infoUl = document.createElement("ul");
                infoUl.setAttribute("class", "weather-list");
            
            var infoLiTemp = document.createElement("li");
                infoLiTemp.textContent = "Temp: " + data.main.temp + " F";
                
            
            var infoLiWind = document.createElement("li");
                infoLiWind.textContent = "Wind: " + data.wind.speed + " mph";
                

            var infoLiHum = document.createElement("li");
                infoLiHum.textContent = "Humidity: " + data.main.humidity;
                
            
                var infoLiUv = document.createElement("li");   
                    infoLiUv.textContent = "UV: 4.7"
                    
            
            infoUl.appendChild(infoLiTemp);
            infoUl.appendChild(infoLiWind);
            infoUl.appendChild(infoLiHum);
            infoUl.appendChild(infoLiUv);

            
            currentEl.appendChild(weatherH1);
            currentEl.appendChild(infoUl);
            

            console.log(data);
        })
    } else {
        currentEl.setAttribute("class", "weather");
        currentEl.setAttribute("class", "weather-header");
        currentEl.textContent = "That is not a city we know of, please refresh the page and try again."
    }
    })
}


var searchList = function(event){
    event.preventDefault();
    var searchListEl = document.createElement("button");
    searchListEl.classList = "list-item col-3 display-block";
    var cityContent = inputEl.value.trim();
    searchListEl.textContent = cityContent;

    searchUl.appendChild(searchListEl);
    getApi(cityContent);
};


searchBtnEl.addEventListener("click", searchList);
