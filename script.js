let counter = document.querySelector("#counter");
let number = 0;
function decrease() {
    number--;
    counter.textContent = number;
}
function reset() {
    number=0;
    counter.textContent = number;
}
function increase() {
    number++;
    counter.textContent = number;
}
