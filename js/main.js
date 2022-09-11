const textEl1 = document.querySelector('.text1');
const textEl2 = document.querySelector('.text2');
const textEl3 = document.querySelector('.text3');
const textEl4 = document.querySelector('.text4');
const textEl5 = document.querySelector('.text5');
const textEl6 = document.querySelector('.text6');
const textEl7 = document.querySelector('.text7');
const textEl8 = document.querySelector('.text8');
const textEl9 = document.querySelector('.text9');
const textEl10 = document.querySelector('.text10');         




const product = [
    { name: "Lamborgini Aventador ",  color: "red ",  price: 750000 ,  speed: "217 mph ",  condition: "new ",  company: "Lamborgini ",  year: 2011 ,  quality: "high ",  type: "sport car ",  weightKg: 1.550  },
    { name: "Bugatti Veyron ", color: "black ", price: 1.900000 , speed: "268 mph ", condition: "new ", company: "Bugatti ", year: 2005 , quality: "high ", type: "sport car ", weightKg: 1.990  },
    { name: "Chevrolet Camaro ", color: "yellow ", price: 37.500 , speed: "190 mph ", condition: "new ", company: "Chevrolet ", year: 2002 , quality: "medium ", type: "sport car ", weightKg: 1.550 },
    { name: "Rolse Royce ", color: "golden ", price: 550.000 , speed: "155 mph ", condition: "new ", company: "Rolls-Royse Motor ", year: 2012 , quality: "high ", type: "luxury car ", weightKg: 2.610  },
    { name: "BMW X7 ", color: "black ", price: 74.900 , speed: "141 mph ", condition: "new ", company: "BMW ", year: 2019 , quality: "medium ", type: "luxury car ", weightKg: 2.455  },
    { name: "Hyundai Sonata ", color: "silver ", price: 34.250 , speed: "130 mph ", condition: "new ", company: "Hyundai ", year: 2020 , quality: "medium ", type: "sport car ", weightKg: 1.405 },
    { name: "Kia K5 ", color: "dark-blue ", price: 31.190 , speed: "130 mph ", condition: "new ", company: "Kia ", year: 2021 , quality: "medium ", type: "sport car ", weightKg: 1.442  },
    { name: "Toyota Tundra ", color: "gray ", price: 46.850 , speed: "165 mph ", condition: "new ", company: "Toyota ", year: 2009 , quality: "high ", type: "sport car ", weightKg: 2.550  },
    { name: "Lamborgini Urus ", color: "yellow ", price: 221.506 , speed: "204 mph ", condition: "new ", company: "Lamborgini ", year: 2017 , quality: "high ", type: "luxury car ", weightKg: 2.200  },
    { name: "Aston Martin Valhalla ", color: "blue ", price: 800.000 , speed: "217 mph ", condition: "new ", company: "Aston Martin ", year: 2021 , quality: "high ", type: "sport car ", weightKg: 1.550  }
]; 

const name1 = [];
const color = [];
const price = [];
const speed = [];
const condition = [];
const company = [];
const year = [];
const quality = [];
const type = [];
const weightKg = [];

// For 

// for (let i = 0; i < product.length; i++) {
//     // Name
//     name1.push(product[i].name);
//     textEl1.textContent = `Name = ${name1}`;
//     // Color
//     color.push(product[i].color);
//     textEl2.textContent = `Color = ${color}`;
//     // Price
//     price.push(product[i].price);
//     textEl3.textContent = `Price = ${price}`;
//     // Speed
//     speed.push(product[i].speed);
//     textEl4.textContent = `Speed = ${speed}`;
//     // Condition
//     condition.push(product[i].condition);
//     textEl5.textContent = `Condition = ${condition}`;
//     // Company
//     company.push(product[i].company);
//     textEl6.textContent = `Company = ${company}`;
//     // Year
//     year.push(product[i].year);
//     textEl7.textContent = `Year = ${year}`;
//     // Quality
//     quality.push(product[i].quality);
//     textEl8.textContent = `Quality = ${quality}`;
//     // Type
//     type.push(product[i].type);
//     textEl9.textContent = `Type = ${type}`;
//     // Weight
//     weightKg.push(product[i].weightKg);
//     textEl10.textContent = `Weight(kg) = ${weightKg}`;
// }   

// ForEach

product.forEach( function (product) {
    // Name property
    name1.push(product.name);
    textEl1.textContent = `Name = ${name1}`;
    // Color property
    color.push(product.color);
    textEl2.textContent = `Color = ${color}`;
    // Price property
    price.push(product.price);
    textEl3.textContent = `Price = ${price}`;
    // Speed property
    speed.push(product.speed);
    textEl4.textContent = `Speed = ${speed}`;
    // Condition property
    condition.push(product.condition);
    textEl5.textContent = `Condition = ${condition}`;
    // Company property
    company.push(product.company);
    textEl6.textContent = `Company = ${company}`;
    // Year property
    year.push(product.year);
    textEl7.textContent = `Year = ${year}`;
    // Quality property
    quality.push(product.quality);
    textEl8.textContent = `Quality = ${quality}`;
    // Type property
    type.push(product.type);
    textEl9.textContent = `Type = ${type}`;
    // Weight property
    weightKg.push(product.weightKg);
    textEl10.textContent = `Weight(kg) = ${weightKg}`;
});

// Filter
// product.filter( (product) => {
//     // Name
//     name1.push(product.name);
//     textEl1.textContent = `Name = ${name1}`;
//     // Color
//     color.push(product.color);
//     textEl2.textContent = `Color = ${color}`;
//     // Price
//     price.push(product.price);
//     textEl3.textContent = `Price = ${price}`;
//     // Speed
//     speed.push(product.speed);
//     textEl4.textContent = `Speed = ${speed}`;
//     // Condition
//     condition.push(product.condition);
//     textEl5.textContent = `Condition = ${condition}`;
//     // Company
//     company.push(product.company);
//     textEl6.textContent = `Company = ${company}`;
//     // Year
//     year.push(product.year);
//     textEl7.textContent = `Year = ${year}`;
//     // Quality
//     quality.push(product.quality);
//     textEl8.textContent = `Quality = ${quality}`;
//     // Type
//     type.push(product.type);
//     textEl9.textContent = `Type = ${type}`;
//     // Product
//     weightKg.push(product.weightKg);
//     textEl10.textContent = `Weight(kg) = ${weightKg}`;
// });









