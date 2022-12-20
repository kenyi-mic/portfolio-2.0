import images from "./images";

let reviewers = [
  {
    name: "Luka Garang",
    position: "Founder | Hagana Wen",
    image: images.luka,
    review: `Fully commited and ready to share all he knows with you, when ever you seek for
        his
        hellp. Michael explain for me web devlopment is very easy way possible from html
        to
        react and through his help my carrier in web development is like a breezy. For
        me
        it's like he know almost everything because whenever I ask him, there's always
        postive feedback for my question. He learn everyday and make sure he stregthen
        his
        weakness. If you want to learn coding whether from scratch or intermediate I
        prefer
        him.`,
  },

  {
    name: "Jhumon Chudhury",
    position: "Head forign affairs | University of global village",
    image: images.Jhumon,
    review: `Michael, you are one of the disciplined students 
    I have worked with so far this few years, I wish you
     all the best in your carrier and with your current skills
      I know the sky is not your limit. Keep going and face the
       future with boldness.`,
  },
  {
    name: "Mehndi Moon",
    position: "Student | University of global village",
    image: images.Mahedi,
    review: `Thanks brother, you helped me with couple school 
    projects and actually take your time to teach me all these 
    programming basics, now I feel like pro in my class because 
    only few have the level of knowedge I posses, I will definetly 
    refer my friens to learn from you.`,
  },
  {
    name: "Saimoon Hung",
    position: "Founder | Tech Sana",
    image: images.sana,
    review: `Skill is potrayed by humanity and kindness, Michael doesn't treat 
    people with difference regardless of background or culture, he treat based
     on content of their character these few years we have been together we learned
      a lot from each other and can't stop. If you need a mazing worker who only can't
       provide quality but care about every part of it. this is the person. He's amazing 
       in what he does. `,
  },
];

