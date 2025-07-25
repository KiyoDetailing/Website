const menuOpenButton = document.querySelector("#menuopenbutton")
const navLinks = document.querySelectorAll(".nav-menu .nav-link")

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

const menuCloseButton = document.querySelector("#menuclosebutton")

menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});


navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
})

