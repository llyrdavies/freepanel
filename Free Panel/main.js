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
            let tiktok = document.querySelector("#tiktok");
            let instagram = document.querySelector("#instagram");
            let youtube = document.querySelector("#youtube");
            
            startTimer(180);
            localStorage.setItem('savedTime', Date.now());
            let header = document.querySelector("#header");
            header.innerHTML = `
            <i class="fa-solid fa-circle-check fade" style="font-size: 6vh; color: green;"></i>
            <h1 class="fade" style="font-size: 4vh;">Request Sent</h1>`;

            tiktok.addEventListener("click",redirect("tiktok"));
            instagram.addEventListener("click",redirect("instagram"));
            youtube.addEventListener("click",redirect("youtube"));
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector("#nav");
    let menuIcon = document.querySelector(".menu-icon");
    let header = document.querySelector("#header");

    let tiktok = document.querySelector("#tiktok");
    let instagram = document.querySelector("#instagram");
    let youtube = document.querySelector("#youtube");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("open");
        if (navbar.classList.contains("open")) {
            navbar.style.width = "25%";
            navbar.style.opacity = 1;
        } else {
            navbar.style.width = "0";
            navbar.style.opacity = 0;
        }
        tiktok.addEventListener("click", () => {
            header.innerHTML = `
            <i class="fa-brands fa-tiktok fade" style="font-size: 4vh"></i>
            <h1 id="header-title" class="fade" style="margin-top: 5px;">TikTok Service</h1>
            <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
            <br>
            <select name="tools" id="tools" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="tiktokInput" name="link">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            timer();
        });

        instagram.addEventListener("click", () => {
            header.innerHTML = `
            <i class="fa-brands fa-instagram fade" style="font-size: 4vh"></i>
            <h1 id="header-title" class="fade" style="margin-top: 5px;">Instagram Service</h1>
            <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
            <br>
            <select name="tools" id="tools" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="instagramInput" name="link">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            timer();
        });

        youtube.addEventListener("click", () => {
            header.innerHTML = `
            <i class="fa-brands fa-youtube fade" style="font-size: 4vh"></i>
            <h1 id="header-title" class="fade" style="margin-top: 5px;">Youtube Service</h1>
            <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
            <br>
            <select name="tools" id="tools" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="youtubeInput" name="link">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            timer();
            });
});
});

document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
    });
});

console.log("Desktop script loaded!");