let projects = [
  {
    id: 1,
    name: "Amazon-2.0",
    shortDesc: "Amazing Functionalities",
    createdAt: "Nov 23 2021",
    image: images.amazon,
    code: "Amazon 2.0 Source Code",
    sourcelink: "https://github.com/kenyi-mic/Amazon-clone-2.0",
    live: "Amazon 2.0 Live Preview",
    liveLink: "https://amazon-clone-2-0-foye4mp9g-kenyi-mic.vercel.app/",
    technologies: [
      {
        name: "NEXT JS",
        title: `Next js`,
        link: "https://nextjs.org/",
      },
      {
        name: "REACT JS",
        title: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "TAILWIND CSS",
        title: "Tailwindcss",
        link: "https://tailwindcss.com/",
      },
      {
        name: "STRIPE",
        title: "Strip payement",
        link: "https://stripe.com/en-gb-us",
      },
      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
      {
        name: "Vercel",
        title: "For Deployment!",
        link: "https://vercel.com/",
      },
    ],
  },
  {
    id: 2,
    name: "Beeflix",
    shortDesc: "Super Streaming platform",
    createdAt: "March 15, 2021",
    image: images.beeflix,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/netflix-build",
    live: "Beeflix Live Preview",
    liveLink: "https://beeflix-88dfc.web.app/",
    technologies: [
      {
        name: "REACT JS",
        title: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "Firebase",
        title: "Database",
        link: "https://firebase.google.com/",
      },
      {
        name: "CSS3",
        title: "Style sheet css",
        link: "https://drafts.csswg.org/",
      },
      {
        name: "Material UI",
        title: "Icons and styles",
        link: "https://mui.com/material-ui/material-icons/",
      },
      {
        name: "MOVIE API",
        title: "Movie API",
        link: "https://stripe.com/en-gb-us",
      },
      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
    ],
  },
  {
    id: 3,
    name: "Admin Dashboard",
    shortDesc: "Slick Design",
    createdAt: "May 22, 2022",
    image: images.dashboard,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/DashBoard",
    live: "Dashboard Live Preview",
    liveLink: "https://hyper-dashboard-26cc76.netlify.app/",
    technologies: [
      {
        name: "REACT JS",
        title: "Reactapp",
        link: "https://reactjs.org/",
      },
      {
        name: "SASS",
        title: "Styling Sass",
        link: "https://sass-lang.com/",
      },
      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
    ],
  },
  {
    id: 4,
    name: "Luka's Blog",
    shortDesc: "Full Stack",
    createdAt: "Jun 03, 2022",
    image: images.blog,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/Luka_blog",
    live: "Dashboard Live Preview",
    liveLink: "https://luka-blog.vercel.app/",
    technologies: [
      {
        name: "NEXT JS",
        title: "Next js",
        link: "https://nextjs.org/",
      },
      {
        name: "REACT JS",
        title: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "TAILWIND CSS",
        title: "Tailwindcss",
        link: "https://tailwindcss.com/",
      },
      {
        name: "TYPESCRIPT",
        title: "Language",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
      {
        name: "SANITY CMS",
        title: "CotentManager ",
        link: "https://www.sanity.io/",
      },
    ],
  },
  {
    id: 5,
    name: "NFT Mint Market place",
    shortDesc: "Web Three",
    createdAt: "April 03, 2022",
    image: images.nft,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/Hyper-nft-drop",
    live: "NFT Market Live Preview",
    liveLink: "https://hyper-nft-drop-3x1hbu8sy-kenyi-mic.vercel.app/",
    technologies: [
      {
        name: "NEXT JS",
        title: "Next js",
        link: "https://nextjs.org/",
      },
      {
        name: "REACT JS",
        title: "React",
        link: "https://reactjs.org/",
      },
      {
        name: "TAILWIND CSS",
        title: "Tailwindcss",
        link: "https://tailwindcss.com/",
      },
      {
        name: "THIRD WEB",
        title: "Supply store",
        link: "https://thirdweb.com/",
      },
      {
        name: "TYPESCRIPT",
        title: "Language",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
      {
        name: "ETHERS",
        title: "JavaScript Etherium plugin",
        link:
          "https://moralis.io/ethers-js-tutorial-how-to-get-started-using-a-simple-ethers-js-example/",
      },
      {
        name: "SANITY CMS",
        title: "CotentManager ",
        link: "https://www.sanity.io/",
      },
    ],
  },
  {
    id: 6,
    name: "Responsive Portfolio",
    shortDesc: "HTML5 Portfolio",
    createdAt: "Nov 30, 2020",
    image: images.resume,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/portfolio-web",
    live: "Portfolio Live Preview",
    liveLink: "https://kenyi-mic.github.io/portfolio-web/site",
    technologies: [
      {
        name: "HTML5",
        title: "Html version 5",
        link: "https://html.spec.whatwg.org/multipage/",
      },
      {
        name: "CSS3",
        title: "3rd verion of CSS",
        link: "https://drafts.csswg.org/",
      },
      {
        name: "JAVASCRIPT",
        title: "Scripting Language",
        link: "https://www.javascript.com/",
      },
    ],
  },
  {
    id: 7,
    name: "Portfolio ",
    shortDesc: "Bootstrap and JavaScript",
    createdAt: "Nov 23, 2022",
    image: images.portfolio,
    code: "Source code",
    sourcelink: "https://github.com/kenyi-mic/Portfolio_bootstrap",
    live: "Portfolio Live Preview",
    liveLink: "https://michaelkenyi-resume-bootstrap.netlify.app",
    technologies: [
      {
        name: "HTML5",
        title: "Html version 5",
        link: "https://html.spec.whatwg.org/multipage/",
      },
      {
        name: "JAVASCRIPT",
        title: "Scripting Language",
        link: "https://www.javascript.com/",
      },
      {
        name: "BOOTSTRAP5",
        title: "Responsive Design tool",
        link: "https://getbootstrap.com/",
      },

      {
        name: "NODE Js",
        title: "Node package manager",
        link: "https://nextjs.org/",
      },
    ],
  },
];

export { reviewers, projects };
