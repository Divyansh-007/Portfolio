import meta from "../../assets/license-images/meta.png";
import iima from "../../assets/license-images/iima.png";
import aws from "../../assets/license-images/aws.png";
import google from "../../assets/license-images/google.png";
import udemy from "../../assets/license-images/udemy.png";
import codingninjas from "../../assets/license-images/codingNinjas.png";

export const LicenseData = [
  {
    id: 1,
    title: "Meta Back-End Developer",
    provider: "Meta",
    about:
      "Meta Back-End Developer on Coursera. Certificate earned at July 02, 2025",
    tags: [
      "Algorithms",
      "GitHub",
      "Database Management Systems",
      "Relational Databases",
      "SQL",
      "Django (Web Framework)",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/H745BXLFGT99",
    image: meta,
  },
  {
    id: 2,
    title: "Leadership Skills",
    provider: "Indian Institute of Management Ahemdabad",
    about:
      "Leadership Skills from IIMA on Coursera. Certificate earned at September 01, 2024",
    tags: [
      "Mindfullness & Inner Stability",
      "Emotional Intelligence",
      "Learning Mindset",
      "Leadership Style & Culture",
      "Leadership & Ancient Wisdom : Mahabharata",
    ],
    credentialUrl:
      "https://coursera.org/share/4bedcfdb992192467c239333cf3cef5a",
    image: iima,
  },
  {
    id: 3,
    title: "Agile Project Management",
    provider: "Google",
    about:
      "Agile Project Management by Google on Coursera. Certificate earned at August 14, 2024",
    tags: ["Agile Model", "Waterfall Model", "Scrum", "Kanban Board"],
    image: google,
  },
  {
    id: 4,
    title: "AWS Cloud Solutions Architect",
    provider: "AWS",
    about:
      "AWS Cloud Solutions Architect Specialization by AWS on Coursera. Certificate earned at May 12, 2024",
    tags: [
      "Amazon Web Services",
      "Cloud Computing",
      "Data Management",
      "Big Data",
      "Machine Learning",
      "Data Analytics & Visualization",
    ],
    credentialUrl:
      "https://coursera.org/share/05b88512024ec0917ae397d34dba888e",
    image: aws,
  },
  {
    id: 5,
    title: "Google Cybersecurity",
    provider: "Google",
    about:
      "Google Cybersecurity by Google on Coursera. Certificate earned at September 22, 2023",
    tags: [
      "Python",
      "Linux",
      "SQL",
      "Intrusion Detection System(IDS)",
      "Security Information & Event Management(SIEM) Tools",
    ],
    credentialUrl:
      "https://coursera.org/share/ba877fb6509c41e0fdc2fc0a9cd56f0b",
    image: google,
  },
  {
    id: 6,
    title: "MySQL",
    provider: "Udemy",
    about:
      "The Ulitmate MySQL Bootcamp on Udemy. Certificate earned at January 27, 2023",
    tags: ["SQL", "MySQL Workbench"],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-12fc0719-4556-4436-b6a4-4bf35724e1f9/",
    image: udemy,
  },
  {
    id: 7,
    title: "Docker & Kubernetes",
    provider: "Udemy",
    about:
      "Docker & Kubernetes on Udemy. Certificate earned at January 13, 2023",
    tags: ["Docker", "Containers"],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-46820061-0f8f-4d0f-94b5-2b36ddd9ebf9/",
    image: udemy,
  },
  {
    id: 8,
    title: "Linux Mastery",
    provider: "Udemy",
    about: "Linux Mastery on Udemy. Certificate earned at December 03, 2022",
    tags: ["Linux", "CLI"],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-d7dc602f-3fab-430a-b5f8-360871fb98ee/",
    image: udemy,
  },
  {
    id: 9,
    title: "Git & Github",
    provider: "Udemy",
    about:
      "The Complete Git Guide on Udemy. Certificate earned at December 03, 2022",
    tags: ["Git", "Github"],
    credentialUrl:
      "https://www.udemy.com/certificate/UC-519b2030-8e10-4d70-9503-00fac504e9f3/",
    image: udemy,
  },
  {
    id: 10,
    title: "MERN Stack Web Development",
    provider: "Coding Ninjas",
    about:
      "Career Camp | Web Developement Module by Coding Ninjas. From January 2021 to April 2021",
    tags: ["NodeJs", "MongoDB", "ReactJs", "Express"],
    credentialUrl:
      "http://files.codingninjas.in/certificate1354878f1d49344c8f0bdf1153cc0391706960d.pdf",
    image: codingninjas,
  },
  {
    id: 11,
    title: "Data Structures & Algorithms with Java",
    provider: "Coding Ninjas",
    about:
      "Career Camp | Web Developer Track by Coding Ninjas. From September 2020 to January 2021",
    tags: ["Java", "Data Structures", "Algorithms"],
    credentialUrl:
      "http://files.codingninjas.in/certificate11882765ee5ebc652aaad46b779dcf883965216.pdf",
    image: codingninjas,
  },
];

// Grouped license data structure
export const GroupedLicenseData = [
  {
    groupTitle: "Professional Certifications",
    groupDescription: "Industry-recognized professional certifications",
    licenses: [
      {
        id: 1,
        title: "Meta Back-End Developer",
        provider: "Meta",
        about:
          "Meta Back-End Developer on Coursera. Certificate earned at July 02, 2025",
        tags: [
          "Algorithms",
          "GitHub",
          "Database Management Systems",
          "Relational Databases",
          "SQL",
          "Django (Web Framework)",
        ],
        credentialUrl:
          "https://www.coursera.org/account/accomplishments/professional-cert/H745BXLFGT99",
        image: meta,
      },
      {
        id: 4,
        title: "AWS Cloud Solutions Architect",
        provider: "AWS",
        about:
          "AWS Cloud Solutions Architect Specialization by AWS on Coursera. Certificate earned at May 12, 2024",
        tags: [
          "Amazon Web Services",
          "Cloud Computing",
          "Data Management",
          "Big Data",
          "Machine Learning",
          "Data Analytics & Visualization",
        ],
        credentialUrl:
          "https://coursera.org/share/05b88512024ec0917ae397d34dba888e",
        image: aws,
      },
    ],
  },
  {
    groupTitle: "Google Certifications",
    groupDescription: "Google's comprehensive certification programs",
    licenses: [
      {
        id: 3,
        title: "Agile Project Management",
        provider: "Google",
        about:
          "Agile Project Management by Google on Coursera. Certificate earned at August 14, 2024",
        tags: ["Agile Model", "Waterfall Model", "Scrum", "Kanban Board"],
        image: google,
      },
      {
        id: 5,
        title: "Google Cybersecurity",
        provider: "Google",
        about:
          "Google Cybersecurity by Google on Coursera. Certificate earned at September 22, 2023",
        tags: [
          "Python",
          "Linux",
          "SQL",
          "Intrusion Detection System(IDS)",
          "Security Information & Event Management(SIEM) Tools",
        ],
        credentialUrl:
          "https://coursera.org/share/ba877fb6509c41e0fdc2fc0a9cd56f0b",
        image: google,
      },
    ],
  },
  {
    groupTitle: "Leadership & Management",
    groupDescription: "Leadership and management skills development",
    licenses: [
      {
        id: 2,
        title: "Leadership Skills",
        provider: "Indian Institute of Management Ahemdabad",
        about:
          "Leadership Skills from IIMA on Coursera. Certificate earned at September 01, 2024",
        tags: [
          "Mindfullness & Inner Stability",
          "Emotional Intelligence",
          "Learning Mindset",
          "Leadership Style & Culture",
          "Leadership & Ancient Wisdom : Mahabharata",
        ],
        credentialUrl:
          "https://coursera.org/share/4bedcfdb992192467c239333cf3cef5a",
        image: iima,
      },
    ],
  },
  {
    groupTitle: "Development Tools & Technologies",
    groupDescription: "Essential tools and technologies for developers",
    licenses: [
      {
        id: 6,
        title: "MySQL",
        provider: "Udemy",
        about:
          "The Ulitmate MySQL Bootcamp on Udemy. Certificate earned at January 27, 2023",
        tags: ["SQL", "MySQL Workbench"],
        credentialUrl:
          "https://www.udemy.com/certificate/UC-12fc0719-4556-4436-b6a4-4bf35724e1f9/",
        image: udemy,
      },
      {
        id: 7,
        title: "Docker & Kubernetes",
        provider: "Udemy",
        about:
          "Docker & Kubernetes on Udemy. Certificate earned at January 13, 2023",
        tags: ["Docker", "Containers"],
        credentialUrl:
          "https://www.udemy.com/certificate/UC-46820061-0f8f-4d0f-94b5-2b36ddd9ebf9/",
        image: udemy,
      },
      {
        id: 8,
        title: "Linux Mastery",
        provider: "Udemy",
        about:
          "Linux Mastery on Udemy. Certificate earned at December 03, 2022",
        tags: ["Linux", "CLI"],
        credentialUrl:
          "https://www.udemy.com/certificate/UC-d7dc602f-3fab-430a-b5f8-360871fb98ee/",
        image: udemy,
      },
      {
        id: 9,
        title: "Git & Github",
        provider: "Udemy",
        about:
          "The Complete Git Guide on Udemy. Certificate earned at December 03, 2022",
        tags: ["Git", "Github"],
        credentialUrl:
          "https://www.udemy.com/certificate/UC-519b2030-8e10-4d70-9503-00fac504e9f3/",
        image: udemy,
      },
    ],
  },
  {
    groupTitle: "Programming & Web Development",
    groupDescription: "Core programming and web development skills",
    licenses: [
      {
        id: 10,
        title: "MERN Stack Web Development",
        provider: "Coding Ninjas",
        about:
          "Career Camp | Web Developement Module by Coding Ninjas. From January 2021 to April 2021",
        tags: ["NodeJs", "MongoDB", "ReactJs", "Express"],
        credentialUrl:
          "http://files.codingninjas.in/certificate1354878f1d49344c8f0bdf1153cc0391706960d.pdf",
        image: codingninjas,
      },
      {
        id: 11,
        title: "Data Structures & Algorithms with Java",
        provider: "Coding Ninjas",
        about:
          "Career Camp | Web Developer Track by Coding Ninjas. From September 2020 to January 2021",
        tags: ["Java", "Data Structures", "Algorithms"],
        credentialUrl:
          "http://files.codingninjas.in/certificate11882765ee5ebc652aaad46b779dcf883965216.pdf",
        image: codingninjas,
      },
    ],
  },
];
