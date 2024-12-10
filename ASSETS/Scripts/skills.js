const circularProgress = document.querySelectorAll(".circular-progress");

    document.addEventListener("DOMContentLoaded", function(event){

        circularProgress.forEach (function(progressCircle){
            let initialProgress = 0;
            let progressEndValue = parseInt(progressCircle.getAttribute('attrib-value'));
            let color = progressCircle.getAttribute('attrib-color')
            let progressValue = progressCircle.querySelector(".progress-value");
            let speed = 30;

            let progress = setInterval(() => {
                initialProgress += 1;
                progressValue.innerHTML = `${initialProgress}%`;
                progressCircle.style.background = `conic-gradient(${color} ${initialProgress * 3.6}deg, rgb(176, 176, 224) 0deg)`;

                if(initialProgress == progressEndValue){
                    clearInterval(progress);
                }
            }, speed)
        })

    });

    const languageProgressContainers = document.querySelectorAll('.language-progress');

   languageProgressContainers.forEach(function(languageProgressContainer){
    //iyi languageName ntabwo nayikoresheje
    //let languageName = languageProgressContainer.querySelector('.lang-name');
    let languageDegree = languageProgressContainer.querySelector('.lang-degree');

    const langProgressBars = languageProgressContainer.querySelectorAll(".lang-progress");
   
        document.addEventListener("DOMContentLoaded", function(event){
        langProgressBars.forEach(function(langProgressBar){
            let initialwidth = 0;
            const width = parseInt(langProgressBar.getAttribute('attrib-width'));
            let langdegree = langProgressBar.querySelector('.lang-degree');

            let lnProgress = setInterval(() =>{
                initialwidth += 1;
                languageDegree.innerHTML = `${initialwidth}%`;
                langProgressBar.style.setProperty('--width', initialwidth);
                if(initialwidth == width){
                    clearInterval(lnProgress);
                }

            }, 60);
        })
        });

   });