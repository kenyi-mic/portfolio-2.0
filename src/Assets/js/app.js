import gsap from "gsap";
import Typed from "typed.js";
import Swiper from "swiper";

const loaders = document.querySelector(".loading__bar--inner");
const loaderText = document.querySelector(".loading__counter--number");
let count = 0;
let loaderInterval = setInterval(() => {
  loaders.style.width = count + "%";
  loaderText.innerText = count + "%";
  count++;
  if (count === 101) {
    clearInterval(loaderInterval);
    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text, .loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      opacity: 0.5,
      background: "transparent",
    });
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      opacity: 0.5,
      rotate: "360deg",
    });
  }
}, 30);

new Typed(".auto-type-name", {
  strings: ["Michael Kenyi", "Michael Henry"],
  typeSpeed: 200,
  backSpeed: 200,
  showCursor: false,
  loop: false,
});
new Typed(".auto-type-profession", {
  strings: [
    "Mobile Application Developer",
    "Web Application Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  showCursor: false,
  loop: false,
});

//swiper

var swipper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
