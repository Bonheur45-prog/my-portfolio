const renderAccountWide = document.querySelector('.render-the-account-wide-view');

//fetching all users from localstorage
const accountsSection = document.querySelector(".accounts-section");

let users = (JSON.parse(localStorage.getItem("users"))) || [];
let usersHtml = '';
for(let i = 0; i < users.length; i++){
    let user = users[i];
    usersHtml += `<div class="account-container">
            <img src="PAGEASSETS/images/student.png" alt="">
            <div class="account-name">${user.username}</div>
            <div class="account-email">${user.email}</div>
            <div class="buttons">
            <button class="btn-view" data-account-owner="${user.email}">View</button>
            <button onclick="users.splice(${i}, 1);
            ">Delete</button>
            </div>
        </div>`;
}
accountsSection.innerHTML = usersHtml;
//for span tag where the numbers are displaye on navigation bar

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    if(counter.innerHTML === ''){
        counter.classList.add('hide-counter')
    }
});

//view account settings button scripts
const viewBtns = document.querySelectorAll('.btn-view');

viewBtns.forEach((viewBtn) => {
    viewBtn.addEventListener('click', () => {
        const accountOwner = viewBtn.dataset.accountOwner;
        
        let matchingUserAccount;

        users.forEach((user) => {
            if(accountOwner === user.email){
                matchingUserAccount = user;
                console.log(matchingUserAccount)
                //view user logic
                viewUserAccount(matchingUserAccount);
            }
        });
    });
    
});

function viewUserAccount(userAccount){
    let html = ` <div class="account-wide-view-container">
            <div class="cancel-button" id="cancel">&CircleTimes;</div>
            <div class="left-section">
                <img src="PAGEASSETS/images/mine.jpg" alt="">
                <div class="account-name-email-role">
                    <p>NAME: <span>${userAccount.username}</span></p>
                    <p>EMAIL: <span>${userAccount.email}</span></p>
                    <p>ROLE: <span>${userAccount.role}</span></p>
                </div>
            </div>
            <div class="right-section">
                <div class="addresses-header">USER ADDRESSES</div>
                <p>Phone: <span>+250 781 927 209</span></p>
                <p>Address: <span>Busanza, Rwanda</span></p>
                <div class="user-social-medias">
                    <div class="addresses-header">USER SOCIAL MEDIAS</div>
                    <ul>
                        <li><a href=""><img src="PAGEASSETS/icons/mail.png" alt="">bonheur@gmail.com</a></li>
                        <li><a href=""><img src="PAGEASSETS/icons/facebookkk.png" alt="">Ajay Bonheur</a></li>
                        <li><a href=""><img src="PAGEASSETS/icons/whatsapp.png" alt="">+250 781 927 109</a></li>
                        <li><a href=""><img src="PAGEASSETS/icons/instagramm.png" alt="">Nshimiyimana Bonheur</a></li>
                        <li><a href=""><img src="PAGEASSETS/icons/twitter.png" alt="">Ajay Bonheur</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
        renderAccountWide.innerHTML = html;
    renderAccountWide.classList.add('active');
    
    const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', () => {
    renderAccountWide.classList.remove('active');
});
}