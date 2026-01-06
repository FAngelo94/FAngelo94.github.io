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
import hourlyIcon from "./assets/1-hour.svg";
import weeklyIcon from "./assets/7-days.svg";
import monthlyIcon from "./assets/30-days.svg";
import customIcon from "./assets/customize.svg";

export const hero = {
  hello: "Hello 👋, I'm",
  name: "Angelo Falci",
  title: "Software Engineer",
  contacts: "Contacts",
  mainSkills: "Here are my main skills/knowledge:",
  paragraphs: [
    "Hi, Angelo and I live in the heart of the alps, Sondrio (north of Milan), Italy. I'm passionate about programming and I'm always looking for new challenges to learn and improve my skills. I’m a very active and motivated person. My best qualities are determination and sincerity. In the other side my defects are.. wait, it is better not say my defects in a curriculum.",
    "I'm appasionated to AI and I use/test different tools to speed up and improve my work.",
    "In my free time I like experiment and try new tecnlogies developing fullstack web applications. Below you can see more details about my work experience and projects!",
    "My other hobbies are: travel, read books, board games, videogames and do sport",
    "I have patent B and A"
  ],
};

export const whoIam = {
  paragraphs: [
    "I’m a passionate software engineer focused on problem solving and building pragmatic solutions to real client needs.",
    "I’ve worked with both large companies and early-stage startups, collaborating in teams as well as delivering projects end-to-end independently.",
    "I’m used to working directly with clients, understanding real business needs, and turning them into working software.",
    "I’m comfortable across the full stack and quick to learn new technologies, also leveraging modern AI tools to work more efficiently",
    "I value clear and direct communication with my clients. I want them to fully understand how I plan to solve their problem, and I’m always honest if there’s something I don’t know at that moment.",
  ],
}

export const home = {
  title: ["Hire a", "Software Engineer", "in less than 24 hours"],
  subtitle: "I'm the right person for you if:",
  paragraphs: [
    "You need a web developer for your team.",
    "You need to improve your website/application with new features or fix existing ones.",
    "You need someone to develop all software for your startup from scratch.",
    "You want a consultant for your idea/project before starting the development",
    "You aren't sure about what technologies and developer you need for your project",
    "You want propose me a collaboration",
  ],
  footerText: "Not waste your time, contact me and let's build something great together!",
  caption: "I not count hours of work, I count goals reached",
  ctas: {
    lookPlans: "Look my plans",
    speakGoals: "Speak about your goals",
  },
}

