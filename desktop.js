let timerExists = false;

document.addEventListener("DOMContentLoaded", () => {
    let navbar = document.querySelector("#nav");
    let menuIcon = document.querySelector(".menu-icon");
    let header = document.querySelector("#header");
    let selectionGrid = document.querySelector("#selectionGrid");

    let tiktok = document.querySelector("#tiktok");
    let instagram = document.querySelector("#instagram");
    let youtube = document.querySelector("#youtube");

    function startTimer(duration) {
      var timer = duration, minutes, seconds;
      var display = document.querySelector('#timer');
      display.style.display = 'block';
      var intervalId = setInterval(function () {
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
            <select name="cars" id="cars" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="tiktokInput">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            let submit = header.querySelector("#sButton");

            let timer = document.createElement("p");
            timer.setAttribute("id", "timer");
            selectionGrid.appendChild(timer);
            
            let savedTime = localStorage.getItem('savedTime');
            let submitButton = document.querySelector("#sButton");
            
            if (savedTime) {
              let timeLeft = (180000 - (Date.now() - savedTime)) / 1000;
              if (timeLeft > 0) {
                submitButton.disabled = true;
                submitButton.style.opacity = 0.5;
                startTimer(timeLeft);
              } else {
                submitButton.disabled = false;
                submitButton.style.opacity = 1;
              }
            }

            submit.addEventListener("click", () => {
                startTimer(180);
                localStorage.setItem('savedTime', Date.now());
            });


            
        })

        instagram.addEventListener("click", () => {
            header.innerHTML = `
            <i class="fa-brands fa-instagram fade" style="font-size: 4vh"></i>
            <h1 id="header-title" class="fade" style="margin-top: 5px;">Instagram Service</h1>
            <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
            <br>
            <select name="cars" id="cars" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="instagramInput">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            let submit = header.querySelector("#sButton");

            submit.addEventListener("click", () =>{
                let timer = document.createElement("p");
                timer.setAttribute("id","timer");
                selectionGrid.appendChild(timer);

                let timeInSeconds = 180;

                function updateTimer() {
                    const minutes = Math.floor(timeInSeconds / 60);
                    const seconds = timeInSeconds % 60;
            
                    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
                    timeInSeconds--;
            
                    if (timeInSeconds < 0) {
                        clearInterval(timerInterval);
                        timer.textContent = "0";
                    }
                }
            
                const timerInterval = setInterval(updateTimer, 1000);
            });
        })

        youtube.addEventListener("click", () => {
            header.innerHTML = `
            <i class="fa-brands fa-youtube fade" style="font-size: 4vh"></i>
            <h1 id="header-title" class="fade" style="margin-top: 5px;">Youtube Service</h1>
            <p class="fade" style="margin-top:-18px;font-family: 'Inter';font-size:1.5vh;">Enter a link, Free Panel will provide a random value.</p>
            <br>
            <select name="cars" id="cars" class="fade">
                <option value="followers">Followers</option>
                <option value="views">Views</option>
                <option value="likes">Likes</option>
            </select>
            <br><br>
            <input placeholder="Enter Link" class="fade" id="youtubeInput">
            <br><br>
            <button id="sButton" class="fade">Submit</button>
            `;
            let submit = header.querySelector("#sButton");

            submit.addEventListener("click", () =>{
                let timer = document.createElement("p");
                timer.setAttribute("id","timer");
                selectionGrid.appendChild(timer);

                let timeInSeconds = 180;

                function updateTimer() {
                    const minutes = Math.floor(timeInSeconds / 60);
                    const seconds = timeInSeconds % 60;
            
                    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
                    timeInSeconds--;
            
                    if (timeInSeconds < 0) {
                        clearInterval(timerInterval);
                        timer.textContent = "0";
                    }
                }
            
                const timerInterval = setInterval(updateTimer, 1000);
            });
        })
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector(".menu-icon");

    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
    });
});