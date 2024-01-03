
document.addEventListener("DOMContentLoaded", function() {
    let container = document.querySelector("html");
    if(window.innerWidth <= 768){
        container.innerHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <script src="changeHTML.js"></script>
            <title>Free Panel</title>
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
            <script src="https://kit.fontawesome.com/f2057f9f44.js" crossorigin="anonymous"></script>
            <link id="dynamic-styles" rel="stylesheet" type="text/css" href="mobile.css">
            <script>
            let isMobile = window.innerWidth <= 768;
      
            let scriptSrc = isMobile ? 'mobile.js' : 'main.js';
      
            let scriptElement = document.createElement('script');
            scriptElement.src = scriptSrc;
            scriptElement.id = 'js';
      
            document.head.appendChild(scriptElement);
          </script>
        </head>
        <body>
        <div id="particles-js"></div>
        <script src="https://app.darksidepanel.com/assets/js/particles.js"></script>
        <script src="https://app.darksidepanel.com/assets/js/app.js"></script>

        <div id="navbar">
            <a id="navbar-docs" href="https://darksidepanel.com/api">API Docs</a>
            <a id="navbar-title"></a>
            <a id="navbar-button" href="https://darksidepanel.com">Upgrade</a>
        </div>

        <section id="displaySection">
            <div id="ad">
            <img src="https://cdn.discordapp.com/attachments/1012809224675401849/1185721207673327657/standard.gif?ex=6590a3ed&is=657e2eed&hm=27d41aae900a9d5354c8786c6eae0a2be07f12fae36f8cfaf51848a3bcd70d29&" alt="Animated Ad">
            </div>

            <div id="header">
            <h1 id="header-title">Choose A Platform</h1>
            </div>

            <div id="selectionGrid">
            <div id="buttons">
                <a id="tiktok"><i class="fa-brands fa-tiktok" style="margin-right: 5px;"></i>TikTok</a>
                <a id="youtube"><i class="fa-brands fa-youtube" style="margin-right: 5px;"></i>Youtube</a>
                <a id="instagram"><i class="fa-brands fa-instagram" style="margin-right: 5px;"></i>Instagram</a>
            </div>
            </div>
            <p id="timer"></p>
        </section>

        <footer class="footer">
            <p>Powered by <a href="https://darksidepanel.com">DarkSide Panel</a> | V0.3 (dev)</p>
        </footer>
        </body>
        </html>
        `;
    }
});

