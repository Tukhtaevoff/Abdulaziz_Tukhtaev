## Lesson 11
# Things that I learned in this lesson :
# 1 Arrow function
Arrow function is also like a simple function, but it is more comfortable than function.
Example:
let name = () => {
    console.log("Hello World");
}

# 2 Filter
This method can be used to filter some objects or something in array.

Example:
const fruits = ["apple", "banana", "pear", "orange"];
const sitrusFruits = []; // Empty array

fruits.filter(function(fruit) {
    sitrusFruits.push(fruit[0);
    console.log(sitrusFruits);
});

# forEach
This method is really like filter, but it can be used for sort out some objects in an array.

Example:
const cars = [
    {name: "bugatti", color: "white"},
    {name: "lamborghini", color: "black"}
];

const emptyArr = [];

cars.forEach(function (car) {
    emptyArr.push(car.color);
    console.log(emptyArr);
})

# Handling parent element from js
ParentNode and ParentElement are used for handle an element's parent element.
Exaxmple:
index.html > div > ul id ="list" > li
main.js > {
const itemList = document.getElementById("list");
console.log(itemList.parentNode); // This method is handling itemList's parent element (div);

Another Example:
console.log(itemList.parentNode.parentNode); // This method can be used for handling itemList's parent's parent...
}

# Children method
index.html > {
    div > ul id ="list" > li
}

main.js > {
    const itemList = document.getElementById("list");
    console.log(itemList.children[1]) // This will show us ul's second child.

    console.log(itemList.childNodes); // This will show us ul's all childs
}

# Next element
index.html > {
    div {
       ul id ="list" {
          li
       } 
       ol {
        li
       }
    } 
}

main.js > {
    const itemList = document.getElementById("list");
    console.log(itemList.nextElementSibling); // This will show us div's next element which is exist after ul.
}

# Create element method
const title = document.createElement("h1"); // This method will create a new element in html from js

# Adding class and id
const title = document.createElement("h1");

title.className = "header__title"; // This method will create a new class for an element
title.id = "title"; // This method will create a new id for an element

console.log(title);






