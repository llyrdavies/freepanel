// function loadCSSFile() {
//     const screenWidth = window.innerWidth;
  
//     if (screenWidth <= 768) {
//       document.querySelector('#dynamic-styles').href = 'mobile.css';
//     } else {
//       document.querySelector('#dynamic-styles').href = 'desktop.css';
//     }
// }

// window.addEventListener('load', loadCSSFile);
// window.addEventListener('resize', loadCSSFile);

document.addEventListener("DOMContentLoaded", () => {
    let tiktokButton = document.querySelector("#tiktok");
    let youtubeButton = document.querySelector("#youtube");
    let instagram = document.querySelector("#instagram");
    let selectionGrid = document.querySelector("#selectionGrid");
    let titleBar = document.querySelector("#header");
    let header = document.querySelector("#header-title");

    function orignalState() {
        header.style.textShadow = "none";
        header.textContent = "Select Service";
        header.setAttribute("class","fade");
        selectionGrid.style.top = "60%";
        selectionGrid.style.transform = "translate(-50%, -60%)";
        selectionGrid.setAttribute("class","fade")
        selectionGrid.innerHTML = `
        <a id="tiktok"><i class="fa-brands fa-tiktok" style="margin-right: 5px;"></i>TikTok</a>
        <a id="youtube"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Youtube</a>
        <a id="instagram"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Instagram</a>
        `;
    }
    
    tiktokButton.addEventListener("click", () => {
        header.setAttribute("class","fade")
        header.innerHTML = `
        <i class="fa-brands fa-tiktok" style="font-size: 4vh"></i>
        <h1 style="margin-top: -10px">TikTok Service</h1>`;
        header.style.textShadow = "2px 2px turquoise, -2px -2px red";
        selectionGrid.innerHTML = `
        <a class="fade" id="f1"><i class="fa-solid fa-person" style="margin-right: 5px;"></i>Followers</a>
        <a class="fade" id="f2"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Likes</a>
        <a class="fade" id="f3"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Views</a>
        <a class="fade" id="back">Back</a>
        `;
        let back = selectionGrid.querySelector("#back");
        back.addEventListener("click", () => {
            orignalState()
        });

        selectionGrid.style.top = "75%";
        selectionGrid.style.transform = "translate(-50%, -75%)";
    });

    youtubeButton.addEventListener("click", () => {
        header.setAttribute("class","fade")
        header.innerHTML = `
        <i class="fa-brands fa-youtube" style="font-size: 4vh;"></i>
        <h1 style="margin-top: -10px">Youtube Service</h1>`;
        selectionGrid.innerHTML = `
        <a class="fade" id="f1"><i class="fa-solid fa-person" style="margin-right: 5px;"></i>Followers</a>
        <a class="fade" id="f2"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Likes</a>
        <a class="fade" id="f3"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Views</a>
        <a class="fade" id="back">Back</a>
        `;
        let back = selectionGrid.querySelector("#back");
        back.addEventListener("click", () => {
            orignalState()
        });

        selectionGrid.style.top = "75%";
        selectionGrid.style.transform = "translate(-50%, -75%)";
    });

    instagram.addEventListener("click", () => {
        header.setAttribute("class","fade")
        header.innerHTML = `
        <i class="fa-brands fa-instagram" style="font-size: 4vh"></i>
        <h1 style="margin-top: -10px">Instagram Service</h1>`;
        selectionGrid.innerHTML = `
        <a class="fade" id="f1"><i class="fa-solid fa-person" style="margin-right: 5px;"></i>Followers</a>
        <a class="fade" id="f2"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Likes</a>
        <a class="fade" id="f3"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Views</a>
        <a class="fade" id="back">Back</a>
        `;
        let back = selectionGrid.querySelector("#back");
        back.addEventListener("click", () => {
            orignalState()
        });

        selectionGrid.style.top = "75%";
        selectionGrid.style.transform = "translate(-50%, -75%)";
    });
});