export const prices = {
  title: "My Plans",
  subtitle: "Choose the plan that best suits your needs.",
  footerText: "If you have special needs or requests, contact me and I will create a custom plan for you!",
  ctaBookPlan: "Book this plan",
  ctaMoreDetails: "More details",
  plans: [{
    title: "€ 750",
    description: "Ideally for small tasks or to have a developer available for a short period of time.",
    included: ["I work in 1 of your project for 1 week", "If you aren't satisfied, I will refund you 100%", "You can contact me for support anytime"],
    footer: "For small developments",
    type: "WEEKLY",
    icon: weeklyIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How it works?",
      },
      {
        type: "text",
        value: "With this plan you 'rent' me for 1 week to work on in 1 of your project without wasting time in contracts or other bureaucracy. Call me and I can start the day after.\
        \nThis plan is ideal for small tasks or to test me before starting a longer collaboration."
      },
      {
        type: "subtitle",
        value: "Advantages",
      },
      {
        type: "text",
        value: "- You can have a developer available in less than 24 hours\
        \n- I don't waste time in counting hours, I work counting the results updating you periodically\
        \n- You can pay me until you need me, without long-term contracts\
        \n- You know exactly how much you will pay upfront\
        \n- If you aren't satisfied I will refund you the entire week cost"
      }
    ],
  },
  {
    title: "€ 2500",
    description: "Ideally for medium/large projects where you need a developer full-time for a month.",
    included: ["I work in 1 of your project for 1 month", "If you aren't satisfied, I will refund you 100%", "You can contact me for support anytime"],
    footer: "The most popular",
    type: "MONTHLY",
    icon: monthlyIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How it works?",
      },
      {
        type: "text",
        value: "With this plan you 'rent' me for 1 month to work on in 1 of your project without wasting time in contracts or other bureaucracy. Call me and I can start the day after.\
        \nThis plan is ideal if you need a developer to work with you or your teams for 1 or more month witout long-term contracts."
      },
      {
        type: "subtitle",
        value: "Advantages",
      },
      {
        type: "text",
        value: "- You can have a developer available in less than 24 hours\
        \n- I don't waste time in counting hours, I work counting the results updating you periodically\
        \n- You can pay me until you need me, without long-term contracts\
        \n- You know exactly how much you will pay upfront\
        \n- If we start and you aren't satisfied you can stop the rent when you want and I will refund you the first week cost"
      }
    ],
  },
  {
    title: "Custom",
    description: "If you have special needs or requests, contact me and I will create a custom plan for you!",
    included: ["I will create a custom plan based on your needs", "You can contact me for support anytime"],
    footer: "Let's create your plan",
    type: "CUSTOM",
    icon: customIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How it works?",
      },
      {
        type: "text",
        value: "Choose this plan if you’re not sure how much time you’ll need or if you have specific requirements.\
        \nContact me, we'll discuss about your needs and I'll create a custom plan for you.\
        \nIn some case I can give you a discount, or rise the price, based on your situation"
      },
      {
        type: "subtitle",
        value: "Examples where this is useful",
      },
      {
        type: "text",
        value: "- If you are a startup with few budget, you can have a discount and give me equity in your startup\
        \n- If you need a developer for a long period of time (more than 3 months) I can give you a discount\
        \n- If you need someone to mantain your project that necessary few hours per week/month I can give you a discount\
        \n- If you need to develop your solution in short time I can rise the price to prioritize your project"
      }
    ],
  },
  {
    title: "€ 45",
    description: "Ideally for small tasks or to have a developer/consultant available for a short period of time.",
    included: ["If you need to count the hours", "You can contact me for support anytime", "I will fill out your timesheet regularly"],
    footer: "If you have to account for hours",
    type: "HOURLY",
    icon: hourlyIcon,
    longtext: [
      {
        type: "text",
        value: "Generally I prefer not work counting the hours, for my experience it's a waste of time for both sides and it is more difficult count how much you will spend upfront but it can be useful in some specific cases."
      },
      {
        type: "subtitle",
        value: "When use this plan",
      },
      {
        type: "text",
        value: "- If you need a developer for very small tasks that can be done in few hours\
        \n- If you need a consulting meeting\
        \n- If you need to count the hours for your internal processes"
      }
    ],
  },
    /* {
      title: "€ 60",
      description: "Ideally for small tasks or to have a developer available for a short period of time.",
      included: [],
      footer: "For a single consultant",
      type: "CONSULTANT",
      icon: hourlyIcon,
      longtext: [{
        type: "text",
        value: "With this plan you can have me available for 1 hour to work on your project with priority over other clients.\nThis plan is ideal for small tasks or to have a developer available for a short period of time with priority."
      }],
    } */
  ]
}

export const header = {
  home: "Home",
  prices: "Prices",
  whoiam: "Who I Am",
  career: "Career",
  aboutMe: "About Me",
  projects: "Projects",
  contacts: "Contacts",
  experience: "Experience",
  toggle: "Toggle",
  generatePdf: "Generate PDF",
  menuOpen: "Open menu",
  menuClose: "Close menu",
};

export const footer = {
  center: "Website done by React",
  center2: "and love",
};

export const contacts = {
  title: "Contact Me😃",
  subtitle:
    "If you aren't free in available slots, use my other contacts to reach me and I will respond as soon as possible!",
  bookACall: "Book a Call",
  calendarLink: "https://calendar.app.google/dcnshtZYNqVt4KQx6",
};

export const form = {
  useModule: "Get in touch using the form below",
  leaveMessage: "Leave your message",
  thanks: "Thanks for your message! I'll get back to you as soon as possible!",
  backToTop: "Back to top",
  send: "Send",
};

