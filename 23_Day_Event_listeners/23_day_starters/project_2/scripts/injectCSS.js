const injectCSS = (css) => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.textContent = css;
    document.documentElement.appendChild(style);
}

injectCSS(`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Poppins;
    }

    html, body {
        border-color: #7a7262;
        color: #f4e7cf;
        background-color: #252420;
    }

    h2 {
        font-size: 38px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .show-text h1 {
        display: inline;
        font-size: 45px;
    }

    h1:nth-child(2) {
        color: lime;
    }

    .show-text, .show-key {
        padding: 16px;
    }
`)