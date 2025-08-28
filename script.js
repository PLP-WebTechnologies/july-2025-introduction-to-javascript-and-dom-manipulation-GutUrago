/* ======================================
   Part 1: Variables & Conditionals
   ====================================== */
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', () => {
    const age = Number(ageInput.value);

    if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else if (age > 0) {
        ageResult.textContent = "You are a minor.";
    } else {
        ageResult.textContent = "Please enter a valid age.";
    }
});

/* ======================================
   Part 2: Functions
   ====================================== */
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

function sum(a, b) {
    return a + b;
}

const runFunctionsBtn = document.getElementById('runFunctionsBtn');
const greetResult = document.getElementById('greetResult');
const sumResult = document.getElementById('sumResult');

runFunctionsBtn.addEventListener('click', () => {
    greetResult.textContent = greet("Student");
    sumResult.textContent = `5 + 10 = ${sum(5, 10)}`;
});

/* ======================================
   Part 3: Loops
   ====================================== */
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'];
const fruitList = document.getElementById('fruitList');
const populateFruitsBtn = document.getElementById('populateFruitsBtn');

populateFruitsBtn.addEventListener('click', () => {
    fruitList.innerHTML = ''; // Clear previous items

    // Using for loop
    for (let i = 0; i < fruits.length; i++) {
        const li = document.createElement('li');
        li.textContent = fruits[i];
        fruitList.appendChild(li);
    }

    // Alternative example using forEach
    // fruits.forEach(fruit => {
    //     const li = document.createElement('li');
    //     li.textContent = fruit;
    //     fruitList.appendChild(li);
    // });
});

/* ======================================
   Part 4: DOM Manipulation
   ====================================== */
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', () => {
    toggleText.classList.toggle('highlight');
});

const addItemBtn = document.getElementById('addItemBtn');
const dynamicList = document.getElementById('dynamicList');
let count = 1;

addItemBtn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = `Item ${count}`;
    dynamicList.appendChild(li);
    count++;
});
