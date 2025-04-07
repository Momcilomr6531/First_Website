// Task 1: Hello World
alert("Hello World!");
console.log("My first JavaScript assignment");
document.getElementById("output").textContent = "I just modified this element with JavaScript";

// Task 2: Variable Practice
let yourName = "John"; // Change this to your name
let yourAge = 21;
let yourNumber = 3.14;
console.log(`My name is ${yourName}, I am ${yourAge} years old, and my favorite number is ${yourNumber}.`);

// Task 3: Calculator Function
function calculate(a, b) {
  console.log(`Calculating with ${a} and ${b}:`);
  console.log(`Addition: ${a + b}`);
  console.log(`Subtraction: ${a - b}`);
  console.log(`Multiplication: ${a * b}`);
  console.log(`Division: ${a / b}`);
}
calculate(10, 5);
calculate(20, 4);
calculate(15, 3);

// Task 4: Temperature Converter
function fahrenheitToCelsius(f) {
  let c = (f - 32) * 5 / 9;
  alert(`${f}°F is ${c.toFixed(2)}°C`);
}

function celsiusToFahrenheit(c) {
  let f = c * 9 / 5 + 32;
  alert(`${c}°C is ${f.toFixed(2)}°F`);
}

// Task 5: String Manipulation
function manipulateString(str) {
  let upper = str.toUpperCase();
  let length = str.length;
  alert(`Uppercase: ${upper}\nNumber of characters: ${length}`);
}

// Task 6: Toggle Switch
let isLightOn = true;

function toggleLight() {
  isLightOn = !isLightOn;
  const status = document.getElementById("light-status");
  if (isLightOn) {
    status.textContent = "Light is ON";
  } else {
    status.textContent = "Light is OFF";
  }
}

// Task 7: Counting Loop
function countByTwo(limit) {
  let output = "";
  for (let i = 0; i <= limit; i += 2) {
    output += i + " ";
  }
  document.getElementById("count-output").textContent = output;
}
