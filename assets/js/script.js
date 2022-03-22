let maxCal=1000
let minCal = 0
let maxProt = 100
let minProt = 0
let maxCarbs = 90
let minCarbs = 0
let maxFat = 100
let minFat = 0
let recipeListEl = document.querySelector(".recipes");



function getRecipeInfo() {
    let apiUrl = "https://api.spoonacular.com/recipes/complexSearch?maxCalories=" + maxCal + "&minCalories=" + minCal + "&maxProtein=" + maxProt + "&minProtein=" + minProt + "&maxCarbs=" + maxCarbs + "&minCarbs=" + minCarbs + "&maxFat=" + maxFat + "&minFat=" + minFat + "&sort=popularity&offset=0&number=10&apiKey=12e90f7110fa407caf3c0a919ae2be54";

    fetch(apiUrl).then( function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data)
        for(let i = 0; i < data.results.length; i++) {
            let recipeCard = document.createElement("div");
            recipeCard.setAttribute("class", "card");
            let recipeName = data.results[i].title
            console.log(recipeName)
            let cardTitle = document.createElement("h2");
            cardTitle.setAttribute("class", "card-content");
            cardTitle.textContent = recipeName;
            recipeCard.append(cardTitle);
            recipeListEl.append(recipeCard);

        }
    })
}

getRecipeInfo();