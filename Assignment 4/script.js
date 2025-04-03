const calculateBMI = (weight, height) => (weight / (height * height)).toFixed(2);
console.log("BMI:", calculateBMI(70, 1.75));

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log("Temperature:", convertToFahrenheit(30));

function showAlert() {
    alert("Form Submitted!");
}

function confirmDelete() {
    return confirm("Are you sure you want to delete?");
}

function getUserName() {
    let name = prompt("Enter your name:");
    alert("Hello " + name);
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    showAlert();
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^[0-9]{10}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!emailRegex.test(email)) alert("Invalid Email");
    if (!phoneRegex.test(phone)) alert("Invalid Phone");
    if (!passwordRegex.test(password)) alert("Weak Password");
});

function showCurrentDate() {
    console.log("Current Date & Time:", new Date());
}
showCurrentDate();

function generateRandomNumber() {
    console.log("Random Number:", Math.floor(Math.random() * 100));
}
generateRandomNumber();
