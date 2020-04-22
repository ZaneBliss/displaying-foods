
const foodElementor = foods => `
    <div class="container">
        <h1>${foods.name}</h1>
        <p>${foods.category}</p>
        <p>${foods.ethnicity}</p>
    </div>
`

function foodToDom (food) {
    foodElement = document.querySelector(".foodList")
    foodElement.innerHTML += food
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
      parsedFoods.forEach(food => {
          const foodElement = foodElementor(food)
          foodToDom(foodElement)
      });  
    })