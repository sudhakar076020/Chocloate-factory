let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let phoneEl = document.getElementById("phone");
let messageEl = document.getElementById("message");


// Error Message
let nameErrEl = document.getElementById("nameError");
let emailErrEl = document.getElementById("emailError");
let phoneErrEl = document.getElementById("phoneError");
let messageErrEl = document.getElementById("messageError");

// Validate Name
function validateName(){
    const nameValue = nameEl.value.trim();
    if (nameValue === "") {
        nameErrEl.textContent = "Username is required.";
        return false;
    } else {
        nameErrEl.textContent = "";
        return true;
    }
}

// Validate Email
function validateEmail() {
    const emailValue = emailEl.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailValue)) {
        emailErrEl.textContent = "Please enter a valid email.";
        return false;
    } else {
        emailErrEl.textContent = "";
        return true;
    }
}

// Validate Phone
function validatePhone(){
    const phoneValue = phoneEl.value.trim();
    if (phoneValue === "") {
        phoneErrEl.textContent = "Phone is required.";
        return false;
    } else {
        phoneErrEl.textContent = "";
        return true;
    }
}

// Validate Message
function validateMessage(){
    const messageValue = messageEl.value.trim();
    if (messageValue === "") {
        messageErrEl.textContent = "Message is required.";
        return false;
    } else {
        messageErrEl.textContent = "";
        return true;
    }
}

nameEl.addEventListener("blur", validateName);
emailEl.addEventListener("blur", validateEmail);
phoneEl.addEventListener("blur", validatePhone);
messageEl.addEventListener("blur", validateMessage);

// Valid Email Check
nameEl.addEventListener("input", validateName);
emailEl.addEventListener("input", validateEmail);
phoneEl.addEventListener("input", validatePhone);
messageEl.addEventListener("input", validateMessage);

// Form submission validation
function validateForm(event) {
    let isValid = true;
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateMessage()) isValid = false;
    if (!isValid) {
        event.preventDefault();
    }
}

myFormEl.addEventListener("submit", validateForm);