const inputEl = document.querySelector(".input");
const freeEl = document.querySelector(".free");
const bikeEl = document.querySelector(".bycycle");
const carEl = document.querySelector(".car");
const planeEl = document.querySelector(".plane");
const button = document.querySelector(".check-btn");
const reset = document.querySelector(".reset");
const limitedNumber = 1000000;

button.addEventListener("click", function() {
    var free = inputEl.value / 3.6 
    var bike = inputEl.value / 20.1 
    var car = inputEl.value / 70 
    var plane = inputEl.value / 800 

    let freeHour = Math.floor(free);
    let bikeHour = Math.floor(bike);
    let carHour = Math.floor(car);
    let planeHour = Math.floor(plane);

    let freeMinute = Math.floor((free - freeHour) * 60);
    let bikeMinute = Math.floor((bike - bikeHour) * 60);
    let carMinute = Math.floor((car - carHour) * 60);
    let planeMinute = Math.floor((plane - planeHour) * 60);

    let freeSec = Math.floor((free - freeHour) * 3600);
    let bikeSec = Math.floor((bike - bikeHour) * 3600);
    let carSec = Math.floor( (car - carHour) * 3600);
    let planeSec = Math.floor((plane - planeHour) * 3600);

    freeEl.innerText = `${freeHour} hour ${freeMinute} minute ${freeSec} second`;
    bikeEl.innerText = `${bikeHour} hour ${bikeMinute} minute ${bikeSec} second`;
    carEl.innerText = `${carHour} hour ${carMinute} minute ${carSec} second`;
    planeEl.innerText = `${planeHour} hour ${planeMinute} minute ${planeSec} second`;
    
    if ( inputEl.value <= 0 ) {
        freeEl.innerText = "Kechirasiz 0 dan kichik qiymat kiritish mumkin emas 😕";
        bikeEl.innerText = "Kechirasiz 0 dan kichik qiymat kiritish mumkin emas 😕";
        carEl.innerText = "Kechirasiz 0 dan kichik qiymat kiritish mumkin emas 😕";
        planeEl.innerText = "Kechirasiz 0 dan kichik qiymat kiritish mumkin emas 😕";
    } else if ( inputEl.value >= limitedNumber) {
        freeEl.innerText = "Afsuski bunday uzoq masofa qabul qilinmaydi ❌";
        bikeEl.innerText = "Afsuski bunday uzoq masofa qabul qilinmaydi ❌";
        carEl.innerText = "Afsuski bunday uzoq masofa qabul qilinmaydi ❌";
        planeEl.innerText = "Afsuski bunday uzoq masofa qabul qilinmaydi ❌";
    }
})

reset.addEventListener("click", function reset() {
    inputEl.value = "";
})

