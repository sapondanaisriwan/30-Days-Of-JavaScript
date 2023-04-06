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
        font-family: 'Poppins', sans-serif;
        color: white;
        height: 100vh;
        width: 100vw;
    }

    body:before {
        content: "";
        background-image: url("../images/galaxy.gif");
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .user-input {
        display: flex;
        justify-content: center;
        gap: 16px;

        padding-top: 32px;
        padding-bottom: 32px;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button,
    select,
    input {
        padding: 8px;
        border-radius: 6px;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .description {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex-container {
        display: flex;
        flex: wrap;
        gap: 40px;
        padding: 50px;
        border-radius: 4px;
        // background-color: rgba(255, 255, 255,0.2);
    }

    .dummy-planet {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255,0.3);
        margin: auto;
        margin-top: 20px;
    }

    .inside-description {
        padding: 20px;
        border-radius: 10px;
        // background-color: rgba(255, 255, 255,0.1);
    }
    
    img {
        width: 400px;
        height: 400px;
        object-fit: cover;
    }
`)