var searchBtnEl = document.querySelector("#searchBtn");
var searchUl = document.querySelector("#search-list");
var inputEl = document.querySelector("#input");



var searchList = function(event){
    event.preventDefault();
    var searchListEl = document.createElement("button");
    searchListEl.classList = "list-item col-3 display-block";
    var cityContent = inputEl.value.trim();
    searchListEl.textContent = cityContent;

    searchUl.appendChild(searchListEl);
};


searchBtnEl.addEventListener("click", searchList);
