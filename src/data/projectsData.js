// import one from "../assets/svg/projects/one.svg";
// import two from "../assets/svg/projects/two.svg";
// import three from "../assets/svg/projects/three.svg";
// import four from "../assets/svg/projects/four.svg";
// import five from "../assets/svg/projects/five.svg";
// import six from "../assets/svg/projects/six.svg";
// import seven from "../assets/svg/projects/seven.svg";
// import eight from "../assets/svg/projects/eight.svg";

import React from "react";

export const projectsData = [
  {
    id: 3,
    projectName: "TATA 1mg-Clone",
    projectDesc:
      "Tata 1mg is India’s leading consumer health platform. It provides services, including e-pharmacy, diagnostics, e-consultation and health content.",
    tags: ["JavaScript","React", "Redux", "NodeJS","ExpressJS","MongoDB"],
    code: "https://github.com/Ghanishtkhurana/brief-toes-9591",
    demo: "https://5mg-vivek-bhatt05.vercel.app/",
    // image: three,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRcmRJ7xuNukTivouDSX6hVrRqKl1-iUcvAr1yd8_bA&s"
  },
  {
    id: 2,
    projectName: "RelianceDigital-Clone",
    projectDesc:
      "Reliance Digital is an Indian consumer electronics retailer.",
    tags: ["HTML", "CSS", "JavaScript","React","Redux","ChakraUI"],
    code: "https://github.com/Sonia-saini/-accidental-visitor-9960",
    demo: "https://melodic-syrniki-172917.netlify.app/",
    // image: two,
    image: "data:image/png;base64,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",
  },
  {
    id: 1,
    projectName: "KFC-Clone",
    projectDesc:
      "KFC is an American fast food restaurant chainand world 2nd largest restaurant chain.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    code: "https://github.com/sumansauravmay/alive-run-138/tree/main/kfctwo",
    demo: "https://kfctwo-sumansauravmay.vercel.app/",
    // image: one,
    image: "https://thumbs.dreamstime.com/b/kfc-logo-kentucky-fried-chicken-global-fast-food-chain-sign-font-shop-60145767.jpg",
  },
   {
    id: 4,
    projectName: "Ayoa-Clone",
    projectDesc:
      "Ayoa is the original mind mapping app, pushing the boundaries of brainstorming tonew levels.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/omesh96/safe-bridge-5506",
    demo: "https://startling-youtiao-e9d129.netlify.app/",
    // image: two,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzxSKPVmgftrKN6i4UnD8Cg-UrupTp-0z52R6WlOeOp97dE-CA2usK8jAx2pGwoBCvXg&usqp=CAU",
   },

  // {
  //   id: 4,
  //   projectName: "Android Patient Tracker",
  //   projectDesc:
  //     "This project involves the development of an Android application for viewing and managing patient data.",
  //   tags: ["Flutter", "Firebase"],
  //   code: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   image: four,
  // },
  // {
  //   id: 5,
  //   projectName: "E-Commerce App",
  //   projectDesc: "A Simple E-commerce application",
  //   tags: ["React Native", "Firebase"],
  //   code: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   image: five,
  // },
  // {
  //   id: 6,
  //   projectName: "Uber Lite",
  //   projectDesc: "Uber clone",
  //   tags: ["Flutter"],
  //   code: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   image: six,
  // },
  // {
  //   id: 7,
  //   projectName: "Stock Market App",
  //   projectDesc: "A simple stock market API app",
  //   tags: ["React", "Redux", "Bootstrap"],
  //   code: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   image: seven,
  // },
  // {
  //   id: 8,
  //   projectName: "Car Pooling System",
  //   projectDesc:
  //     "The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution",
  //   tags: ["Flutter", "React"],
  //   code: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
  //   image: eight,
  // },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
