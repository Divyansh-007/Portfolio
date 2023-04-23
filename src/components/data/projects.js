import crypto from "../../assets/project-images/crypto.JPG";
import getFit from "../../assets/project-images/getFit.JPG";
import mapper from "../../assets/project-images/mapper.JPG";

export const ProjectData = [
  {
    id: 1,
    title: "Crypto@One",
    about:
      "One-stop destination for all crypto-currency enthusiasts. Here one can get updates about the market from across the globe and can look for individual stats about any of the crypto-currencies available.",
    tags: ["Crypto", "ReactJs", "Redux", "Rapid-API"],
    demo: "https://cryptoatone.netlify.app/",
    image: crypto,
  },
  {
    id: 2,
    title: "Get Fit",
    about:
      "Dedicated to all the fitness lovers a small effort to bring together some good resources at one place. Let's get fit....",
    tags: ["Health", "ReactJs", "Redux", "Rapid-API"],
    demo: "https://getfit-fitnessclub.netlify.app/",
    image: getFit,
  },
  {
    id: 3,
    title: "Mapper",
    about:
      "A user can search a city by name and can get various details like current time, date, temperature, weather conditions(pressure, humidity, winds and cloudiness) for the same. Also next 7 days forecast is also visible for the same city.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Leafletjs",
      "Geocode.xyz API",
      "Open Weather One Call API",
    ],
    demo: "https://divyansh-007.github.io/Mapper/",
    github: "https://github.com/Divyansh-007/Mapper",
    image: mapper,
  },
];
