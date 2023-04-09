let prevButton = null;

const wrapper = document.getElementById("wrapper");
wrapper.addEventListener("click", (e) => {
  const isButton = e.target.nodeName === "BUTTON";

  console.log(isButton, prevButton)
  if (!isButton) {
    return;
  }
  e.target.classList.add("active"); // Add .active CSS Class

  if (prevButton !== null) {
    prevButton.classList.remove("active"); // Remove .active CSS Class
  }

  prevButton = e.target;
});
