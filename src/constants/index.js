import {
  adrianPortfolio,
  bankmodern,
  brainwave,
  c,
  fm,
  gsap,
  GT3,
  meta,
  next,
  re,
  shopify,
  starbucks,
  stream,
  tail,
  tesla,
  three,
  ts,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Overview",
    url: "/",
  },
  {
    id: "1",
    title: "Experience",
    url: "/brijeshportfolio/#/experiences",
  },
  {
    id: "2",
    title: "Projects",
    url: "/brijeshportfolio/#/Projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "/brijeshportfolio/#/Contact",
  },
];

export const heading = [
  {
    id: "4",
    title: "Crafting",
  },
  {
    id: "5",
    title: "Seamless",
  },
  {
    id: "6",
    title: "Solution",
  },
];

export const footer = [
  {
    id: "7",
    title: "Overview",
    url: "/brijeshportfolio/#/Overview",
  },
  {
    id: "6",
    title: "Experience",
    url: "/brijeshportfolio/#/Experience",
  },
  {
    id: "5",
    title: "Projects",
    url: "/brijeshportfolio/#/Projects",
  },
  {
    id: "5",
    title: "Contact",
    url: "/brijeshportfolio/#/experiences",
  },
];

export const projects = [
  {
    id: 1,
    title: "Brain wave Explore the possibilities of AI",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: brainwave,
    iconLists: [re, tail, ts, three, fm],
    link: "https://brijstack.github.io/brainwave/",
  },
  {
    id: 2,
    title: "Bank Modern App the next generation payment method",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: bankmodern,
    iconLists: [next, tail, ts, stream, c],
    link: "https://brijstack.github.io/Bank-Modern-App/",
  },
  {
    id: 3,
    title: "GT3 Open AI Lets Build Something Amazing",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: GT3,
    iconLists: [re, tail, ts, three, c],
    link: "https://brijstack.github.io/gt3_Jsm/",
  },
  {
    id: 4,
    title: "Transforming Concepts into Seamless User Experiences",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: adrianPortfolio,
    iconLists: [next, tail, ts, three, gsap],
    link: "https://brijstack.github.io/Adrianportfolio/",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const skills1 = [next, tail, ts, three, gsap];
export const skills2 = [re, tail, ts, three, c];
