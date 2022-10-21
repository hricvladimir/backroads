// ********** set date ************
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-button");
const links = document.getElementById("navbar-mobile");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("showLinks");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});

const mainScroll = document.getElementById("hero-btn");
if (mainScroll != null) {
  mainScroll.addEventListener("click", (e) => {
    e.preventDefault();
    const id = document.getElementById("tours");
    const position = id.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
}
const goBackScroll = document.getElementById("back");
if (goBackScroll != null) {
  goBackScroll.addEventListener("click", () => {
    const id = document.getElementById("hero");
    const position = id.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
}
