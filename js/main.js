// vars of btns toggle
let menuBtn = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar");
let body = document.querySelector("body");
// end btns

// toggle menu
menuBtn.addEventListener("click", () => {
  document.querySelector(".one").classList.toggle("edit1");
  document.querySelector(".two").classList.toggle("hide2");
  document.querySelector(".three").classList.toggle("edit3");
});
// end toggle menu

// on scroll change bg

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    navbar.classList.add("bg");
  } else {
    navbar.classList.remove("bg");
  }
});

// scroll to top
window.addEventListener("scroll", () => {
  if (scrollY > 600) {
    document.querySelector("#up").classList.add("open");
  } else {
    document.querySelector("#up").classList.remove("open");
  }
});
document.querySelector("#up").addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelector(".contacts").onclick = (e) => {
  e.preventDefault();
  window.location = "contact.html";
};
