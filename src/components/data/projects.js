import tasky from "../../assets/project-images/tasky.JPG";
import covidAPI from "../../assets/project-images/covid-api.JPG";
import mapper from "../../assets/project-images/mapper.JPG";
import pingPong from "../../assets/project-images/ping-pong.JPG";
import starWalk from "../../assets/project-images/starwalk.JPG";
import dogFinder from "../../assets/project-images/dog-finder.JPG";
import alarmClock from "../../assets/project-images/alarm-clock.JPG";

export const ProjectData = [
    {
        id: 1,
        title: "Tasky",
        about: "A user can login him/her using email-password or using google. Also a user can create, mark a task completed or deleted the completed tasks of various categories. In the profile a user can update name / email id as needed and can also reset password if forgetten or already is logged in.",
        tags: ["NodeJs","MongoDB","ExpressJs","EJS-Template","PassportJs","Heroku"],
        demo: "https://tasky20.herokuapp.com/",
        github: "https://github.com/Divyansh-007/Tasky",
        image: tasky
    },
    {
        id: 2,
        title: "Hospital API",
        about: "A simple API with basic functionality for a patient to be registered and for a doctor to register and create reports for patients and keep track of all of them.",
        tags: ["NodeJs","MongoDB","ExpressJs","EJS-Template","PassportJs","Heroku","Postman"],
        demo: "https://covid-track-api.herokuapp.com/",
        github: "https://github.com/Divyansh-007/HospitalAPI",
        image: covidAPI
    },
    {
        id: 3,
        title: "Mapper",
        about: "A user can search a city by name and can get various details like current time, date, temperature, weather conditions(pressure, humidity, winds and cloudiness) for the same. Also next 7 days forecast is also visible for the same city.",
        tags: ["HTML","CSS","JavaScript","Leafletjs", "Geocode.xyz API","Open Weather One Call API"],
        demo: "https://divyansh-007.github.io/Mapper/",
        github: "https://github.com/Divyansh-007/Mapper",
        image: mapper
    },
    {
        id: 4,
        title: "Ping Pong",
        about: "Online recreation of classic game ping pong. User can play with the controls and the it keeps the track of maximum score.",
        tags: ["HTML","CSS","JavaScript"],
        demo: "https://divyansh-007.github.io/Ping-Pong/",
        github: "https://github.com/Divyansh-007/Ping-Pong",
        image: pingPong
    },
    {
        id: 5,
        title: "Star Walk",
        about: "A simple project to view Astronomical Picture Of the Day by NASA. User can everyday visit and view the APOD released by NASA.",
        tags: ["HTML","CSS","JavaScript","NASA-APOD API"],
        demo: "https://divyansh-007.github.io/Star-Walk/",
        github: "https://github.com/Divyansh-007/Star-Walk",
        image: starWalk
    },
    {
        id: 6,
        title: "Dog Finder",
        about: "For all the dog lovers, created a small project to fetch the image of any dog breed selected. User can select one of the breeds from the dropdown and can view various images available from the database.",
        tags: ["HTML","CSS","JavaScript","Dog API"],
        demo: "https://divyansh-007.github.io/Dog-Finder/",
        github: "https://github.com/Divyansh-007/Dog-Finder",
        image: dogFinder
    },
    {
        id: 7,
        title: "Alarm Clock",
        about: "A simple alarm clock application.",
        tags: ["HTML","CSS","JavaScript"],
        demo: "https://divyansh-007.github.io/Alarm-Clock/",
        github: "https://github.com/Divyansh-007/Alarm-Clock",
        image: alarmClock
    }
];