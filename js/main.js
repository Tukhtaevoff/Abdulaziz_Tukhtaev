const dropdownBtn = document.querySelector(".dropdown__btn");
let dropdown = false;
dropdownBtn.addEventListener("click", () => {
    if(!dropdown) {
        dropdownBtn.classList.add('opened');
        dropdown = true;
    } else {
        dropdownBtn.classList.remove('opened');
        dropdown = false;
    }
});