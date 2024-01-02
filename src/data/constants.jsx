import html from "../Image/html.png"
import bmiCalc from "../Image/BMI-Calculator.png"
import basicCalc from "../Image/Basic-Calculator.png"
import BlogMe from "../Image/BlogMe.png"
import Bloggr from "../Image/Bloggr.png"
import Blogify from "../Image/Blogify.png"
import Calendar from "../Image/Calendar.png"
import Countdown from "../Image/Countdown-Timer.png"
import Currency from "../Image/Currency-converter.png"
import Cybrary from "../Image/Cybrary.png"
import Dashboard from "../Image/Dashboard.png"
import Food from "../Image/Food-Survey-Form.png"
import Icancook from "../Image/I-Can-Cook.png"
import IBM from "../Image/IBM.png"
import Loan from "../Image/Loan-calculator.png"
import Pixel from "../Image/Pixel-Art-Generator.png"
import Portfolio from "../Image/Portfolio.png"
import Techipedia from "../Image/Techipedia.png"
import News from "../Image/The-Daily-News.png"
import Travel from "../Image/Travel-World.png"
import aws from "../Image/aws.png"
import css from "../Image/css.png"
import dam from "../Image/dam.jpg"
import express from "../Image/express-js.png"
import gcp from "../Image/gcp.png"
import git from "../Image/git.png"
import github from "../Image/github.jpg"
import insomnia from "../Image/insomnia.png"
import js from "../Image/js.png"
import kyndryl from "../Image/kyndryl.jpg"
import mongoDB from "../Image/mongoDB.png"
import node from "../Image/node-js.jpg"
import postman from "../Image/postman.png"
import reactrouter from "../Image/react-router.png"
import react from "../Image/react.png"
import redux from "../Image/redux.png"
import street from "../Image/street-feet.png"
import verzeo from "../Image/verzeo.png"
import vite from "../Image/vite.png"
import vscode from "../Image/vscode.png"
import vmware from "../Image/vmware.jpeg"
import jain from "../Image/jgi.avif"
import sjs from "../Image/sjs.jpg"

