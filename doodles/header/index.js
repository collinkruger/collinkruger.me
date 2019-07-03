document
.querySelector(".header>.menu-button")
.addEventListener("click", function () {
    document.body.parentElement.classList.toggle("menu-open");
});