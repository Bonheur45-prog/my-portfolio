const contactForm = document.getElementById('contactform');
const userFullname = document.getElementById('fullName');
const userEmail = document.getElementById('email');
const userAddress = document.getElementById('address');
const userMessage = document.getElementById('message');

let feedBacks = JSON.parse(localStorage.getItem("feedBacks")) || [];

contactForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    validateInputs();
    contactForm.reset();
});

function validateInputs(){
    let fullName = userFullname.value.trim();
    let email = userEmail.value.trim();
    let address = userAddress.value.trim();
    let message = userMessage.value.trim();
    let submittedAt = new Date();

    feedBacks.push({SubmittedAt: `${submittedAt}`, UserName: `${fullName}`, Email: `${email}`, Address: `${address}`, Message: `${message}`});
    
    localStorage.setItem('feedBacks', JSON.stringify(feedBacks));
}