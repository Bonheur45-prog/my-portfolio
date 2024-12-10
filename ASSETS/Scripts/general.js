/*import { activeUserInAction } from "../../IMPORTANTPAGES/PAGEASSETS/scripts/user-dashboard.js"; //This is where the user in action will be tracked
*/
let activeUserInAction;
const loginSignUp = document.querySelector(".login-signup");
const loginForm = document.querySelector(".login-form-container");
const closeForm = document.querySelector(".close-form-btn");
//this two are here after
const signInForm = document.getElementById("signin-form");
const loginError = signInForm.querySelector('.login-error');

loginSignUp.addEventListener("click", () =>{
    loginForm.style.visibility = "visible";
});
closeForm.addEventListener("click", () => {
    loginForm.style.visibility = "hidden";
    console.log(signInForm.querySelectorAll('.form-input-control'));
    loginError.style.visibility = 'hidden';
});

    //header responsive for Mobile Version menu and sidebar

const mobileMenu = document.querySelector(".mobile-menu");
const sideBar = document.querySelector(".sidebar-menu");
const cancelShowSidebar = document.querySelector(".hide-nav-bar");

mobileMenu.addEventListener("click", () =>{
    mobileMenu.style.visibility = "hidden";
    sideBar.style.visibility = "visible";
});

cancelShowSidebar.addEventListener("click", () =>{
    mobileMenu.style.visibility = "visible";
    sideBar.style.visibility = "hidden";
});

//The home page welcome heading writer

function theWelcomeWriter(){
    
}

/*the complete login authentication process is implemented here in order to access this functionality every where*/

//const signInForm = document.getElementById("signin-form"); nabyimuriye hejuru by error
const signInEmailInput = document.getElementById("userEmail");
const signInPasswordInput = document.getElementById("userPassword");

const signInPasscodeView = signInPasswordInput.nextElementSibling;
signInPasscodeView.addEventListener("click", () => {
    signInPasswordInput.type = signInPasswordInput.type === "password"? "text" : "password";
});

// Event listener for sign-in form submission
signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    const email = signInEmailInput.value.trim();
    const password = signInPasswordInput.value.trim();

    // Validate credentials and authenticate user
    if (validateSignIn(email, password)) {
        const user = authenticateUser(email, password);
        if (user) {
           activeUserInAction = user;
           localStorage.setItem("activeUser", JSON.stringify(activeUserInAction));
            redirectToRolePage(user.role);
            signInForm.reset();
        } else {
            loginError.style.visibility = "visible";
        }
    }
});

// Validate sign-in inputs
function validateSignIn(email, password) {
    let isValid = true;

    if (email === "") {
        setErrorTo(signInEmailInput, "Email can't be blank!");
        isValid = false;
    } else if (!isValidEmail(email)) {
        setErrorTo(signInEmailInput, "Please enter a valid email address!");
        isValid = false;
    } else {
        setSuccessTo(signInEmailInput);
    }

    if (password === "") {
        setErrorTo(signInPasswordInput, "Password can't be blank!");
        isValid = false;
    } else {
        setSuccessTo(signInPasswordInput);
    }

    return isValid;
}

// Authenticate user credentials
function authenticateUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find(user => user.email === email && user.password === password);
}

// Redirect user to a role-specific page
function redirectToRolePage(role) {
    switch (role) {
        case "admin":
            window.location.href = "IMPORTANTPAGES/admin-dashboard.html";
            break;
        case "moderator":
            window.location.href = "moderator-dashboard.html";
            break;
        case "user":
            window.location.href = "IMPORTANTPAGES/user-dashboard.html";
            break;
        default:
            alert("Unknown role. Contact support.");
            break;
    }
}

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