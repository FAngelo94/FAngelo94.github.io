/* eslint-disable no-multi-str */
import threeYearsEn from "./assets/three-year-EN.pdf";
import threeYearsIt from "./assets/three-year-IT.pdf";
import masterlyEn from "./assets/masterly-EN.pdf";
import masterlyIt from "./assets/masterly-IT.pdf";
import githubIcon from "./assets/github-icon.svg";
import externalLinkIcon from "./assets/external-link-icon.svg";
import googlePlay from "./assets/google-play.svg";
import appStore from "./assets/app-store.svg";
import kanguryLogo from "./assets/kangury.png";

export const hero = {
  hello: "Hello 👋, I'm",
  name: "Ing. Angelo Falci",
  title: "Full Stack Developer",
  smallResume:
    "Web developer focused on Javascript, React, Python and SQL to develop both frontend and backend applications. I love face difficult challenges that can help me to improve my skills and learn new tecnologies.",
  contacts: "Contacts",
};

export const header = {
  home: "Home",
  career: "Career",
  aboutMe: "About Me",
  projects: "Projects",
  contacts: "Contacts",
};

export const footer = {
  center: "Website done by React",
  center2: "and love",
};

export const contacts = {
  title: "Contact Me😃",
  subtitle:
    "Feel free to contact me if you want to propose me interesting jobs, projects or just if you want an exchange of ideas!💡",
};

export const form = {
  useModule: "Get in touch using the form below",
  leaveMessage: "Leave your message",
  thanks: "Thanks for your message! I'll get back to you as soon as possible!",
  backToTop: "Back to top",
  send: "Send",
};

export const about = {
  title: "About Me",
  mainSkills: "Here are my main skills:",
  paragraphs: [
    "Hi, Angelo and I live in the heart of the alps, Sondrio (north of Milan), Italy. I'm passionate about programming and I'm always looking for new challenges to learn and improve my skills. I’m a very active and motivated person. My best qualities are determination and sincerity. In the other side my defects are.. wait, it is better not say my defects in a curriculum.",
    "I'm appasionated to AI and I use/test different tools to speed up and improve my work.",
    "In my free time I like experiment and try new tecnlogies developing fullstack web applications. Below you can see more details about my work experience and projects!",
    "My other hobbies are: travel, read books, board games, videogames and do sport",
    "I have patent B and A"
  ],
};

export const career = {
  title: "Career",
  schools: [
    {
      title: "State Exam for Informatic Engineering",
      where: "Politecnico di Milano, Italy",
      description: "Passed the state exam for the qualification to practice as an engineer.",
      when: "2025",
    },
    {
      title: "Master of Computer Science and Engineering",
      where: "Politecnico di Milano, Italy",
      description:
        "Download all the details about my studies and which subjects I studied here: ",
      when: "2016 - 2018",
      links: [
        {
          title: "IT",
          url: masterlyIt,
        },
        {
          title: "EN",
          url: masterlyEn,
        },
      ],
    },
    {
      title: "Computer Science and Engineering",
      where: "Politecnico di Milano, Italy",
      description:
        "Download all the details about my studies and which subjects I studied here: ",
      when: "2013 - 2016",
      links: [
        {
          title: "IT",
          url: threeYearsIt,
        },
        {
          title: "EN",
          url: threeYearsEn,
        },
      ],
    },
    {
      title: "Diploma in Computer Expert",
      where: "High school ITIS Enea Mattei (Sondrio, Italy)",
      when: "2008 - 2013",
    },
  ],
  jobs: [
    {
      title: "FullStack Developer",
      company: "Freelance",
      link: "https://www.linkedin.com/in/angelo-falci-1292ab76/",
      description:
        "I work as freelance developing fullstack web application for big companies or startups. I not only develop the project but I also help the clients to improve their ideas and to choose the best technologies and architecture to use based on his needs. In some projects I also coordinated internal teams.",
      whereAndWhen: "Remote, 04/2025 - Present",
    },
    {
      title: "Senior Frontend Developer",
      company: "DeltaTre",
      link: "https://www.deltatre.com/",
      description:
        "I work to Diva project (https://www.deltatre.com/ott/diva), a custom player video with many features. The main technologies I use are React, Vanilla JS, Typescript, RXjs, Node, Storybook, Webpack, Babel",
      whereAndWhen: "Remote, 09/2022 - 04/2025",
    },
    {
      title: "Senior FullStack Developer",
      company: "TeamSystem",
      link: "https://www.teamsystems.com/",
      description:
        "I worked mainly with React and Redux to maintain and improve Digitalbox application. I also collaborated occasionally with backend developers to update or fix bugs in API written in NodeJS or Java (Springboot).",
      whereAndWhen: "Remote, 10/2021 - 09/2022",
    },
    {
      title: "Autonomous Driving Software Engineer",
      company: "Consultant in Stellantis",
      link: "https://www.stellantis.com/",
      description:
        "As NetcomGroup consultant I was responsible of maintain and develop different tools used to validate autonomous driving software. Moreover with my team we studied and teste new methodologies and softwares to improve Stellantis toolchain.",
      whereAndWhen: "Turin - Italy, 02/2020 - 10/2021",
    },
    {
      title: "Autonomous Driving Software Engineer",
      company: "Consultant in Stellantis",
      link: "https://www.stellantis.com/",
      description:
        "As NetcomGroup consultant I studied how to integrate some tools in Stellantis system in order to create a toolchain able to validate autonomous driving software",
      whereAndWhen: "Munich - Germany, 10/2019 - 02/2020",
    },
    {
      title: "Frontend Developer",
      company: "Accenture",
      link: "https://www.accenture.com/",
      description:
        "I worked as frontend developer to design and develop performance and responsive website for very important clients with using different technologies like React, Redux, JS6, HTML, CSS, Docker and others",
      whereAndWhen: "Milan - Italy, 11/2018 - 10/2019",
    },
    {
      title: "IoT Developer",
      company: "JOL Laboratory, Tim",
      description:
        "For my thesis I worked with a team for an European project that have as main goal the creaton of an Android application that can be used to communicate and collect data from different smart devices (look in my projects section for more details)",
      whereAndWhen: "Milan - Italy, 05/2018 - 09/2018",
    },
  ],
};