export const Bio = {
  name: "Damian Prakash Murmu",
  roles: ["Full Stack Developer!", "Frontend Developer!", "Programmer!"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/DamianDev11",
  resume: "https://drive.google.com/",
  linkedin: "https://www.linkedin.com/in/",
  twitter: "https://twitter.com/",
  insta: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: html,
      },
      {
        name: "CSS",
        image:
          css,
      },
      {
        name: "JavaScript",
        image:
          js,
      },
      {
        name: "React Js",
        image:
          react,
      },
      {
        name: "React Router",
        image:
          reactrouter,
      },

      {
        name: "Vite",
        image: vite,
      },
      {
        name: "Redux Toolkit",
        image:
          redux,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: node,
      },
      {
        name: "Express Js",
        image:
          express,
      },

      {
        name: "MongoDB",
        image:
          mongoDB,
      },
    ],
  },
  {
    title: "Certifications",
    skills: [
      {
        name: "GCP-Cloud Digital Leader",
        image:
          gcp,
      },
      {
        name: "AWS Certified Cloud Practitioner",
        image:
          aws,
      },
      {
        name: "ITIL® 4 Foundation",
        image:
          "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/23336475",
      },
      {
        name: "Cyber Security Audits",
        image:
          "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/27176890",
      },
      {
        name: "Python for Data Science",
        image:
          "https://images.credly.com/size/680x680/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python_101_Data_Science.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          git,
      },
      {
        name: "GitHub",
        image:
          github,
      },

      {
        name: "VS Code",
        image:
          vscode,
      },
      {
        name: "Postman",
        image:
          postman,
      },
      {
        name: "Insomnia",
        image:
          insomnia,
      },
      {
        name: "VMWare Workstation",
        image:
        vmware,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    doc: "https://www.linkedin.com/posts/damianprakashmurmu_bombardier-activity-6916860589046738944-lDPU?utm_source=share&utm_medium=member_desktop",
    role: "Associate, Systems Administration",
    company: "Kyndryl India Private Limited",
    date: "September 2021 - Present",
    desc: "•Responsible for installing, configuring, and maintaining middleware software components such as application servers, message queues, web servers, and integration platforms.Managed and maintained website security, including SSL certificate renewals to ensure secure connections for customers and clients.Ensuring the security of the middleware infrastructure and implementing security measures, such as access controls, encryption, and authentication mechanisms, to protect sensitive data and prevent unauthorized access.",
    skills: [
      "Ubuntu",
      "Apache HTTP Server",
      "Microsoft IIS",
      "SSL cetificate"
    ],
    img: kyndryl,
  },

  {
    id: 1,
    doc: "https://www.linkedin.com/posts/damianprakashmurmu_ibm-blockchain-essentials-v2-was-issued-by-activity-6848793136290947072-aXBG?utm_source=share&utm_medium=member_desktop",
    role: "Associate Technical Engineer/NOC Engineer",
    company: "IBM India Private Limited",
    date: "August 2020 - September 2021",
    desc: "•Responsible for monitoring, controlling and operating systems, networks,applications and/or distributed systems.Conducting VMware vCenter health check and resolving L1 incidents related to VM’s, ESXi hosts and datastores.•Performing windows systems health testing and operational tasks.•Supporting multiple technical teams in 24x7 operational environments with high uptime requirements.",
    skills: [
      "VMware Vsphere",
      "Windows System Admin",
      "Virtualization"
    ],
    img: IBM,
  },
  {
    id: 2,
    doc: "https://www.linkedin.com/posts/damianprakashmurmu_verzeo-internshipprogram-microsoftpartners-activity-6742795563147804672--lG6?utm_source=share&utm_medium=member_desktop",
    role: "Cyber Security Intern",
    company: "Verzeo",
    date: "June 2020 - August 2021",
    desc: ["During the tenure, I came across various insights on application of secure email through PGP email system.Installing and sending message using PGP. The curriculum also included how to ensure privacy while sending mail and many other networking concepts."],
    skills: [
      "wireshark",
      "Nessus Professional",
      "TCP packets transmission",
      "DNS transmission",
      "TLS transmission",
      "ARP transmission",
      "HTTP transmission",
      "Spoofing and Phishing",
      "Gsuite Toolbox",
      "PGP",
    ],
    img: verzeo,
  },
];

export const education = [
  {
    id: 0,
    img: jain,
    school: "JAIN UNIVERSITY - SCHOOL OF ENGINEERING AND TECHNOLOGY, Bangalore",
    date: "Aug 2016 - Aug 2020",
    grade: "7.483 CGPA",
    desc: "",
    degree: "BTech, Cloud Technology and Information Security",
  },
  {
    id: 1,
    img: sjs,
    school: "ST. JOSEPH'S SCHOOL",
    date: "April 2016",
    grade: "",
    desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
    degree: "ISC(XII)",
  },
  {
    id: 2,
    img: sjs,
    school: "ST. JOSEPH'S SCHOOL",
    date: "April 2014",
    grade: "",
    desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
    degree: "ICSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Blogify",
    date: "Dec 2023",
    description:
      "Full-Fledged Blog Application",
    image:Blogify,
    tags: [
      "Eslint",
      "Prettier",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Fetch API"
    ],
    category: "mern",
    github: "https://github.com/DamianDev11/Blogify-frontend-backend",
    webapp: "https://blogify-460k.onrender.com",
  },
  {
    id: 1,
    title: "Post-It",
    date: "Oct 2023",
    description:
      "Full Stack Blog Application with enhanced features",
    image:
      BlogMe,
    tags: ["React Js", "MongoDb", "Node Js", "Express Js", "React-router-dom","AXIOS"],
    category: "mern",
    github: "https://github.com/DamianDev11/blog-chef-2.0",
    webapp: "https://github.com/DamianDev11/blog-chef-2.0",
    member: [
      {
        name: "Damian Prakash Murmu",
        img: "https://media.licdn.com/dms/image/D5603AQGC8l6VtF-rKA/profile-displayphoto-shrink_800_800/0/1694771720999?e=1704326400&v=beta&t=B0veKbWwLkE5Uf1q9-iOaEg8kce9YfXoIqeIYNKnb8s",
        linkedin: "https://www.linkedin.com/in/damianprakashmurmu/",
        github: "https://github.com/DamianDev11",
      }
    ],
  },
  {
    id: 2,
    title: "Bloggr(Not Deployed)",
    date: "Oct 2023",
    description:
      "Simple Blog app",
    image:
    Bloggr,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
    ],
    category:"mern",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 3,
    title: "Basic Calculator",
    date: "Jan 2023 - Mar 2023",
    description:
    "Basic Calculator",
    image:
    basicCalc,
    tags: ["HTML", "CSS", "Javascript"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Calculator",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Calculator",
    member: [
      {
        name: "Damian Prakash Murmu",
        img: dam,
        linkedin: "https://www.linkedin.com/in/damianprakashmurmu/",
        github: "https://github.com/DamianDev11",
      }
    ],
  },
  {
    id: 4,
    title: "BMI Calculator",
    date: "Dec 2021 - Apr 2022",
    description:
    "BMI Calculator",
    image:
      bmiCalc,
    tags: ["HTML", "CSS", "Javascript"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/BMI%20Calculator",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/BMI%20Calculator",
  },
  {
    id: 5,
    title: "Calendar",
    date: "Jun 2023 - Jul 2023",
    description:
    "Calendar",
    image:
      Calendar,
    tags: ["HTML", "CSS", "Javascript"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Calendar",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Calendar",
  },
  {
    id: 6,
    title: "Countdown Timer",
    date: "Jul 2021",
    description:
    "Interactive UI Countdown Timer",
    image:
    Countdown,
    tags: ["HTML", "CSS", "Javascript"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Countdown%20Timer",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Countdown%20Timer",
  },
  {
    id: 7,
    title: "Currency Converter",
    date: "Jun 2021",
    description:
      "Currency Converter",
    image:
      Currency,
    tags: ["HTML", "CSS", "Javascript"],
    category: "js",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Currency%20Converter",
  },
  {
    id: 8,
    title: "Cybrary",
    date: "Jun 2021",
    description:
      "An-library",
    image:
      Cybrary,
    tags: ["React Js", "API", "Axios","MongoDB", "Node JS"],
    category: "mern",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11/Cybrary",
  },
  {
    id: 9,
    title: "Dashboard",
    date: "Jun 2021",
    description:
      "An attractive dashboard for users and admins",
    image:
      Dashboard,
    tags: ["HTML","CSS","Javascript"],
    category: "html css",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Admin%20Dashboard",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Admin%20Dashboard",
  },
  {
    id: 10,
    title: "Food Survey",
    date: "Jun 2021",
    description:
      "Food Survey Form",
    image:
      Food,
    tags: ["HTML","CSS"],
    category: "html css",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 11,
    title: "ICanCook",
    date: "Jun 2021",
    description:
      "Cooking Website",
    image:
      Icancook,
    tags: ["HTML","CSS","JS","React"],
    category: "mern",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 12,
    title: "Loan Calculator",
    date: "Jun 2021",
    description:
      "Loan Calculator",
    image:
      Loan,
    tags: ["HTML","CSS","JS"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Loan-calculator",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Loan-calculator",
  },
  {
    id: 13,
    title: "Pixel-Art-Generator",
    date: "Jun 2021",
    description:
      "Pixel-Art-Generator",
    image:
      Pixel,
    tags: ["HTML","CSS","JS"],
    category: "js",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Pixel%20Art%20Generator",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Pixel%20Art%20Generator",
  },
  {
    id: 14,
    title: "Portfolio",
    date: "Jun 2021",
    description:
      "Portfolio",
    image:
      Portfolio,
    tags: ["HTML","CSS","JS","React","Nextjs"],
    category: "mern",
    github: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Pixel%20Art%20Generator",
    webapp: "https://github.com/DamianDev11/html-css-js-mini-projects/tree/main/Pixel%20Art%20Generator",
  },
  {
    id: 15,
    title: "Street Feet",
    date: "Jun 2021",
    description:
      "Real Estate Website",
    image:
      street,
    tags: ["HTML","CSS","JS"],
    category: "html css",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 16,
    title: "Techipedia",
    date: "Jun 2021",
    description:
      "Tech Website",
    image:
      Techipedia,
    tags: ["HTML","CSS"],
    category: "html css",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 17,
    title: "The Daily News",
    date: "Jun 2021",
    description:
      "News Website",
    image:
      News,
    tags: ["HTML","CSS","JS"],
    category: "js",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  },
  {
    id: 18,
    title: "Travel World",
    date: "Jun 2021",
    description:
      "Travel Website",
    image:
      Travel,
    tags: ["HTML","CSS","JS"],
    category: "html css",
    github: "https://github.com/DamianDev11",
    webapp: "https://github.com/DamianDev11",
  }
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
