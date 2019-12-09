let startBtn = document.querySelector('#startBtn');
let foodValue = document.querySelector('#foodValue');
let cleanValue = document.querySelector('#cleanValue');
let happinessValue = document.querySelector('#happinessValue');
let foodBtn = document.querySelector('#foodBtn');
let cleanBtn = document.querySelector('#cleanBtn');
let happinessBtn = document.querySelector('#happinessBtn');
let currentTamagochi = {};


function setStatsValue(food, clean, happiness) {
    foodValue.innerHTML = food;
    cleanValue.innerHTML = clean;
    happinessValue.innerHTML = happiness;
}
startBtn.addEventListener("click", function () {
    let typeSelector = document.querySelector('#typeValue').value;
    let createNewTamagochi = new createTamagochi();
    let createdTamagochi = createNewTamagochi.createTamagochi(typeSelector);
    currentTamagochi = createdTamagochi;
    setStatsValue(currentTamagochi.food, currentTamagochi.clean, currentTamagochi.happiness);
});


foodBtn.addEventListener("click", function () {
    currentTamagochi.food += 30;
    if(currentTamagochi.food >= 100) {
        currentTamagochi.food == 100;
    }
    currentTamagochi.clean -= 20;
    setStatsValue(currentTamagochi.food, currentTamagochi.clean, currentTamagochi.happiness);
    checkIfUserWon();
});

cleanBtn.addEventListener("click", function () {
    currentTamagochi.clean += 40;
    if(currentTamagochi.clean >= 100) {
        currentTamagochi.clean == 100;
    }
    currentTamagochi.happiness -= 10;
    setStatsValue(currentTamagochi.food, currentTamagochi.clean, currentTamagochi.happiness);
    checkIfUserWon();
});

happinessBtn.addEventListener("click", function () {
    currentTamagochi.happiness += 15;
    if(currentTamagochi.happiness >= 100) {
        currentTamagochi.happiness == 100;
    }
    currentTamagochi.food -= 10;
    setStatsValue(currentTamagochi.food, currentTamagochi.clean, currentTamagochi.happiness);
    checkIfUserWon();
});

let checkIfUserWon = () => {
    if(currentTamagochi.food <= 0 || currentTamagochi.clean <= 0 || currentTamagochi.happiness <= 0){
        alert('You Lost');
        startBtn.click();
    }
}