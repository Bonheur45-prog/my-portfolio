var textContent = 'Please create your Account here to get in touch and enjoy more to this site and be able to manage you contents and get notified when new items are added.';

var i = 0;

function signUpWriter(){
    if(i < textContent.length){
        document.querySelector("p").innerHTML += textContent.charAt(i);
        i++;
        setTimeout(signUpWriter, 40);
    }
}

/*Signup form validation scripts*/
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfInput = document.getElementById("password-conf");

/*this is where the time format i want is implemented and i will use it wherever needed*/

const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
const year = currentDate.getFullYear();
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');
const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

// Retrieve existing users from localStorage or initialize an empty array
let users = JSON.parse(localStorage.getItem("users")) || [];

// Form submission event
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    if (validateUserInput()) {
        addNewUser(); // Add the new user to localStorage
        alert("User registered successfully!");
        form.reset(); // Clear the form after successful submission
    }
});

// Validate user input
function validateUserInput() {
    let isValid = true;

    // Validate email
    const userEmail = emailInput.value.trim();
    if (userEmail === "") {
        setErrorTo(emailInput, "Email can't be blank!");
        isValid = false;
    } else if (!isValidEmail(userEmail)) {
        setErrorTo(emailInput, "Please enter a valid email address!");
        isValid = false;
    } else {
        setSuccessTo(emailInput);
    }

    // Validate username
    const userName = usernameInput.value.trim();
    if (userName === "") {
        setErrorTo(usernameInput, "Username can't be blank!");
        isValid = false;
    } else {
        setSuccessTo(usernameInput);
    }

    // Validate password
    const password = passwordInput.value.trim();
    if (password === "") {
        setErrorTo(passwordInput, "Password can't be blank!");
        isValid = false;
    } else if (password.length < 8) {
        setErrorTo(passwordInput, "Password must be at least 8 characters long!");
        isValid = false;
    } else {
        setSuccessTo(passwordInput);
    }

    // Validate password confirmation
    const passwordConf = passwordConfInput.value.trim();
    if (passwordConf === "") {
        setErrorTo(passwordConfInput, "Password confirmation can't be blank!");
        isValid = false;
    } else if (password !== passwordConf) {
        setErrorTo(passwordConfInput, "Passwords do not match!");
        isValid = false;
    } else {
        setSuccessTo(passwordConfInput);
    }

    return isValid;
}

// Add new user to localStorage
function addNewUser() {
    const newUser = {
        regDate: formattedDateTime,
        email: emailInput.value.trim(),
        username: usernameInput.value.trim(),
        password: passwordInput.value.trim(),
        role: "user" // Default role, can be adjusted later
    };

    users.push(newUser); // Add user to the array
    localStorage.setItem("users", JSON.stringify(users)); // Save updated array to localStorage
}

// Toggle password visibility
const togglePasswordVisibilityIcons = document.querySelectorAll('.togglePasswordVisibility').forEach((togglePasswordVisibilityIcon) =>{
    togglePasswordVisibilityIcon.addEventListener('click', () => { 
        const whatInputControl = togglePasswordVisibilityIcon.parentElement;
        const whatInput = whatInputControl.firstElementChild;
        whatInput.type = whatInput.type === 'password' ? 'text' : 'password';
    })
})



// Helper functions for error/success display
function setErrorTo(input, message) {
    const formControl = input.parentElement;
    const errorLevel = formControl.querySelector(".error-level");
    errorLevel.innerHTML = message;
    formControl.className = "form-input-control error";
}

function setSuccessTo(input) {
    const formControl = input.parentElement;
    formControl.className = "form-input-control success";
}

// Email validation regex
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}