export const career = {
  title: "Career and Studies",
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
      title: "Software Engineer",
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
        "I work to Diva project, a custom player video with many features. The main technologies I use are React, Vanilla JS, Typescript, RXjs, Node, Storybook, Webpack, Babel",
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
  subtitle: "(click on the title or text of the card to see more details)",
  footerText: "For more projects look my github or codepen! (links in footer)",
  projects: [
    // Smanno
    {
      title: "Smanno",
      description: "I designed and developed a fullstack application to manage a fleet of different robots and their complex missions.\
      \nThe platfrom is used in healthcare and hospitality laboratories to automatize different task using robots.",
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
          value: "Smanno is a startup of 3 people (including me) that develops robots for healthcare and hospitality laboratories and a platform to use them.\
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
          \n- Docker compose file to run and setup db, backend and frontend with just one command in the terminal\
          \n- Socket services to have real-time update in the frontend dashboard about robots and missions status"
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
          \n- User can also encapsulate complex mission in order to reuse them in future in other mission without recreate everything from scratch and, in each mission, it is possible enable/disable some steps\
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
          \nNext for client I created a script that export these 3 docker images created. The script create also other script to automatize the import and run on the 3 images in the client server with just one command, both in Linux and Windows environment.\
          \nEverything is saved in an output folder that we can copy-paste in the client server and run.\
          \nMaybe in future this could be imporoved based on what clients need."
        }
      ],
    },
    // One TCG Hero
    {
      title: "One TCG Hero",
      description: "I developed a PWA in React and deployed in Firebase to manage my personal card game collection. I added, and in some case improved, different usefull features I found in different website but not all in one place.",
      links: [{
        label: "One TCG Hero - Official Website",
        url: 'https://onetcghero.web.app/',
        icon: externalLinkIcon,
      }],
      mainSkills: ['Lovable', 'React', 'Copilot', 'Firebase'],
      allSkills: ["CSS", "Firestore", "GitHub", "html", "Javascript", "Redux", "Vite", "VS Code"],
      longtext: [
        {
          type: "text",
          value: "I developed a PWA in React to manage my personal card game collection. I added, and in some case improved, different usefull features I found in different website but not all in one place.\
          \nFor experimental/learn purpose I started this project using Lovable, next I stopped to use it but continued to use massively the AI tools for development wrinting code only when strictly necessary in order to understand the real limits of this new type of develop.\
          \nOften I created task on Github with technical details and I assigned it to Copilot to generate the code, next I reviewed and, when necessary, modified the code generated to fit my needs."
        },
        {
          type: "subtitle",
          value: "Features implemented",
        },
        {
          type: "text",
          value: "Here a list of the main features implemented in the application:\
          \n- Application with UI responsive for mobile and desktop with both light and dark mode support\
          \n- User authentication using Firebase Auth with email/password\
          \n- User can apply complex filters to find a specific card or set\
          \n- User can create and manage his collection adding cards one by one or importing a list of cards (managing also the merging if necessary)\
          \n- Use can create and manage his decks and, for each deck, see different statistics like number of cards, rarity distribution, cost curve and others\
          \n- User can import decks and export them in different formats for different platform (like simulator or CardMarket)\
          \n- User can print some cards choosing different layout and number of cards per page\
          \n- If an user is enabled to do it by me, after login he has collection and decks saved in Firestore database in order to have same data in different devices",
        },
      ],
    },
    // Gut
    {
      title: "GUT",
      description: "I built a Spotify-like PWA with mobile-first UI, where users can watch music videos and support their favorite artists with donations.\
      \n I also built a custom CMS to manage the platform’s content used by the PWA and contributed to the backend development.",
      links: [{
        label: "GUT - Official Website",
        url: 'https://gutmusic.media/',
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
    // Curriculum online
    {
      title: "Portfolio Online",
      description:
        "I create this portfolio online to show my skills and experience.\
            \nI used React with Typescript and style-components and I publish it on Firebase using a custom domain.",
      links: [
        {
          label: "Website",
          url: "https://angelofalci.com",
          icon: externalLinkIcon,
        },
        {
          label: "Github",
          url: "https://github.com/FAngelo94/FAngelo94.github.io",
          icon: githubIcon,
        },
      ],
      mainSkills: ["Firebase", "React", "Style-components", "Typescript"],
      allSkills: [
        "Firebase",
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
            "Starting from a model I found online I created this portfolio online improving the code, adding new components and multilanguage support with Italian and English.\
            \nIn a previous version I published the portfolio using GitHub Pages but now I decided to use Firebase hosting with a custom domain to have more control and flexibility.",
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
                    \n- *Firebase* as hosting service\
                    \n- *jspdf* and *html2canvas* to generate a simplified PDF version of the portfolio",
        },
      ],
    },
    // Kangury
    {
      title: "Startup - Kangury",
      description:
        "I developed a fullstack application using React for frontend and Django for backend.\
        \nIn Kangury you can buy photos that will be associated to an album contained your photos or videos.\
        \nGo to the website to see more!",
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
            \nAfter user buy a photo he can associate it to an album where he can upload his photos or videos.\
            \nIf you are interested to collaborate in this startup contact me and I can provide you also a discount code!",
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
    {
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
          value: "Problem Analysis",
        },
        {
          type: "text",
          value:
            "First of all my job was find the best technologies to develop what Digitalpix needed: a web application more accessible from mobile devices and a mobile application to publish in Google Play Store and Apple App Store.\
            \nHaving a low budget and working alone I decided to develop a PWA (Progressive Web Application) using React first of all and then develop a mobile application using React Native that include a WebView that show the PWA.\
            \nIn this way I can use the same code for the web application and the mobile application. Moreover I don't need to publish the mobile app in Google Store and Apple Store everytime I do an updates reducing drastically the deploying time and maintenance for Digitalpix after the release.",
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
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value: "During the project I suggested different solutions to improve the software architecture of Digitalpix and to solve some problems we found during the development.\
          \nThe main updates I suggested was:\
          \n- Create a Swagger documentation for all the APIs used in order to have a clear documentation to understand how to use them and what data send/receive\
          \n- Save all software solutions they used internally in a Github profile created for Digitalpix in order to have a version control system and a backup of all the code developed"
        },
      ],
    },
    // ClimberWorld
    {
      title: "Personal Project - Climberworld Web App",
      description:
        "Web app I developed as fullstack using React as frontend and Flask (Python framework) as backend. This site has the ambition to collect information about all the refuges, excursions and climbing walls of the Alps.\
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
            "In my free time I worked on this application in order to learn new things and keep training the knowledge I already have and learn new ones.\
            \nI developed both frontend and backend.",
        },
        {
          type: "subtitle",
          value: "Frontend",
        },
        {
          type: "text",
          value:
            "For the frontend these are the main technologies I used:\
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
            "For the backend these are the main technologies I used:\
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
            "I worked, using Agile methodologies, as a frontend developer on the Diva project in order to improve existing functionalities and develop new ones.",
        },
        {
          type: "subtitle",
          value: "Project Description",
        },
        {
          type: "text",
          value:
            "Diva was a player library sold by DeltaTre to different clients that integrated it into their streaming services.\
                    \nInside, it was divided into different packages dedicated to:\
                    \n- Common functionalities used across different packages\
                    \n- Specific components, or sets of components, that could be used standalone and sold individually, or integrated into larger packages",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as the frontend framework (with *Typescript* and *SCSS*) \
                    \n- *Typescript* to manage the different structures used in the project and to catch errors at compile time\
                    \n- *RXjs* to simplify the management of asynchronous and callback-based code caused by video streaming\
                    \n- *SCSS* to manage component styles and maintain a more organized architecture compared to plain CSS\
                    \n- *Storybook.JS* to manage the documentation for shared components used across different packages in the project\
                    \n- *Git* as the version control system\
                    \n- *VS Code* as the IDE\
                    \n- *Yarn* to run and build different parts of Diva\
                    \n- *Jest* to manage unit tests\
                    \n- *JSON* as the standard format to exchange data between frontend and backend\
                    \n- *Jira* to manage project tasks and issues\
                    \n- *Windows* or *MacOS* as operating systems",
        },
        {
          type: "subtitle",
          value: "Workflow",
        },
        {
          type: "text",
          value:
            "We worked in 2-week sprints, and between each sprint we presented the completed work and decided which user stories to take for the next iterations.\
                      The stories could be created by the teams analyzing upcoming components to implement, or by me and my team when we wanted to:\
                      \n- Perform a large refactor of the codebase\
                      \n- Update existing components\
                      \n\nWhen we completed a user story, we deployed it to the *dev* environment to test it internally. Afterwards, we deployed it to the *test* environment to allow the QA team to verify that all requirements were met without errors. If requirements were not met or issues were found, we fixed the problems and redeployed first to *dev* and then to *test*. We repeated this process until the user story fully met the requirements without bugs or errors.\
                      \nIn our workflow we used three different environments: *dev*, *test*, and *prod*.\
                      \n- *dev* was used for developer testing and early validation of requirements\
                      \n- *test* was used as a stable pre-production environment for official demos when needed\
                      \n- *prod* was the final environment where the application was deployed and used by real customers",
        },
      ]
      ,
    },
    // Digital Box
    {
      title: "TeamSystems - Digital Box",
      description:
        "Web application designed for professional firms that wanted to achieve information-sharing processes, improve relationships with their customers, and involve them by exchanging information also in real time.",
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
            "I worked, using Agile methodologies, as a frontend developer on the Digital Box application in order to update the functionalities already available and implement new ones. Furthermore, I fixed bugs and refactored old components to create more readable code and improve performance.",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as the frontend framework (with *Javascript* and *HTML*, obviously) \
                    \n- *Redux* as state management inside the application\
                    \n- *CSS* to manage the styles of components created internally in the application\
                    \n- *Jest* to manage unit tests\
                    \n- *Cypress* to manage integration tests\
                    \n- *Storybook.JS* to manage the documentation for common components used in different parts of the application\
                    \n- *Git* as the version control system\
                    \n- *Python* to automate some tasks during the development process\
                    \n- *Docker* to run the backend locally\
                    \n- *VS Code* as the IDE\
                    \n- *JSON* as the standard format to exchange data between frontend and backend\
                    \n- *Swagger* as documentation to analyze backend APIs\
                    \n- *Jira* to manage project tasks and issues\
                    \n- *Windows* or *MacOS* as operating systems",
        },
        {
          type: "subtitle",
          value: "Workflow",
        },
        {
          type: "text",
          value:
            "We worked in 2-week sprints, and between each sprint we presented the completed work and decided which user stories to take for the next sprints.\
                    The stories could be created by teams analyzing upcoming components to implement, or by my team and me when we wanted to:\
                    \n- Perform a large refactor of the codebase\
                    \n- Update existing components\
                    \n\nWhen we completed a user story, we deployed it to the *dev* environment to test it internally. Then we deployed it to the *test* environment to allow the QA team to verify that all requirements were met without errors. If requirements were not met or issues were found, we fixed the problems and redeployed first to *dev* and then to *test*. We repeated this process until the user story fully met the requirements without bugs or errors.\
                    \nIn our workflow, we used three different environments: *dev*, *test*, and *prod*.\
                    \n- *dev* was used for developer testing and early validation of requirements\
                    \n- *test* was used as a stable pre-production environment for official demos when needed\
                    \n- *prod* was the final environment where the application was deployed and used by real customers",
        },
        {
          type: "subtitle",
          value: "Interaction with backend",
        },
        {
          type: "text",
          value:
            "We did not rely on a single backend server, but on multiple services, some of which were developed with Spring Boot (Java) and others with NodeJS (JavaScript).\
                    \nWhen we deployed new components or functionalities in the application, the required APIs could already exist or not.\
                    \nIn the first case, we used them directly and, if necessary, suggested improvements.\
                    \nIn the second case, we mocked server responses in the Redux store, shared the JSON structure of the mocked data with the backend team, and they implemented the APIs.",
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
            "Web application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it. Backend is down at the moment, only frontend is visible.",
        },
        {
          type: "subtitle",
          value: "Frontend Technologies",
        },
        {
          type: "text",
          value: "For the frontend these are the main technologies I used:",
        },
        {
          type: "text",
          value:
            "*React* as frontend,\n*Redux* to manage the store of application \n*Bootstrap* 5 to manage the graphics property of the application \n*Firebase* to deploy the application\n*Jest* to manage tests",
        },
        {
          type: "text",
          value:
            "I organized the architecture of the application in 6 main folders:",
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
          value: "For the backend these are the main technologies I used:",
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
        "As consultant I worked inside Stellantis (previous FCA) in an engineering team that manage the different tools used by other team in order to validate the autonomous driving algorithm. We worked together other teams that are in different part of the world.",
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
            "As a consultant, I worked at Stellantis (previously FCA) on a large project related to autonomous driving.",
        },
        {
          type: "subtitle",
          value: "What I did",
        },
        {
          type: "text",
          value:
            "I worked, using the AGILE methodology, within an engineering team that managed different tools used by other teams to validate autonomous driving algorithms. We collaborated with multiple teams located in different parts of the world.\
                    \nSome of our main activities were:\
                    \n- Customizing simulation software purchased by Stellantis according to specific requirements (using C++ for the core and C#/Unity for the GUI)\
                    \n- Implementing Docker images with specific tests and pushing them to a cluster, enabling other teams to run tests remotely\
                    \n- Implementing DAGs in Airflow (using Python) to manage pipeline tasks such as pushing KPIs to a database\
                    \n- Building Grafana dashboards to visualize simulation outputs\
                    \n- Defining upcoming features and tests to implement in the simulation tool together with other teams",
        },
        {
          type: "subtitle",
          value: "Methodology",
        },
        {
          type: "text",
          value:
            "We worked using AGILE SCRUM with 2-week sprints.\
                    \nWe not only took care of items added by our APO, but we also proposed items that helped us achieve our delivery goals.",
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
          value:
            "- *Ubuntu* (mainly)\
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
                    \n- *NDS and OpenDRIVE* map formats\
                    \n- *Online Google Sheets* (documents, spreadsheets, presentations)\
                    \n- *ROS*",
        },
      ]
      ,
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
            "In my fourth project, I developed a web application using React with Redux.\
      \nI worked in Agile mode (Scrum specifically) in a team composed mainly of 2 frontend developers, 2 functional analysts, 1 UI designer, 2 backend developers, and 1 Scrum Master.\
      \nI built a React application to collect and visualize multiple data points arriving asynchronously from various stations distributed across Italy.",
        },
        {
          type: "subtitle",
          value: "Languages Used",
        },
        {
          type: "text",
          value:
            "- *HTML*\
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
      \n- *Chrome, Firefox, Safari, and IE11* to test and modify components at runtime\
      \n- *Visual Studio Code* as the editor\
      \n- *Git* for the online repository\
      \n- *Jupyter Notebook* for Python code\
      \n- *MQTT* to connect with the server",
        },
        {
          type: "subtitle",
          value: "Libraries Used",
        },
        {
          type: "text",
          value:
            "We introduced only a few libraries to implement complex components.\
      \n- *LeafletJS* to implement an interactive map, one of the main components on the homepage\
      \n- *D3.js* to draw dynamic and custom SVGs\
      \n- *React Intl* to support multi-language functionality on the website",
        },
        {
          type: "subtitle",
          value: "What I Did",
        },
        {
          type: "text",
          value:
            "Here I describe the main components I developed during the project, without going into client-specific details.",
        },
        {
          type: "subtitle",
          value: "1) Interactive Map",
        },
        {
          type: "text",
          value:
            "One of the first components was a map centered on Italy. To build it, I used Leaflet JS.\
      \nI placed an icon on the map using geographic coordinates for each company station. When the user clicked an icon, a popup appeared showing station-related data, which updated in real time.\
      \nFrom the popup, the user could also navigate to the station's page by clicking the popup title.\
      \nLater, I added an image over Italy and another over Europe and North Africa to apply an opacity filter to all countries except Italy.\
      \nI restricted zooming and panning to focus user attention on Italy. Some objects disappeared when zooming in too much to keep only the stations visible.",
        },
        {
          type: "subtitle",
          value: "2) Server with NodeJS",
        },
        {
          type: "text",
          value:
            "When we started frontend development, we did not have a backend, so I created a local NodeJS server to send fake data to the frontend using GET requests (for basic station info) and a socket to send asynchronous data every second.",
        },
        {
          type: "subtitle",
          value: "3) SVG Graphics",
        },
        {
          type: "text",
          value:
            "Each station had different pages displaying data from the server. Some pages included graphics representing station components with data. I used D3.js to create SVG graphics that adapted to page dimensions without losing quality.\
      \nMany pages had similar drawing components. To avoid repeated code, I created a function for each component type that drew and customized it using a JSON configuration passed from the current page.",
        },
        {
          type: "subtitle",
          value: "4) Multi-language Support",
        },
        {
          type: "text",
          value:
            "I used React Intl to support English and Italian. I created two JSON files, one for Italian terms and one for English, assigning the same set of keys to the correct translation.\
      \nI then created a global function usable throughout the code: pass a key and the function returned the correct translation based on the language set in local storage.\
      \nWhen the user changed the language, I saved the new setting in session storage and the page reloaded to update the language.",
        },
        {
          type: "subtitle",
          value: "5) Redux-Saga",
        },
        {
          type: "text",
          value:
            "We used Redux-Saga to store data from the server.\
      \nWe received asynchronous data, and Redux prevented duplicate values for the same property. The centralized state made website management easier, and with a Chrome tool, we could monitor state evolution to simplify debugging.\
      \nRedux separated application data, so the frontend did not need to manage server connections but only use the data provided.\
      \nAll communication and data retrieval logic was implemented in Redux, keeping the code clean and maintainable.",
        },
        {
          type: "subtitle",
          value: "6) Building JSON Data",
        },
        {
          type: "text",
          value:
            "After deciding the best format to store data in our application, I created JSON files with random data using Python.\
      \nI used Python for two reasons:\
      \n- The data was not fully random but constrained within specific ranges\
      \n- I repeatedly manipulated these JSON files, saving time thanks to Python\
      \nWhen real data arrived from CSV files, I used Python to process them and build realistic JSON data for the backend so they knew the correct format for real data.",
        },
        {
          type: "subtitle",
          value: "7) Pure CSS Components",
        },
        {
          type: "text",
          value:
            "To improve performance, we avoided scripts when possible. For example, we used pure CSS accordions and toggles for filters.",
        },
        {
          type: "subtitle",
          value: "8) MQTT Connection",
        },
        {
          type: "text",
          value:
            "When the backend was ready, we first tried a socket connection, but backend technologies only supported MQTT communication. We then implemented an MQTT connection by subscribing our client to a topic where the server queued data.",
        },
        {
          type: "subtitle",
          value: "9) SVG Function Graphs",
        },
        {
          type: "text",
          value:
            "To draw the Cartesian graph of some complex functions, I used Python to calculate a set of points, then used them in React to render the function.\
      \nIn these graphs, I implemented two features:\
      \n- The ability to drag and zoom the graph in/out\
      \n- The ability to select a specific section and zoom into it",
        },
      ]

    },
    // Gazzetta dello Sport
    {
      title: "Accenture - Gazzetta dello Sport",
      description:
        "In my second project in Accenture I worked in a very big and interesting project. In this case the goal was the performances because the website is read by thousand and thousand of people.",
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
            "- *HTML*\
      \n- *CSS*\
      \n- *Sass*\
      \n- *ES6 JavaScript*",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *Gulp* for task automation\
      \n- *Docker* to create containers for running the project\
      \n- *Chrome* for testing and live editing components\
      \n- *Visual Studio Code* as the code editor\
      \n- *Galen* to test page layouts and responsive design\
      \n- *Jenkins* to manage deployments\
      \n- *Jira* to track tasks and issues\
      \n- *GitHub* for the online repository",
        },
        {
          type: "subtitle",
          value: "Architectures Used",
        },
        {
          type: "text",
          value:
            "- Partial use of the *Bulma* framework\
      \n- *SMACSS* and *BEM* to structure and name CSS classes consistently",
        },
        {
          type: "subtitle",
          value: "Implementation",
        },
        {
          type: "text",
          value:
            "This was a long and complex project, so I divided it into smaller sections based on the tasks I handled.\
      \nTasks were not executed sequentially; I often worked on multiple tasks in parallel. For example, I completed a few desktop pages, then a few mobile pages, and then returned to additional desktop pages.",
        },
        {
          type: "subtitle",
          value: "1) Desktop Pages",
        },
        {
          type: "text",
          value:
            "Initially, I collaborated with another developer to build the main desktop pages using HTML and Sass.\
      \nDuring development, we followed key guidelines:\
      \n- Write minimal code to keep the site lightweight\
      \n- Divide the site into reusable components with common CSS for scalability and maintainability\
      \n- Use general component names to allow reusability in different positions rather than position-specific names like 'top-media'\
      \n- Organize code architecture following SMACSS and BEM principles\
      \n- Ensure cross-browser compatibility and responsive design across Chrome, Firefox, Safari, IE11, and others",
        },
        {
          type: "subtitle",
          value: "2) Mobile Pages",
        },
        {
          type: "text",
          value:
            "After completing the desktop pages, I developed mobile pages using the same architecture. CSS was separated to improve performance, ensuring desktop users did not download unnecessary mobile styles.",
        },
        {
          type: "subtitle",
          value: "3) Testing with Galen",
        },
        {
          type: "text",
          value:
            "Once the first pages were completed, the client introduced Galen for layout testing.\
      \nI took responsibility for learning and applying Galen. Although it was straightforward for basic tests, implementing more advanced tests was challenging due to limited documentation and examples online.\
      \nI leveraged my problem-solving skills to develop creative solutions for advanced tests using simple code. The goal was to create a standardized testing approach usable by anyone for quick testing of current and future project pages.\
      \nI used a combination of Galen syntax and JavaScript for key test scripts. A detailed guide documenting problems and solutions will be shared once sensitive data is removed.",
        },
        {
          type: "subtitle",
          value: "4) Integration with JavaScript",
        },
        {
          type: "text",
          value:
            "After the HTML and CSS structure was complete, other developers implemented JavaScript components to make the site fully functional.\
      \nI collaborated with them to identify optimal JavaScript solutions, adding attributes like data-targets, new classes, or transitions in HTML or CSS when needed.\
      \nI also developed some complex JavaScript components, including a custom scrollbar.",
        },
        {
          type: "subtitle",
          value: "5) Optimizations",
        },
        {
          type: "text",
          value:
            "Beyond CSS and HTML best practices, we adopted additional strategies to improve website speed:\
      \n- Used a script orchestrator to control loading order of JavaScript files\
      \n- Inlined CSS for above-the-fold content to reduce initial page load time",
        },
        {
          type: "subtitle",
          value: "6) Compatibility and Bug Fixing",
        },
        {
          type: "text",
          value:
            "To ensure cross-browser compatibility and resolve various bugs, I inspected code using all major browsers (Chrome, Firefox, Safari, Edge, IE11) and tested on different devices using virtual machines for Windows and emulators for Android and Safari.",
        },
        {
          type: "subtitle",
          value: "Conclusion",
        },
        {
          type: "text",
          value:
            "This project was a valuable experience from which I learned a lot.\
      \nI gained a deeper understanding of how to write and organize HTML, CSS, and JavaScript for high-performance, maintainable websites.",
        },
      ]
      ,
    },
    // Static Website for Financial Client - Accenture
    {
      title: "Accenture - Static Website for Financial Client",
      description:
        "I contributed to an ongoing project, developing several components for the website of a major client in the financial sector. The website was structured using a “molecules” approach, and each component was designed to be fully responsive, functioning seamlessly on both desktop and mobile devices.",
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
            "In my third project at Accenture, I joined an ongoing initiative and contributed to the website of a major client in the financial sector.\
      \nThe website was structured using a “molecules” approach, and each molecule was implemented to be fully responsive, working seamlessly on both desktop and mobile devices.\
      \nThis project involved a very large team, and one of the main challenges was coordinating with so many people. Often, when I addressed bugs, they were not issues I could fix directly, so I had to identify the appropriate team (backend, maintenance, or integration), explain the problem, and follow the resolution process until the bug was fully resolved."
        },
        {
          type: "subtitle",
          value: "Languages Used"
        },
        {
          type: "text",
          value:
            "- *HTML*\
      \n- *CSS*\
      \n- *Sass*\
      \n- *ES6 JavaScript*"
        },
        {
          type: "subtitle",
          value: "Technologies Used"
        },
        {
          type: "text",
          value:
            "- *Gulp*\
      \n- *Chrome, Firefox, Safari, and IE11* for runtime testing and component debugging\
      \n- *Visual Studio Code* as IDE\
      \n- *Git* for online repository management\
      \n- *Webpack* for script bundling"
        },
        {
          type: "subtitle",
          value: "Libraries Used"
        },
        {
          type: "text",
          value:
            "The project did not require extremely high performance, so we used a few libraries to accelerate development:\
      \n- *Swiper* for implementing carousels\
      \n- *Plyr* for a simple, accessible, and customizable media player for YouTube and Vimeo"
        },
        {
          type: "subtitle",
          value: "Key Contributions"
        },
        {
          type: "text",
          value:
            "Below are the main features and components I developed during the project."
        },
        {
          type: "subtitle",
          value: "1) Carousel and Video"
        },
        {
          type: "text",
          value:
            "I developed the HTML, CSS, and JavaScript for a carousel using Swiper. I added a listener to automatically loop the carousel images when the user was inactive and pause when the mouse hovered over it.\
      \nUsing Plyr, I created a custom component to embed videos from YouTube or Vimeo, with optional autoplay and muted mode.\
      \nI also integrated Plyr within the carousel so that videos in slides would start muted automatically when active and stop when the slide changed.\
      \nLater, I updated the hero carousel to be used in the middle of pages within other molecules, adapting it to work without filling the full screen."
        },
        {
          type: "subtitle",
          value: "2) JavaScript Optimization"
        },
        {
          type: "text",
          value:
            "I joined the project near its final delivery, where most work was already done. The JavaScript code was written by multiple developers without using classes or try-catch blocks, which caused errors to halt execution because Gulp combined all scripts into a single file.\
      \nTo address this, I worked with another developer to:\
      \n- Organize scripts into classes and instantiate each within separate try-catch blocks to prevent one broken component from stopping others.\
      \n- Replace Gulp with Webpack, making scripts more modular, independent, and the code more robust."
        },
        {
          type: "subtitle",
          value: "3) Autocomplete"
        },
        {
          type: "text",
          value:
            "I developed a search bar in the header, toggleable via a button, with autocomplete functionality. A listener triggered a fetch request to the server whenever the user typed or deleted characters. Successful responses generated a suggestion list.\
      \nUser interactions included:\
      \n- Pressing Enter to execute the search and redirect to a results page.\
      \n- Pressing the exit button to clear and hide the search bar.\
      \n- Selecting suggestions with the mouse or keyboard navigation (arrows + Enter)."
        },
        {
          type: "subtitle",
          value: "4) Search Page"
        },
        {
          type: "text",
          value:
            "Once the user confirmed a search query, it was saved in local storage, and the user was redirected to the search results page.\
      \nOn this page, I implemented a fetch to the server using a REST API (POST with JSON payload) and displayed the results.\
      \nThe results list layout was complex, consisting of three different sublists with distinct graphical structures. Each field displayed different parameters based on the JSON received from the client.\
      \nAs with the rest of the site, the page was fully responsive and optimized for both desktop and mobile.\
      \nI relied heavily on Flexbox for layout adaptation and only used mixins where absolutely necessary to minimize CSS code."
        }
      ]
      ,
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
