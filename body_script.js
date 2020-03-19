
// 1 завдання
alert("Hello!");
let name = prompt("What is your name?");
console.log("name=", name);

// 2 завдання
let year = prompt("Enter your year of birth");
let age = 2020 - year;
console.log("Age=", age);

// 3 завдання
let width = prompt("Enter the length of the side of the square");
let perimeter = width * 4;
console.log("Perimeter of the square=", perimeter);

// 4 завдання
let radius = prompt("Enter the radius of the circle");
let areaOfTheCircle = Math.PI * Math.pow( radius, 2);
console.log("area Of The Circle=", areaOfTheCircle);

// 5 завдання
let distance = prompt("Enter the distance between cities, please");
let time = prompt("Enter the time in wich you should arrive");
let speed = distance / time;
console.log("You should drive with speed", speed+" "+"km/h");

// 6 завдання
let dolars = prompt("How many dollars do you have?");
const DolarEuroRate = 0.93;
let euro = dolars*DolarEuroRate;
console.log("You would get", "€"+euro);

// 7 завдання
let flashDriveSizeGb = prompt("Specify the size of your flash drive")
const Gb = 1024;
const fileSizeMb = 820;
let numberOfFiles = Math.floor(flashDriveSizeGb * Gb / fileSizeMb);
console.log("You can place", numberOfFiles+" "+"file(s)");

// 8 завдання
let amountOfMoney = prompt("How much money do you have? (UAH)");
let price = prompt("How much cost one chocolate bar?");
let amountChocolateBar = Math.floor(amountOfMoney/price);
let change = amountOfMoney-amountChocolateBar*price;
console.log("You can buy", amountChocolateBar+" "+"chocolate bar(s)");
console.log("Your change will be", change+" "+"UAH");

// 9 завдання
let number = prompt("Enter the three-digit number");
let y = 0;
for(; number; number = Math.floor(number / 10)) {
    y *= 10;
    y += number % 10;
}
console.log("Reversed number=", y);

//10 завдання
let deposit= prompt("Enter amount of your deposit");
const percent = 0.05;
let percentAmount = deposit * percent / 12 * 2;
console.log("Amount of your percent=", percentAmount);



