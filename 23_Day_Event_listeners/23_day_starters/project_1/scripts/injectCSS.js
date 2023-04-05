const injectCSS = (css) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = css;
  document.documentElement.appendChild(style);
};

injectCSS(`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  ul, li {
    list-style-type: none;
  }

  #header {
    text-align: center;
  }

  .container {
    text-align: center;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1100px;
  }

  li {
    font-size: 24px;
    border-radius: 10px;

    padding: 8px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    max-width: 340px;
    height: 100px;
  }

`);
