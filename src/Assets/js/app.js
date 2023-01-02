import gsap from "gsap";
import Typed from "typed.js";
import Swiper, { Pagination, Navigation } from "swiper";
import { faq, projects, reviewers } from "./data";
import imagesLoaded from "imagesloaded";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";

class DisableScrollPlugin extends ScrollbarPlugin {
  static pluginName = "disableScroll";

  static defaultOptions = {
    direction: "",
  };

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0;
    }

    return { ...delta };
  }
}

// load the plugin
Scrollbar.use(DisableScrollPlugin);

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
      duration: 1,
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
    imagesLoaded(document.querySelectorAll("img"), () => {
      gsap.to(".loading", {
        delay: 2,
        duration: 2,
        zIndex: 1,
        opacity: 0.1,

        background: "transparent",
      });
      gsap.to(".loading__svg", {
        delay: 2,
        duration: 100,
        opacity: 0.5,
        rotate: "360deg",
      });
      gsap.to(".header", {
        duration: 1,
        delay: 2,
        top: "0",
      });
      gsap.to(".intro", {
        duration: 1,
        delay: 2,
        zIndex: 2,
      });
      gsap.to(".socials", {
        duration: 1,
        delay: 2.5,
        bottom: "10rem",
      });
      gsap.to(".scrollDown", {
        duration: 1,
        delay: 3,
        bottom: "3rem",
      });

      let options = {
        damping: 0.1,
        alwaysShowTracks: true,
      };
      let pageSmoothScroll = Scrollbar.init(
        document.body,
        {
          plugins: {
            disableScroll: {
              direction: "x",
            },
          },
        },
        options
      );
      pageSmoothScroll.track.xAxis.element.remove();
    });
  }
}, 5);

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

let project_container = document.querySelector(".project");
projects.map((project) => {
  let project_template = `<div class="project__header">
<span>${project.id}/${projects.length}</span>
<span>${project.createdAt}</span>
</div>
<div class="project__infos">
<h1 class="project__infos--name">
    ${project.name}<span> (${project.shortDesc})</span>
</h1>
</div>
<div class="project__img">
<img src=${project.image} alt=${project.name} />
<div class="project__links">
    <a href=${project.sourcelink} title=${project.code} target="_blank">
        <button class="contactButton">
            <span>Github</span>
        </button>
    </a>
    <a href=${project.liveLink} class="cirleEyeButton" title=${
    project.live
  } target="_blank">
        <svg class="textcircle" viewBox="0 0 500 500">
            <defs>
                <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" />
            </defs>
            <text>
                <textPath xlink:href="#textcircle" aria-label=".Click to see the live version."
                    textLength="900">
                    .Click to see the live version.
                </textPath>
            </text>
        </svg>
        <svg class="eye" aria-hidden="true" class="eye" viewBox="0 0 70 70"
            xmlns="http://www.w3.org/2000/svg">
            <path class="eye__outer"
                d="M10.5 35.308c5.227-7.98 14.248-13.252 24.5-13.252s19.273 5.271 24.5 13.252c-5.227 7.98-14.248 13.253-24.5 13.253s-19.273-5.272-24.5-13.253z" />
            <path class="eye__lashes-up"
                d="M35 8.802v8.836M49.537 11.383l-3.31 8.192M20.522 11.684l3.31 8.192" />
            <path class="eye__lashes-down"
                d="M35 61.818v-8.836 8.836zM49.537 59.237l-3.31-8.193 3.31 8.193zM20.522 58.936l3.31-8.193-3.31 8.193z" />
            <circle class="eye__iris" cx="35" cy="35.31" r="5.221" />
            <circle class="eye__inner" cx="35" cy="35.31" r="10.041" />
        </svg>
    </a>
</div>
<div class="project__tags">
${project.technologies.map(
  (item) => `
<a href=${item.link} target="_blank" title=${item.title} class="dependencyLinks">
    <span>${item.name}</span>
    <svg width="100%" height="9" viewBox="0 0 101 9">
        <path
            d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
            pathLength="1" fill="none" stroke="#000" />
    </svg>
</a>`
)}
   
</div>
</div>`;
  project_container.innerHTML += project_template;
});

//faq

let faq_container = document.querySelector(".question__container");

faq.map((items) => {
  let faq_template = `<div class="question">

  
  <div class="question__wrap">
  <div class="question__status"></div>
  <h3>${items.question}</h3>

</div>
<div class="question__answer">
  <p>${items.answer} </p>
</div>
</div>`;
  faq_container.innerHTML += faq_template;
});

let questions = [...document.querySelectorAll(".question")];

questions.map((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("open");
  });
});
