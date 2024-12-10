
const activeUserInAction = JSON.parse(localStorage.getItem('activeUser')) || '';
console.log(activeUserInAction);
const sideBarNav = document.querySelector('.sidebar-nav');

let sideNavHtml = '';

/*function buildSideNav(){*/
    sideNavHtml = `<div class="upper-wraper">
            <div class="account-picture">
                <img src="PAGEASSETS/images/student.png" alt="">
            </div>
            <div class="account-name">${activeUserInAction.username}</div>
            <div class="account-role">Role: <span>${activeUserInAction.role}</span></div>
        </div>
        <div class="middle-wraper">
            <a href="feedbacks.html">
            <img src="PAGEASSETS/icons/commentWh.png" alt="">FEEDBACKS <span class="counter">8</span>
            </a>
        </div>`;

    sideBarNav.innerHTML = sideNavHtml;
/*}*/
    var userWelcomeContent = `Welcomen <span> ${activeUserInAction.username} </span> to your Dashboard, Do you know that you can create your own Resume?....`;

    let i = 0;

function welcomeUser(){
    
    if(i < userWelcomeContent.length){
        document.querySelector(".welcome-user").innerHTML += userWelcomeContent.charAt(i);
        i++;
        setTimeout(welcomeUser, 60);
    }
}