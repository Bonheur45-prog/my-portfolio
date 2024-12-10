let feedBacks = (JSON.parse(localStorage.getItem("feedBacks")));

const feedBacksContainer = document.querySelector(".feedbacks-container");

let html = '';
feedBacks.forEach((feeBack) => {
    html += `<div class="feedback">
            <h1><label for="SenderName">Sender Name:</label> ${feeBack.UserName}</h1>
            <div class="email-address">
                <label for="userEmail">Email:</label>
                ${feeBack.Email}
            </div>
            <div class="sender-address">
            <label for="senderAddress">Address: </label>${feeBack.Address}
            </div>
            <div class="transmition-time">
               <label for="time">Time:</label> 04:57 pm
            </div>
            <h2>Message Content</h2>
            <div class="message">
            ${feeBack.Message}
            </div>
        </div>`;
})

feedBacksContainer.innerHTML = html;
//for span tag where the numbers are displaye on navigation bar

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    if(counter.innerHTML === ''){
        counter.classList.add('hide-counter')
    }
});