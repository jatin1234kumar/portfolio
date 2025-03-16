const navLinks = document.querySelectorAll(".nav-link");
const sectionEl = document.querySelectorAll("section");

let currentSection = "#Section1";
window.addEventListener("scroll", () => {
  sectionEl.forEach((el) => {
    if (window.scrollY >= el.offsetTop - 58) {
      currentSection = el.id;
    }
  });

  navLinks.forEach((navEl) => {
    navEl.classList.remove("active");
    if (navEl.href.includes(currentSection)) {
      navEl.classList.add("active");
    }
  });
});

function myFunction(e) {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeNavbar() {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}
