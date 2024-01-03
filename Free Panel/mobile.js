let timerExists = false;
let savedTime = localStorage.getItem("savedTime");
let timeLeft = savedTime ? Math.max(0, (180 - (Date.now() - savedTime) / 1000)) : 0;

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    let display = document.querySelector('#timer');
    display.style.display = 'block';
    
    let intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(intervalId);
            display.style.display = 'none';
            localStorage.removeItem('savedTime');
        }
    }, 1000);
}

window.addEventListener("load", () => {
    if (savedTime) {
        timeLeft = Math.max(0, 180 - (Date.now() - savedTime) / 1000);
        console.log(timeLeft);
        if (timeLeft > 0) {
            timerExists = true;
            startTimer(timeLeft);
        }
    }
});

function redirect(platform) {
    let dropdownValue = document.querySelector("#tools").value;
    location.href = `/${platform}/${dropdownValue}api`;
}


function timer(){
    let submitButton = document.querySelector("#sButton");
    
    function startTimer(duration) {
        let timer = duration, minutes, seconds;
        let display = document.querySelector('#timer');
        display.style.display = 'block';
        let intervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
            clearInterval(intervalId);
            display.style.display = 'none';
            submitButton.disabled = false;
            submitButton.style.opacity = 1;
            localStorage.removeItem('savedTime');
            } else {
            submitButton.disabled = true;
            submitButton.style.opacity = 0.5;
            }
        }, 1000);
        }
        
    if (savedTime) {
        let timeLeft = (180000 - (Date.now() - savedTime)) / 1000;
        console.log(timeLeft);
        if (timeLeft > 0) {
        submitButton.disabled = true;
        submitButton.style.opacity = 0.5;
        startTimer(timeLeft);
        } else {
        submitButton.disabled = false;
        submitButton.style.opacity = 1;
        }
    }

    submitButton.addEventListener("click", () => {
        let inputField = document.querySelector("input");

        if (inputField.value === ""){
            let error = document.createElement("p");
            error.setAttribute("id","error");
            error.setAttribute("class","fade");
            error.textContent = "Invalid Link";
            error.style.color = "red";
            error.style.marginBottom = "-20px";
            inputField.parentNode.insertBefore(error, inputField.nextSibling);
            setTimeout(() => {
                error.remove();
            }, 2000);
        } else{
            startTimer(180);
            localStorage.setItem('savedTime', Date.now());
            let header = document.querySelector("#header");
            selectionGrid.textContent = "";
            header.style.top = "50%";
            header.style.transform = "translate(-50%, -50%)";
            header.style.whiteSpace = "nowrap";
            header.style.overflow = "hidden";
            header.innerHTML = `
            <i class="fa-solid fa-circle-check fade" style="font-size: 6vh; color: green;"></i>
            <h1 class="fade" style="font-size: 4vh;">Request Sent</h1>`;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let tiktokButton = document.querySelector("#tiktok");
    let youtubeButton = document.querySelector("#youtube");
    let instagram = document.querySelector("#instagram");
    let selectionGrid = document.querySelector("#selectionGrid");
    let titleBar = document.querySelector("#header");
    let header = document.querySelector("#header-title");

    function orignalState() {
        header.style.textShadow = "none";
        header.textContent = "Choose a Platform";
        titleBar.setAttribute("class","fade");
        selectionGrid.style.top = "60%";
        selectionGrid.style.transform = "translate(-50%, -60%)";
        selectionGrid.setAttribute("class","fade")
        selectionGrid.innerHTML = `
        <a id="tiktok"><i class="fa-brands fa-tiktok" style="margin-right: 5px;"></i>TikTok</a>
        <a id="youtube"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Youtube</a>
        <a id="instagram"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Instagram</a>
        `;
        addServiceListeners();
    }
    
    function addBackButtonListener() {
        let back = selectionGrid.querySelector("#back");
        back.addEventListener("click", () => {
            orignalState();
        });
    }

    function addServiceListeners() {
        tiktokButton = document.querySelector("#tiktok");
        youtubeButton = document.querySelector("#youtube");
        instagram = document.querySelector("#instagram");

        tiktokButton.addEventListener("click", serviceClickHandler);
        youtubeButton.addEventListener("click", serviceClickHandler);
        instagram.addEventListener("click", serviceClickHandler);
    }

    function serviceClickHandler(event) {
        let service = event.target.id;
        header.setAttribute("class","fade")
        selectionGrid.style.top = "65%";
        selectionGrid.style.transform = "translate(-50%, -65%)";
        header.innerHTML = `
        <i class="fa-brands fa-${service}" style="font-size: 4vh"></i>
        <h1 style="margin-top: -10px">${service.charAt(0).toUpperCase() + service.slice(1)} Service</h1>`;
        selectionGrid.innerHTML = `
        <a class="fade" id="f1"><i class="fa-solid fa-person" style="margin-right: 5px;"></i>Followers</a>
        <a class="fade" id="f2"><i class="fa-solid fa-thumbs-up" style="margin-right: 5px;"></i>Likes</a>
        <a class="fade" id="f3"><i class="fa-solid fa-eye" style="margin-right: 5px;"></i>Views</a>
        <a class="fade" id="back"><i class="fa-solid fa-circle-xmark"></i></a>
        `;

        let followers = selectionGrid.querySelector("#f1");
        let likes = selectionGrid.querySelector("#f2");
        let views = selectionGrid.querySelector("#f3");
        let back = selectionGrid.querySelector("#back");

        [followers, likes, views].forEach((element) => {
            element.addEventListener("click", () => {
                selectionGrid.style.top = "55%";
                selectionGrid.style.transform = "translate(-50%, -55%)";
                let clickedElement = element.textContent;
                header.textContent = "";
                selectionGrid.innerHTML = `
                <i class="fa-brands fa-${service} fade" style="font-size: 6vh;"></i>
                <h1 id="header-title" class="fade" style="margin-top: 5px;">${service.charAt(0).toUpperCase() + service.slice(1)} ${clickedElement} </h1>
                <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
                <br>
                <input placeholder="Enter Link" class="fade" id="${service}Input" name="link">
                <br><br>
                <button id="sButton" class="fade" style="bottom: 65px;">Submit</button>
                <a class="fade" id="back"><i class="fa-solid fa-circle-xmark"></i></a>
                `;
                timer();
                addBackButtonListener();
            })
        });

        back.addEventListener("click", () => {
            orignalState();
        });
    }

    addServiceListeners();
});

console.log("Mobile script loaded!");