export const projects = {
  title: "Last Main Projects",
  subtitle: "(click on the title or text card to see more details)",
  footerText: "For more projects look my github or codepen! (links in footer)",
  projects: [
    // Smanno
    {
      title: "Smanno",
      description: "I developed the fullstack application using React for frontend and Django for backend responsible to manage a fleet of different robots.\
      \nThe application is runnable also in dockers containers to simplify the deployment in different environments.",
      links: [
        {
          label: "Smanno - Official Website",
          url: "https://www.smanno.com/",
          icon: externalLinkIcon,
        }
      ],
      mainSkills: ['Django', 'Docker', 'mysql', 'React'],
      allSkills: ['Bootstrap 5', "Copilot", 'CSS', 'Django', 'Docker', 'html', 'Javascript', 'Linux', 'MobilePlanner', 'mysql', 'Python', 'React', 'Redux', 'Swagger', 'TMflow', 'VS Code', 'Windows'],
      longtext: [
        {
          type: "text",
          value: "Smanno is a startup of 3 people (including me) that develops robots for healthcare and hospitality laboratorys and a platform to use them.\
          \nThe main role of the owner of Smanno was responsible for the business development and client relationships. The other guy, CTO of Smanno, was responsible for the hardware development of robots.\
          \nLastly I was responsible for the development of all platform software and its deployment in client environments."
        },
        {
          type: "text",
          value: "I developed the platform to be more flexible possible in order to manage different types of robots and mission without change the codebase. Briefly to do this I abstracted everything in 2 entities, Actor (like Robots and other machine/place that will interact with robots) and Mission (the task that the robots have to perform).\
          \nThe platform is divided in 2 main parts: the backend developed in Django and the frontend developed in React, below the details."
        },
        {
          type: "subtitle",
          value: "Backend - Django",
        },
        {
          type: "text",
          value: "I developed the backend of the platform using Django and mysql as database. The main features implemented are:\
          \n- Database architecture for managing robots, missions and user that will be use the platform\
          \n- API necessary for frontend adding check for user permissions\
          \n- Async processing to check the status of robots connected to the platform\
          \n- Integration with third-party services and library to communicate with different robots\
          \n- Admin page to access to the database directly and advanced feature like data export/import and fast edit of cells in each table\
          \n- Creation of Django custom commands to simplify the install and management of the platform\
          \n- Swagger documentation for all Rest APIs implemented\
          \n- Documentation to install and manage the platform\
          \n- Docker compose file to run and setup db, backend and frontend with just one command in the terminal"
        },
        {
          type: "subtitle",
          value: "Frontend - React",
        },
        {
          type: "text",
          value: "I developed the frontend using React with Bootstrap 5 to start from a UI library because I didn't have graphics done by some designer. What user can do in the platform: depend on the role and permissions assigned to them, we have user admin, editor, executor and viewer.\
          \nThe main features implementd are:\
          \n- Responsive design for mobile and desktop, so user in hospital can access the platform from any device\
          \n- Possibility to create complex missions, divided in steps, using actors and atomic mission added in the database (atomic mission are the simplest mission that can be performed by a robot, like go to a position, execute some movement with arms, etc.)\
          \n- User can also encapsulate complex mission in order to reuse them in future without recreate everything from scratch and, in each mission, it is possible enable/disable some steps\
          \n- Execute mission created monitoring the status of mission and actors involved returning details in case of mission fail\
          \n- There is the possibility to stop and resume some mission\
          \n- See statistics about mission execution and robot performance"
        },
        {
          type: "subtitle",
          value: "Deployment",
        },
        {
          type: "text",
          value: "The application need to be installed in the server of Smanno clients (for example an hospital) and run to the devices connected to the same network where application run.\
          \nFirst of all, as I said in the top, I created a docker compose file to run the database, backend and frontend with just one command in three different container. This also to simplify the work for other members of the team.\
          \nNext for client I created a script that export these 3 docker images created. The script create also other script to automatize the import and run o the 3 images in the client server with just one command, both in Linux and Windows environment.\
          \nEverything is saved in an output folder that we can copy-paste in the client server and run.\
          \nMaybe in future this could be imporoved based on what clients need."
        }
      ],
    },
    // Gut
    {
      title: "GUT",
      description: "I built a Spotify-like PWA with mobile-first UI, where users can watch music videos and support their favorite artists with donations.\
      \n I also built a custom CMS to manage the platform’s content used by the PWA and contributed to the backend development using Node.js and the Express framework.",
      links: [{
        label: "GUT - Official Website",
        url: 'https://www.gutmusic.media/',
        icon: externalLinkIcon,
      }],
      mainSkills: ['Mux', 'NodeJS', 'React', 'Stripe', 'Typescript'],
      allSkills: ["Copilot", 'CSS', 'html', 'Javascript', 'Mux', 'NodeJS', 'Panda', 'React', 'Redux', 'Stripe', 'Swagger', 'Typescript', 'Vite', 'VS Code'],
      longtext: [
        {
          type: "text",
          value: "GUT is a startup operating in the music industry.\
          \nI didn't limited my work to just one area, but I contributed to all aspects of the platform, proposing also new features and improvements based on what GUT presentend to me.\
          \nThe work was divided in 3 main projects: the PWA in React, the CMS in React and the backend in NodeJS and Express.\
          \nWe worked in agile methodologies with a teams of 6 people, 3 internal and 3 external (including me). Regarding the projects I was responsible for the architecture of the PWA and CMS and I developed the main part of both applications with the help of another freelancer developer.\
          \nI also contributed to the backend development collaborating with one of the founder of the startup.\
          \nBelow the details about each of the 3 main projects.",

        },
        {
          type: "subtitle",
          value: "Frontend - PWA in React",
        },
        {
          type: "text",
          value: "I created a single page application using React + Typescript and Vite as build tool. The key features of the PWA are:\
          \n- Mobile first design with responsive UI using CSS and Styled Components with Panda\
          \n- Video streaming using Mux SDK, artist can upload their music videos using always Mux with progressive upload percentage showed\
          \n- Payment system using Stripe to buy subscriptions for artists and gem token for users\
          \n- Different techniques to optimize the performance like lazy-loaded and strong caching strategies to reduce calls to the backend\
          \n- Install banner to install the PWA on mobile devices",
        },
        {
          type: "subtitle",
          value: "Frontend - CMS in React",
        },
        {
          type: "text",
          value: "I created a content management system (CMS) using React + Typescript and Vite as build tool in order to have 2 similar project easily maintainable also for other people in future.\
          \nBasically we have a macrosection for the main entities of the platform: User, Content, Collection (group of Content), Audition and Tags.\
          \nEach macrosection is divided in 2 pages:\
          \n- A table page to see all the entities, divided in different pages with search and filter functionalities\
          \n- A detail page to see all the details of the entity, modify it or create a new ones\
          \nAlso in the CMS I applied caching strategies to reduce the calls to the backend that can be very heavy",
        },
        {
          type: "subtitle",
          value: "Backend - NodeJS and Express",
        },
        {
          type: "text",
          value: "One of the founder was the main resplonsible of the backend development using NodeJS and Express framework using PostgreSQL and Redis for caching.\
          \nI collaborated with him to:\
          \n- Design some aspect of the database structure\
          \n- Implementing caching strategies using Redis\
          \n- Implementing some REST api used by the PWA and CMS\
          \n- Do some security check to be sure the APIs were safe from common attacks and not pass sensitive data in the requests\
          \n- Create a swagger documentation for all the APIs implemented\
          \n- Debug and solve bugs found during the development of PWA and CMS",
        }
      ],
    },
    // Kangury
    {
      title: "Startup - Kangury",
      description:
        "I developed a fullstack application using React for frontend and Django for backend.\
        \nIn Kangury you can buy photos that will be associated to an album contained your photos or videos.\
        \nGo to the website to see more! If you are interesting contact me to know more or to receive a discount code.",
      links: [
        {
          label: "Kangury - Official Website",
          url: "https://www.kangury.it/",
          icon: kanguryLogo,
        },
      ],
      mainSkills: ["Bootstrap 5", "Django", "mysql", "React"],
      allSkills: [
        "Amazon AWS",
        "Bootstrap 5",
        "Copilot",
        "CSS",
        "Django",
        "firebase",
        "github",
        "html",
        "Javascript",
        "mysql",
        "Paypal",
        "Python",
        "Pythonanywhere",
        "React",
        "Redux",
        "S3",
        "Swagger",
        "VS Code"
      ],
      longtext: [
        {
          type: "text",
          value:
            "I developed the application that you can try in the links provided. Inside users can buy different product related the world of photography and, obviously, they can modify and print their photos in different formats.\
            \nAfter user buy a photo he can associate it to an album where he can upload his photos or videos.",
        },
        {
          type: "subtitle",
          value: "Introduction",
        },
        {
          type: "text",
          value:
            "I used the following technologies for 3 main reasons:\
            \n- I already know them and I can develop the application in a short time\
            \n- I know service where I can deploy the application fast and with zero or low cost in beginning\
            \n- They are solid and well known technologies used in many big project with a big community that can help me in case of problems",
        },
        {
          type: "subtitle",
          value: "PWA in React",
        },
        {
          type: "text",
          value:
            "Key features of the web application I used/developed:\
          \n- Bootstrap 5 with SASS personalizing it in order to have a theme easily to maintain and updates in future; it's also speed up the creation of the app considering I didn't have any UI designer\
          \n- Redux to manage the store of the application\
          \n- Firebase to deploy the application in 2 different branch, product and test, in order to have a test environment where I can see the changes before deploy in production\
          \n- Complex photo editor where user can modify the photo cropping and rotating it\
          \n- Google Analytics to track the user behavior inside the application\
          \n- Swiper for different carousels inside the application"
        },
        {
          type: "subtitle",
          value: "Backend in Django",
        },
        {
          type: "text",
          value:
            "For the backend I used Django with mysql database and I organize the different APIs in a Swagger documentation.\
          \nI used Amazon AWS S3 bucket to store the photos and videos uploaded by the user.",
        },
      ],
    },
    // Digitalpix
    /* {
      title: "Personal Project - Digitalpix",
      description:
        "I developed, in React, a PWA and store application (for Ios and Android) to customize and buy professional photos.",
      links: [
        {
          label: "Digitalpix - Play Store",
          url: "https://play.google.com/store/apps/details?id=com.digitalpix.cassiopeia&hl=it",
          icon: googlePlay,
        },
        {
          label: "Digitalpix - App Store",
          url: "https://apps.apple.com/it/app/digitalpix-stampa-foto/id1628519772",
          icon: appStore,
        },
      ],
      mainSkills: ["React", "React Native", "Expo", "Redux"],
      allSkills: [
        "React",
        "Redux",
        "React Native",
        "Expo",
        "Javascript",
        "html",
        "CSS",
        "VS Code",
        "firebase",
        "Swagger",
      ],
      longtext: [
        {
          type: "text",
          value:
            "I developed the application that you can try in the links provided. Inside users can buy different product related the world of photography and, obviously, they can modify and print their photos in different formats.",
        },
        {
          type: "subtitle",
          value: "Web App in React",
        },
        {
          type: "text",
          value:
            "Key features of the web application I used/developed:\
          \n- Bootstrap 5 with SASS personalizing it in order to have a theme easily to maintain and updates in future; it's also speed up the creation of the app considering I didn't have any UI designer\
          \n- Redux to manage the store of the application\
          \n- Firebase to deploy the application in 2 different branch, product and test, in order to have a test environment where I can see the changes before deploy in production\
          \n- Complex photo editor where user can modify the photo cropping and rotating it\
          \n- Google Analytics to track the user behavior inside the application\
          \n- Swiper for different carousels inside the application"
        },
        {
          type: "subtitle",
          value: "Mobile App in React Native",
        },
        {
          type: "text",
          value:
            "In order to publish the application also in the mobile store I developed an application in React Native including inside a WebView that show the web application.\
          \nIn this way I can use the same code for the web application and the mobile application. Moreover I don't need to publish the mobile app in Google Store and Apple Store everytime I do an updates reducing drastically the deploying time.\
          \nWorking alone and only in my free time I considered this the best solution to have a good result in a short time.",
        },
      ],
    }, */
    // ClimberWorld
    {
      title: "Personal Project - Climberworld Web App",
      description:
        "Web app I'm developing as fullstack using React as frontend and Flask (Python framework) as backend. This site has the ambition to collect information about all the refuges, excursions and climbing walls of the Alps.\
            \nClick the link to see the website!\
            \n(Note: Backend is not online anymore so you can't see the data)",
      links: [
        {
          label: "Climberworld",
          url: "https://climberworld.web.app/",
          icon: externalLinkIcon,
        },
      ],
      mainSkills: ["Docker", "Flask", "Python", "React", "SQL"],
      allSkills: [
        "CSS",
        "Docker",
        "firebase",
        "Flask",
        "html",
        "Javascript",
        "Python",
        "pythonanywhere",
        "React",
        "Redux",
        "SQL",
        "styled-components",
        "Swagger",
        "VS Code",
      ],
      longtext: [
        {
          type: "text",
          value:
            "In my free time I'm working to to this application in order to learn new things and keep training the knowledge I already have.\
                    \nFor the moment I’m working on it alone and I’m developing both frontend and backend.",
        },
        {
          type: "subtitle",
          value: "Frontend",
        },
        {
          type: "text",
          value:
            "For the frontend these are the main technologies I’m using:\
                    \n- *React* as frontend\
                    \n- *Redux* to manage the store of application\
                    \n- *Styled* components to manage the style\
                    \n- *Firebase* to deploy the application",
        },
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value:
            "For the backend these are the main technologies I’m using:\
                    \n- *Flask* micro-framework developed in Python\
                    \n- *mysql* to manage the database because the information inside the application are well structured\
                    \n- *phpmyadmin docker image* used locally to explore the local database using an UI\
                    \n- *docker* and *docker-compose* to develop easly the backend locally where 3 docker image are run, one for Flask, one for mysql and one for phpmyadmin\
                    \n- *Swagger* to create a list of API documented well\
                    \n- *pythonanywhere* to deploy the application\
                    \n- *marshmallow, SQLAlchemy and connexion* to manage easly the tables in the db inside the API",
        },
        {
          type: "subtitle",
          value: "Other Technologies/Tools",
        },
        {
          type: "text",
          value: "- *Git*:\
                    \n- *Visual Studio Code*",
        },
      ],
    },
    // Diva
    {
      title: "Diva - Custom Video Player",
      description:
        "This is a custom player video with many features developed to be integrated in different platform (web, tv, mobile ecc..).\
        The project is developed as library divited in different packages, one for the different destination where Diva will be used (web, mobile, tv, etc).",
      links: [
        {
          label: "DeltaTre - Diva",
          url: "https://www.deltatre.com/streaming-and-digital/diva",
          icon: externalLinkIcon,
        },
      ],
      mainSkills: ["JS", "React", "RXjs", "Storybook", "Typescript"],
      allSkills: [
        "HTML",
        "Node",
        "React",
        "RXjs",
        "SCSS",
        "Storybook",
        "Typescript",
        "Vanilla JS",
        "VS Code",
        "Windows 10",
        "Yarn",
      ],
      longtext: [
        {
          type: "text",
          value:
            "I work, using Agile methodologies, as frontend developer, to Diva project in order to improve old functionalities  and develop new ones.",
        },
        {
          type: "subtitle",
          value: "Project Description",
        },
        {
          type: "text",
          value:
            "Diva is a player library sell from DeltaTre to different clients that integrate it in their streaming service.\
                    \nInside is divided in different packages dedicated to:\
                    \n- Common thing used in different packages\
                    \n- Specifically component, or list of components, that can be used alone, and sell individually, or used inside other bigger packages",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as frontend framework (with *Typescript* and *SCSS*) \
                    \n- *Typescript* to manage the different structure used in the project and found errors in compile time\
                    \n- *RXjs* to make easy manage the asynchronous and callack-base code caused from video streaming\
                    \n- *SCSS* to manage the styles of components we create internally in the application and have a more organize architecture than CSS\
                    \n- *Storybook.JS* to manage the documentation for some common components used in different packages included in the project\
                    \n- *Git* as management as version control system\
                    \n- *VS Code* as IDE\
                    \n- *Yarn* to run and compile different part of Diva\
                    \n- *Jest* to manage unit tests\
                    \n- *JSON* as standard format to pass data between frontend and backend\
                    \n- *Jira* to manage the tasks and issues of the project\
                    \n- *Windows* or *MacOS* as operative systems",
        },
        /* TODO Add Workflow Section in future
        {
            type: "subtitle",
            value: "Workflow",
          },
          {
            type: "text",
            value:
              "We work in sprint of 2 weeks and between each sprint we present the work done and decide which user story take for the next sprints.\
                      The stories can be created by the teams that analyze next components to implement or by me and my team if we want:\
                      \n- Do a big refactor in the code\
                      \n- Do an update to old component\
                      \n\nWhen we complete an user story we put it in *dev* environment to test it on ourself, next we deploy it to *test* environment in order to give the possibility to our test team to see if the requirements are reached without errors. If the requirements are not reached or there are some errors we proceed to fix problems and deploy again first in *dev* and then in *test*. We continue to do this until we reach the requirements requested in the user story without bugs or errors.\
                      \nIn out workflow we have 3 different environments: *dev*, *test* and *prod*.\
                      \n- *dev* is used to test the application by other developers and to see if the requirements are reached without errors\
                      \n- *test* is when we have a stable solution in dev in order to have a 'semi-prod' environment to do official demo when needs\
                      \n- *prod* is the final environment where the application is deployed and used by the real customers",
          }, */
      ],
    },
    // Curriculum online
    {
      title: "Portfolio Online",
      description:
        "I create this portfolio online to show my skills and experience.\
            \nI used React with Typescript and style-components and I publish it on my github account through github pages.",
      links: [
        {
          label: "Website",
          url: "https://fangelo94.github.io/",
          icon: externalLinkIcon,
        },
        {
          label: "Github",
          url: "https://github.com/FAngelo94/FAngelo94.github.io",
          icon: githubIcon,
        },
      ],
      mainSkills: ["GiHub Pages", "React", "Style-components", "Typescript"],
      allSkills: [
        "gh-pages",
        "GiHub Pages",
        "GitHub",
        "React",
        "Style-components",
        "Typescript",
      ],
      longtext: [
        {
          type: "text",
          value:
            "Starting from a model I found online I created this portfolio online improving the code and adding new components.",
        },
        {
          type: "subtitle",
          value: "Technologies and Libraries Used",
        },
        {
          type: "text",
          value:
            "- *React* as framework\
                    \n- *Typescript* as language\
                    \n- *style-components* as library to manage styles\
                    \n- *GitHub* as version control system\
                    \n- *GitHub Pages* as static site generator\
                    \n- *gh-pages* package to deploy the website in react using GitHub Pages",
        },
      ],
    },
    // Digital Box
    {
      title: "TeamSystems - Digital Box",
      description:
        "This is an application web designed for professional firms who wish to achieve information sharing processes and improve the relationship with their customers, involve and exchange information also in real time.",
      links: [
        {
          label: "Digital Box",
          url: "https://app.teamsystemdigital.com/digitalbox#/",
          icon: externalLinkIcon,
        },
      ],
      mainSkills: ["CSS", "HTML", "JS", "React", "Redux"],
      allSkills: [
        "antd",
        "CSS",
        "Cypress",
        "HTML",
        "Jest",
        "JS",
        "Python",
        "React",
        "Redux",
        "Storybook",
        "VS Code",
        "Windows 10",
      ],
      longtext: [
        {
          type: "text",
          value:
            "I work, using Agile methodologies, as frontend developer, to Digital Box application in order to update the functionalities already available,implement new ones. Furthermore I fix bugs and refactored old components in order to create a more understandable code and improve the performance.",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as frontend framework (with *Javascript* and *html* obviusly) \
                    \n- *Redux* as state management inside the application\
                    \n- *CSS* to manage the styles of components we create internally in the application\
                    \n- *Jest* to manage unit tests\
                    \n- *Cypress* to manage integration tests\
                    \n- *Storybook.JS* to manage the documentation for some common components used in different place in the application\
                    \n- *Git* as management as version control system\
                    \n- *Python* to automatize some task during the development process\
                    \n- *Docker* to execute the backend locally\
                    \n- *VS Code* as IDE\
                    \n- *JSON* as standard format to pass data between frontend and backend\
                    \n- *Swagger* as documentation to analyze backend API\
                    \n- *Jira* to manage the tasks and issues of the project\
                    \n- *Windows* or *MacOS* as operative systems",
        },
        {
          type: "subtitle",
          value: "Workflow",
        },
        {
          type: "text",
          value:
            "We work in sprint of 2 weeks and between each sprint we present the work done and decide which user story take for the next sprints.\
                    The stories can be created by the teams that analyze next components to implement or by me and my team if we want:\
                    \n- Do a big refactor in the code\
                    \n- Do an update to old component\
                    \n\nWhen we complete an user story we put it in *dev* environment to test it on ourself, next we deploy it to *test* environment in order to give the possibility to our test team to see if the requirements are reached without errors. If the requirements are not reached or there are some errors we proceed to fix problems and deploy again first in *dev* and then in *test*. We continue to do this until we reach the requirements requested in the user story without bugs or errors.\
                    \nIn out workflow we have 3 different environments: *dev*, *test* and *prod*.\
                    \n- *dev* is used to test the application by other developers and to see if the requirements are reached without errors\
                    \n- *test* is when we have a stable solution in dev in order to have a 'semi-prod' environment to do official demo when needs\
                    \n- *prod* is the final environment where the application is deployed and used by the real customers",
        },
        {
          type: "subtitle",
          value: "Interaction with backend",
        },
        {
          type: "text",
          value:
            "We don't have only one server for backend but different services, some of them are developed with Springboot (Java), other in NodeJS (Javascript)\
                    \nWhen we deploy a new components or functionalities in our application could be that we already have the API needs or we don't have it.\
                    \nIn the first case we just use them and, if necessary, we suggest some updates\
                    \nIn the second case we mock the server reply in our redux store, we pass to backend the JSON format of mocked data and they create the API.",
        },
      ],
    },
    // Traveltips
    {
      title: "Personal Project - Traveltips Web Application",
      description:
        "This is an application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it. Backend is down at the moment, only frontend is visible.",
      links: [
        {
          label: "Traveltips App",
          url: "https://traveltips-a9abd.web.app/",
          icon: externalLinkIcon,
        },
        {
          label: "Traveltips App Git",
          url: "https://github.com/FAngelo94/TravelTipsApp_Visible",
          icon: githubIcon,
        },
        {
          label: "Traveltips Backend Git",
          url: "https://github.com/FAngelo94/TravelTipsBackend_Visible",
          icon: githubIcon,
        },
      ],
      mainSkills: ["Docker", "Python", "React", "Redux"],
      longtext: [
        {
          type: "text",
          value:
            "This is an application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it. Backend is down at the moment, only frontend is visible.",
        },
        {
          type: "subtitle",
          value: "Frontend Technologies",
        },
        {
          type: "text",
          value: "For the frontend these are the main technologies I’m using:",
        },
        {
          type: "text",
          value:
            "*React* as frontend,\n*Redux* to manage the store of application \n*Bootstrap* 5 to manage the graphics property of the application \n*Firebase* to deploy the application\n*Jest* to manage tests",
        },
        {
          type: "text",
          value:
            "I organize the architecture of the application in 6 mainfolder:",
        },
        {
          type: "text",
          value:
            "- *bootstrap* contains all scss code that define the classes used in the application\
                \n- *components* contains all UI components rendered inside the application\
                \n- *languages* contains one json for each languages user can select in the application\
                \n- *pages*\
                \n- *store* to manage the information saved inside the application, included all action other components can use to interact with the store and API services\
                \n- *utils* contains a list of functionalities used in different parts of the application, divided in some file",
        },
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value: "For the backend these are the main technologies I’m using:",
        },
        {
          type: "text",
          value:
            "- *Flask* micro-framework developed in *Python*, I choose these language for different reason, it’s faster develop in Python and in future it will be easier integrate the backend with recommender algorithms written in Python to improve the user experience\
                \n- *mysql* to manage the database because the information inside the application are well structured\
                \n- *phpmyadmin* docker image used locally to explore the local database using an UI\
                \n- *docker* and *docker-compose* to develop easly the backend locally where 3 docker image are run, one for Flask, one for mysql and one for phpmyadmin\
                \n- *Swagger* to create a list of API documented well\
                \n- *marshmallow*, *SQLAlchemy* and *connexion* to manage easly the tables in the db inside the API",
        },
        {
          type: "subtitle",
          value: "Other technologies",
        },
        {
          type: "text",
          value: "- *Git*\
                \n- *Visual Studio Code*",
        },
      ],
      allSkills: [
        "Bootstrap 5",
        "CSS",
        "Docker",
        "docker-compose",
        "firebase",
        "Flask",
        "HTML",
        "Jest",
        "marshmallow",
        "mysql",
        "phpmyadmin",
        "Python",
        "pythonanywhere",
        "React",
        "Redux",
        "SQLAlchemy",
        "Swagger",
      ],
    },
    // FCA Project
    {
      title: "Stellantis - Validation of ADAS System",
      description:
        "As consultant I’m working inside Stellantis (previous FCA) in an engineering team that manage the different tools used by other team in order to validate the autonomous driving algorithm. We work together other teams that are in different part of the world.",
      links: [],
      mainSkills: ["C++", "Docker", "Python", "Ubuntu"],
      allSkills: [
        "Airflow",
        "Bash Script",
        "C#",
        "C++",
        "Codebeamer",
        "Docker",
        "Github",
        "Grafana",
        "Jenkins",
        "NDS and OpenDRIVE map format",
        "Python",
        "ROS",
        "Ubuntu",
        "Unity",
        "Visual Studio Code",
        "Windows 10",
      ],
      longtext: [
        {
          type: "text",
          value:
            "As consultant I’m working inside Stellantis (previous FCA) in one big project regarding the autonomous driving.",
        },
        {
          type: "subtitle",
          value: "What I do?",
        },
        {
          type: "text",
          value:
            "I’m working, using AGILE methodology, in an engineering team that manage the different tools used by other team in order to validate the autonomous driving algorithm. We work together other teams that are in different part of the world.\
                    \nSome of our main activities are:\
                    \n- Customize the simulation software bought with Stellantis specific requirements (using c++ for core and c#/Unity for GUI)\
                    \n- Implement docker images with specific test and push them in a cluster to give the possibility to other teams to run test remotely\
                    \n- Implement DAGs in Airflow (using Python) to manage pipeline tasks like push KPI in a database\
                    \nBuild Grafana dashboards to visualize simulations outputs\
                    \n- Define with other teams next features and tests to implement in our simulation tool",
        },
        {
          type: "subtitle",
          value: "Methodology",
        },
        {
          type: "text",
          value:
            "We work in AGILE SCRUM with sprints that last 2 weeks.\
                    \nWe not only take care items added by our APO but we also propose items that help us to reach goals delivery",
        },
        {
          type: "subtitle",
          value: "Programming languages",
        },
        {
          type: "text",
          value:
            "- *C++*\
                    \n- *Python*\
                    \n- *C#*\
                    \n- *Bash script*",
        },
        {
          type: "subtitle",
          value: "Operative Systems",
        },
        {
          type: "text",
          value: "- *Ubuntu* (mainly)\
                    \n- *Windows 10*",
        },
        {
          type: "subtitle",
          value: "Other Technologies",
        },
        {
          type: "text",
          value:
            "- *Visual Studio Code*\
                    \n- *Unity*\
                    \n- *Github*\
                    \n- *Docker*\
                    \n- *Airflow*\
                    \n- *Jenkins*\
                    \n- *Codebeamer*\
                    \n- *Grafana*\
                    \n- *NDS and OpenDRIVE* map format\
                    \n- *Online Google Sheets* (word, excel, presetation)\
                    \n- *ROS*",
        },
      ],
    },
    // React-Redux application
    {
      title:
        "Accenture - React-Redux Application for a Big Company in the Energy Sector",
      description:
        " I developed a web application using React with Redux.\
            \nI realized a React application to collect and visualize multiple data, coming in an asynchronous way from different station distributed in Italy.",
      links: [],
      mainSkills: ["NodeJS", "Python", "React", "Redux", "Stencil JS"],
      allSkills: [
        "Chrome",
        "CSS",
        "D3.js",
        "Firefox",
        "Git",
        "html",
        "IE11",
        "Java",
        "JS6",
        "Jupiter",
        "LeafletJS",
        "MQTT",
        "NodeJS",
        "Python",
        "React",
        "React intl",
        "Redux",
        "Safari",
        "Sass",
        "Stencil JS",
        "Storybook",
        "VS Code",
      ],
      longtext: [
        {
          type: "text",
          value:
            "In my fourth project I developed a web application using React with Redux.\
                    \nIn this project I worked in agile mode (scrum in the specific) and the team included mainly with 2 frontend developers, 2 functional, 1 UI designer, 2 backend developer and 1 scrum master.\
                    \nI realized a React application to collect and visualize multiple data, coming in an asynchronous way from different station distributed in Italy.",
        },
        {
          type: "subtitle",
          value: "Languages Used",
        },
        {
          type: "text",
          value:
            "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*\
                    \n- *Python*\
                    \n- *Java*",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React*\
                    \n- *Redux Saga*\
                    \n- *NodeJS*\
                    \n- *Stencil JS*\
                    \n- *Storybook UI*\
                    \n- *Chrome, Firefox, Safari and IE11* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Git* to repository online\
                    \n- *Jupyter* notebook for Python code\
                    \n- *MQTT* to connect with the server",
        },
        {
          type: "subtitle",
          value: "Libraries Used",
        },
        {
          type: "text",
          value:
            "We introduced few libraries only to implement some complex components.\
                    \n- *LeafletJS* to implement an interactive map that are one the main component in website put in the homepage\
                    \n- *D3.js* to draw dynamic and custum svg\
                    \n- *React intl* to support multi language in the website",
        },
        {
          type: "subtitle",
          value: "What I did",
        },
        {
          type: "text",
          value:
            "I describe here the main components I developed during the project without enter in details about the client.",
        },
        {
          type: "subtitle",
          value: "1) Interactive Map",
        },
        {
          type: "text",
          value:
            "One of the first component was a map center in Italy. To build this component I used Leaflet JS.\
                    \nI put in the map one icon, using the geographic coordinates, for each station of the company. When user clicks in one icon a popup appear showing some data relatives the station. The data in the popup change in realtime.\
                    \nFrom the popup user can also reach the station page clicking the title of popup.\
                    \nNext in the map I put an image on top of Italy (using the geographic coordinates for top left and bottom right corner of the image). I put an other image on Europe and Nord Africa to apply an opacity filter to all countries except Italy.\
                    \nI limited the zoom and the moving in the map to concentrate the attention of the user to the Italy. And some object in the map disappear when user zooms in too much in order to have only the stations in the map.",
        },
        {
          type: "subtitle",
          value: "2) Server with NodeJS",
        },
        {
          type: "text",
          value:
            "When we start to develop frontend we don’t have backed, for this reason I create a NodeJS local server to send fake data to the frontend using a GET (to take basic information about stations) and a socket to send asynchronous data every seconds.",
        },
        {
          type: "subtitle",
          value: "3) SVG Graphics",
        },
        {
          type: "text",
          value:
            "For each station there are different pages that shows data coming from server. For some page there are a graphics that represent components in the station with the data. To realize these graphics I used 3D js.\
                    \nThanks to this library I created SVG graphics that adapt their dimensions to the page space without lost quality.\
                    \nA lot of page have similar draw components. In order to avoid repeated code, for each type of component, I created a function that draw and customize the component using a JSON configuration passed from the page where we are.",
        },
        {
          type: "subtitle",
          value: "4) Support multi language",
        },
        {
          type: "text",
          value:
            "I used React intl to support english and italian. With this library I created 2 file JSON, one for italian terms and one for english terms where I assign to the same set of keys the correct translation.\
                    \nThen I created a global function that is possible to use everywhere in the code, you pass a key and the function return the correct translated word, depending on the language set in the local storage.\
                    \nWhen the user changes language I save the new setting in the session storage and the page will be reloaded to change the language.",
        },
        {
          type: "subtitle",
          value: "5) Redux-Saga",
        },
        {
          type: "text",
          value:
            "To save data coming from the server we use Redux-Saga.\
                    \nWe receive asynchronous data and thanks to Redux we avoid to have different values for the same property. Moreover we can manage easier the state of the website because is centralized. And thanks to a tool installed on chrome we can see how the state of the application is evolving (making easy the debug).\
                    \nUsing redux we can divide data from application. It means that the application doesn’t need to get data from server or manage the connection. The application just use the data.\
                    \nIn Redux we implemented all the logic about comunication and recovery of data.\
                    \nIn this way the code is more clean and maintainable.",
        },
        {
          type: "subtitle",
          value: "6) Build JSON format data",
        },
        {
          type: "text",
          value:
            "After we decided the better format to store data in our application I created JSON with random data using python.\
                    \nI used python for 2 reasons:\
                    \n- Data aren’t completely random but enter in certain range\
                    \n- I manipulated and changed these json many time so thanks to python it I spent less time\
                    \nWhen we obtained the real data from csv files I used Python to manipulate them and build a realistic JSON data to give to the backend so they know in which format send the real data.",
        },
        {
          type: "subtitle",
          value: "7) Pure CSS components",
        },
        {
          type: "text",
          value:
            "To have better performance we avoid to use script when we can. For example we use pure CSS accordion and toggle for filters.",
        },
        {
          type: "subtitle",
          value: "8) MQTT Connection",
        },
        {
          type: "text",
          value:
            "When backend was ready we tried a first connection with socket but the backend technologies supported only mqtt communication. So we realized a mqtt connection subscribing our client to a topic where server put data in a queue.",
        },
        {
          type: "subtitle",
          value: "9) SVG Function Graphs",
        },
        {
          type: "text",
          value:
            "To draw the cartesian graph of some complex function given the equations I used Python to calculate a set of points that then I used in React to draw the function.\
                    \nThen, in these cartesian graph, I implemented 2 functionalities:\
                    \nThe possibility to drag and zoom in/out the graph\
                    \nThe possibility to select a specific section of the graph and zoom in it",
        },
      ],
    },
    // Gazzetta dello Sport
    {
      title: "Accenture - Gazzetta dello Sport",
      description:
        "In my second project in Accenture I work in a very big and interesting project. In this case the goal was the performances because the website is read by thousand and thousand of people.",
      links: [
        {
          label: "Gazzetta dello Sport",
          url: "https://www.gazzetta.it/",
          icon: externalLinkIcon,
        },
      ],
      mainSkills: ["CSS", "Docker", "HTML", "JS6", "Sass"],
      allSkills: [
        "CSS",
        "Docker",
        "Galen",
        "Git",
        "Gulp",
        "HTML",
        "Jenkins",
        "Jira",
        "JS6",
        "Sass",
        "VS Code",
      ],
      longtext: [
        {
          type: "subtitle",
          value: "Languages Used",
        },
        {
          type: "text",
          value:
            "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*",
        },
        {
          type: "subtitle",
          value: "Tecnologies Used",
        },
        {
          type: "text",
          value:
            "- *Gulp*\
                    \n- *Docker* to create a container when we run the project\
                    \n- *Chrome* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Galen* to test some parts of the website\
                    \n- *Jenkins* to manage the deploys\
                    \n- *Jira* to manage the different tasks\
                    \n- *GitHub* to repository online",
        },
        {
          type: "subtitle",
          value: "Architectures Used",
        },
        {
          type: "text",
          value:
            "*Some part of *Bulma* framework\
                    \n*SMACSS* and *BEM* to organize the code and name convention",
        },
        {
          type: "subtitle",
          value: "Implementation",
        },
        {
          type: "text",
          value:
            "This was a very long and complex project so I divide it in little chapters based on the tasks I did.\
                    \nObviously I didn’t execute them one after other but often I worked on more task parallel, for example I made a few desktop pages, after a few mobile pages and after a few other desktop pages.",
        },
        {
          type: "subtitle",
          value: "1) Desktop pages",
        },
        {
          type: "text",
          value:
            "First of all I worked with an other guy to build the main pages of the website for desktop using html and sass.\
                    \nDuring the development we followed some important guidelines:\
                    \n- write less code possible to have a light website\
                    \n- divide the website in reusable components that have a common css to make the website more scalable and maintainable\
                    \n- use the most general names possible for components for the maintainability, because, for example, the same component will be used in different position or maybe change position so it is better not say a name connected to the position like “top-media”\
                    \n- architecture of code inspired of SMACSS and BEM\
                    \n- write code to make the website usable and well designed in different website like Firefox, Chrome, Safari, Explorer 11and others",
        },
        {
          type: "subtitle",
          value: "2) Mobile pages",
        },
        {
          type: "text",
          value:
            "After the pages for the desktop we made the pages for mobile using the same architecture of desktop but dividing the css code to improve the performance because in this way who use the desktop not download useless css code written for the mobile.",
        },
        {
          type: "subtitle",
          value: "3) Test with Galen",
        },
        {
          type: "text",
          value:
            "After we did the first pages, our clients want to introduce in the work galen to test the graphic of some pages already done.\
                    \nI was the responsibility to study Galen and use it.\
                    I met a lot of difficult with galen. It is a easy instrument to do basic things but if you want to do more sophisticated tests it’s a nightmare because online there is only the official guide and it is very difficult (for not say impossible) to find complex examples.\
                    \nFor this reason it was also funny because I used all my problem solving skills to find original ways to do sophisticated test using the most simple possible code because the goal for the client was create a simple and standard way to test in order to be used from everyone to test in a fastly way website pages of this project but also of future projects.\
                    \nI used Galen syntax and JS for some important scripts for the tests.\
                    \nHere I will upload the guide when I will have finished it and will have removed possible sensible data (I don’t write the guide directly here or this article becomes too huge).\
                    \nIn the guide I will write the main problems met and how I resolved them.",
        },
        {
          type: "subtitle",
          value: "4) Integration with JS",
        },
        {
          type: "text",
          value:
            "When we finished the html and css structure for the first pages other guys did the Javascript components to make the website really useable.\
                    \nI worked with some of them to find the best Javascript solution adding some data (like data-target, new classes or transition) in the html or css when it was needed.\
                    \nMoreover I also develped some complex components in Javascript (like a custom scrollbar).",
        },
        {
          type: "subtitle",
          value: "5) Optimizations",
        },
        {
          type: "text",
          value:
            "Apart to use the guidelines I wrote above for CSS and html, to improve more the speed of the website we adopted other different methodologies:\
                    \n- Use an orchestrator to manage when, and in which order, loading the JS scripts\
                    \n- Put the CSS of the first visible object inline to reduce the initial loading of webpage",
        },
        {
          type: "subtitle",
          value: "6) Compability and Bug fixing",
        },
        {
          type: "text",
          value:
            "In order to resolv different bugs and have the compability with all the main browser (Firefox, Chrome, Safary, Edge and also IE11 with different types of device) I learned to inspect the code of the webpage with all browser and also using virtual machine (for Windows) and emulator (for Android and Safary)",
        },
        {
          type: "subtitle",
          value: "Conclusion",
        },
        {
          type: "text",
          value:
            "This project was a great experience and I learn a lot from it.\
                    \nIn particular I understand how write and organize CSS, html and Javascript to have a performance website.",
        },
      ],
    },
    // Static Website for Financial Client - Accenture
    {
      title: "Accenture - Static Website for Financial Client",
      description:
        "I worked on an already started project.\
            \nI developed some components for the website of a big client in the financial sector.\
            \nHere the website was divided in “molecules”.\
            \nEvery molecules it was implemented to be responsive and work as in desktop as in mobile devices.",
      links: [],
      mainSkills: ["html", "JS6", "Sass"],
      allSkills: [
        "Chrome",
        "CSS",
        "firefox",
        "Git",
        "Gulp",
        "Html",
        "IE11",
        "JS6",
        "Plyr",
        "Safari",
        "Sass",
        "Swiper",
        "VS Code",
        "Webpack",
      ],
      longtext: [
        {
          type: "text",
          value:
            "In my third project in Accenture I worked on an already started project.\
                    \nI developed some components for the website of a big client in the financial sector.\
                    \nHere the website was divided in “molecules”.\
                    \nEvery molecules it was implemented to be responsive and work as in desktop as in mobile devices.\
                    \nIn this projects I worked with a very huge teams. The most difficult and challenging thing in this project was interact to so many people. When I resolved bugs often they aren’t bugs I could directly resolve. So I had to understand which team I needed to contact to resolve it (backend team, maintanence team, integration team), explain the problem and follow each phases until the bug was solved.",
        },
        {
          type: "subtitle",
          value: "Languages Used",
        },
        {
          type: "text",
          value:
            "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*",
        },
        {
          type: "subtitle",
          value: "Tecnologies Used",
        },
        {
          type: "text",
          value:
            "- *Gulp*\
                    \n- *Chrome, Firefox, Safari and IE11* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Git* to repository online\
                    \n- *Webpack*",
        },
        {
          type: "subtitle",
          value: "Libraries Used",
        },
        {
          type: "text",
          value:
            "This projects doesn’t need very hight performance so, to speed up the development, we used some libraries:\
                    \n- *Swiper* to manage the carousels\
                    \n- *Plyr* to manage have a simple, accessible and customisable media player for Youtube and Vimeo",
        },
        {
          type: "subtitle",
          value: "What I did",
        },
        {
          type: "text",
          value:
            "I described here the main features I developed during the project.",
        },
        {
          type: "subtitle",
          value: "1) Carousel and Video",
        },
        {
          type: "text",
          value:
            "I wrote the html, CSS and JS to develop a carousel using Swiper. I also added a listener to activate the automatic loop of carousel images when user don’t put the mouse on it and deactivate it when user put the mouse.\
                    \nUsing Ply I created a custom component to add video in page from Youtube or Vimeo and, optionally, start automatically with mute active.\
                    \nFinally I also added Ply in the carousel in order to have a video in the carousel that start automatically with mute activated when the current slide has a video and stop it when slide change.\
                    \nAfter some weeks I updated the hero carousel to be used also in the middle of page, inside other molecules, without full the screen. To do this I checked if the carousel was inside an other molecules.",
        },
        {
          type: "subtitle",
          value: "2) Optimization of JS",
        },
        {
          type: "text",
          value:
            "I started to work to this project when it was near the final deliver and most of the work was already done but Javascript code was written by different persons, without use classes or try-catch and this was a problem because if in the code incurred in an error in the first rows the other code will not be executed because Gulp copied all javascript together.\
                    \nTo solve this problem I work with an other guy in order to:\
                    \n- Organize the different molecules script in different classes; then, for each class we instantiated them in different try-catch, so if some class was broken it would not stop the others.\
                    \n- To organize better the scripts we substituted Gulp with Webpack because it didn’t just copy all scripts in a file and the code became more robust and the scripts more independent from each other.",
        },
        {
          type: "subtitle",
          value: "3) Autocomplete",
        },
        {
          type: "text",
          value:
            "First of all I developed a search bar inside the header that user can show or hide pressing a button.\
                    \nIn this search bar I implemented the autocomplete. A listener make a fetch to a server with the value of input field anytime the user inserts new char (or remove ones). If the fetch ends successful I builds a list with the results returned to show them to the user.\
                    \nUser can interact with the autocomplete in the following ways:\
                    \n- If he press enter button the research start and it will be redirect in a new page with the research results.\
                    \n- If he pressed exit button the search bar is cleaned and hidden\
                    \n- He can also start the research clicking in an option in the suggest list created or navigating in the suggested list with the arrows and click enter button to chose the desired option",
        },
        {
          type: "subtitle",
          value: "4) Research",
        },
        {
          type: "text",
          value:
            "When the user confirm the word, or sentence, that he want to search in the autocomplete field, it is saved in the local storage and the user is redirect in the research page.\
                    \nIn this page I implemented the research with a fetch that send the word or sentence to the server using a REST api (POST with a JSON payload) and show in page the results of the research.\
                    \nThe graphics of the list of results was enough complex to implement because there were three different sublist, different each other from the graphics point of view. Moreover for each field in the lists I showed different parameters depend of the JSON the client received.\
                    \nAnd for last I implemented this page, like all website, to be seen good as in mobile as in desktop.\
                    \nTo realize this page I made a great use of flex in order to adapt it in each screen size and I used mixin only where it was extremely necessary in order to use less css code possible.",
        },
      ],
    },
    /** 
            {
                title: "",
                description: "",
                links: [
                    {
                        label: "",
                        url: "",
                        icon: externalLinkIcon,
                    }
                ],
                mainSkills: [""],
                allSkills: [""],
                longtext: [
                    {
                        type: "",
                        value: ""
                    }
                ]
            }
            */
  ],
};
