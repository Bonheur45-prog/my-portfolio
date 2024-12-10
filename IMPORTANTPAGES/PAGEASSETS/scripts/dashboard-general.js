//for span tag where the numbers are displaye on navigation bar

const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    if(counter.innerHTML === ''){
        counter.classList.add('hide-counter')
    }
});