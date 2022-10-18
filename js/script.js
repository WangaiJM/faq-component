var titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  title.addEventListener("click", () => {
    removeActive();
    title.parentElement.parentElement.classList.add("active");
  });
});

function removeActive() {
  titles.forEach((title) => {
    title.parentElement.parentElement.classList.remove("active");
  });
}
