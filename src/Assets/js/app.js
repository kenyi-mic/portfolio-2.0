import gsap from "gsap";
import Typed from "typed.js";
import Swiper, { Pagination, Navigation } from "swiper";
import { reviewers } from "./data";

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
Swiper.use([Pagination, Navigation]);
var swipper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const swiper_container = document.querySelector(".swiper-wrapper");
reviewers.map((reviewer) => {
  let template = `
  <div class="swiper-slide"> <div class="review"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/> </g> </svg> <div class="review__card"> <div class="review__topborder"> </div> <div class="review__text"> <span>${reviewer.review.substring(
    1,
    0
  )}</span> ${reviewer.review.substring(
    1,
    reviewer.review.length
  )} </div> <img src=${reviewer.image} alt=${
    reviewer.name
  } class="review__img"> <div class="review__profile"> <span>${
    reviewer.name
  }</span> <span>${reviewer.position}</span> </div> </div> </div></div>`;

  swiper_container.innerHTML += template;
});
