let count = 0;

const countHeader = document.getElementById('count');
const countAddBtn = document.getElementById('plus');
const countMinusBtn = document.getElementById('minus');

countHeader.innerText = count;

// Listen to a click event by adding an event listener
// Listen for a click event
// Second parameter is an arrow function that's executed whenever a click event happens
countAddBtn.addEventListener('click', () => {
    count++;
    countHeader.innerText = count;
});

countMinusBtn.addEventListener('click', () => {
    count--;
    countHeader.innerText = count;
});