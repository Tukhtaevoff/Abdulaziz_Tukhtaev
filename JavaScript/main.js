const formEl = document.querySelector(".form");
const resultEl = document.querySelector(".result-text");

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const month = 31 * day;
const year = 12 * month;
const century = 100 * year;

formEl.addEventListener("submit", function(event) {
    event.preventDefault();

    const inputEl = event.target.elements.input;

    const inputElValue = inputEl.value;

    let elCentury = Math.floor(inputElValue / century);
    let elYear = Math.floor((inputElValue % century) / year);
    let elMonth = Math.floor((inputElValue % year) / month);
    let elDay = Math.floor((inputElValue % month) / day);
    let elHour = Math.floor((inputElValue % day) / hour);
    let elMinute = Math.floor((inputElValue % hour) / minute);
    let elSecond = Math.floor((inputElValue % minute) / second);
    let elMilliSecond = Math.floor(inputElValue % second);

    if ( inputElValue < 0 ) {
        let lessValue = alert(" 0 dan kichik qiymat kiritish mumkin emas ❌ ");
        lessValue.style.color = "red";
    } else if ( inputElValue == 0 ) {
        return alert("Siz hali son kirinmadingiz 🤦‍♂️");
    }
     else {
        return resultEl.textContent = `${elCentury} Century | ${elYear} Year | ${elMonth} Month | ${elDay} Day | ${elHour} Hour | ${elMinute} Minute | ${elSecond} Second | ${elMilliSecond} m/s`;
    }

    formEl.reset();
});