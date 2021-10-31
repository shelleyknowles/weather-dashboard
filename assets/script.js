const openWeatherAPI = "https://api.openweathermap.org/data/2.5/weather?q="
 
const openWeatherOneCallAPI = "https://api.openweather.map.org/data/2.5/onecall?"
 
var searchCityList = [];
var lastSearch = "AUSTIN";
const lastSearchDefault = "AUSTIN";
var cityNameOK = true;
 
//save search history
function saveSearchHistory() {
    localStorage.setItem("lastSearch", lastSearch);
    localStorage.setItem("seatchCityList", (searchCityList));
}
 
//load search history
function loadSearchHistory(){
    console.log("loading search history...")
    lastSearch = localStorage.getItem("lastSearch") || lastSearchDefault;
    searchCityList = (localStorage.getItem("searchCityByList")) || [];
}
 
function currentCityButtons() {
    var searchHistoryEl = document.getElementById('search-history');
    searchHistoryEl.innerHTML = '';
   
    for (var i = 0; i < searchCityList.length; i++) {
        var newButton = document.createElement("button");
        newButton.textContent = searchCityList[i];
        newButton.setAttribute("class", "city-button")
        searchHistoryEl.appendChild(newButton);
       
    }
}

