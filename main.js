const CountriesContain = document.getElementById("countries-container");
let DisplayUserName = document.getElementById("usernameDis");
// let userNameDisplay = localStorage.getItem(username);
// document.addEventListener("DOMContentLoaded",()=>{
// DisplayUserName.innerText= userNameDisplay;
// })
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {    
    data.forEach(element => {   
        let countryCard = document.createElement("div");
        countryCard.classList.add("countryCard");
        let commonName = document.createElement("p");
        commonName.innerText = `the common name of this country is: ${element.name.common}`;
        let officialName = document.createElement("p");
        officialName.innerText = `the official name of this country is: ${element.name.official}`;
        let population = document.createElement("p");
        population.innerText = `population: ${element.population}`;
        let flag = document.createElement("a");
        flag.innerText="country flag"
        flag.href=element.flag.png
        let region = document.createElement("p");
        region.innerText=`Region: ${element.continents}`;
        let languages = document.createElement("p");
        languages.innerText= `languages: ${element.languages.eng}`;
        let maps = document.createElement("a");
        maps.innerText="country location on google maps"
        maps.href=element.maps.googleMaps;
        countryCard.appendChild(commonName);
        countryCard.appendChild(officialName);
        countryCard.appendChild(population);
        countryCard.appendChild(flag);
        countryCard.appendChild(region);
        countryCard.appendChild(languages);
        countryCard.appendChild(maps);
        CountriesContain.appendChild(countryCard);
    });
  });

