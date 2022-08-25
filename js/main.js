const budget = +prompt("Xisobingizdagi mablag'ni kiriting");

const usd = "500";

const hotelusd = "250";

const euro = "120";

const plane = usd * 10650.34;

const hotel = hotelusd * 10650.34;

const museum = euro * 11650.03;

const expenses = plane + hotel + museum;

if (expenses <= budget) {
    alert ("Oq yo'l Abdulaziz aka")
} else if (budget <= 0) {
    alert ("Abdulaziz Bizni ahmoq qilma!")
} else {
    alert ("Abdulaziz ozgina sabr qilishing kerak!")
}
