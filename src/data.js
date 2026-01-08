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
    "Hi, I'm Angelo and I live in the heart of the Alps, in Sondrio (north of Milan), Italy. I'm passionate about programming and I'm always looking for new challenges to learn and improve my skills. I’m a very active and motivated person. My best qualities are determination and sincerity. As for my flaws... well, maybe it's better not to list them in a résumé.",
    "I'm passionate about AI and I actively use and test different tools to speed up and improve my work.",
    "In my free time, I enjoy experimenting with and trying out new technologies by developing full-stack web applications. Below you can find more details about my work experience and projects!",
    "My other hobbies include traveling, reading books, board games, video games, and sports.",
    "I hold both category B and A driving licenses."
  ],
};

export const whoIam = {
  paragraphs: [
    "I’m a passionate software engineer focused on problem solving and building pragmatic solutions to real client needs.",
    "I’ve worked with both large companies and early-stage startups, collaborating within teams as well as delivering projects end-to-end independently.",
    "I’m used to working directly with clients, understanding real business needs, and turning them into reliable, working software.",
    "I’m comfortable across the full stack and quick to learn new technologies, also leveraging modern AI tools to work more efficiently.",
    "I value clear and direct communication with my clients. I want them to fully understand how I plan to solve their problems, and I’m always honest if there’s something I don’t know at the moment.",
  ],
}

export const home = {
  title: ["Hire a", "Software Engineer", "in less than 24 hours"],
  subtitle: "I'm the right person for you if:",
  paragraphs: [
    "You need a web developer to join your team.",
    "You want to improve your website or application with new features or fix existing ones.",
    "You need someone to develop all software for your startup from scratch.",
    "You want a consultant to validate your idea or project before starting development.",
    "You’re not sure which technologies or type of developer your project requires.",
    "You want to propose a collaboration.",
  ],
  footerText: "Don’t waste time — contact me and let’s build something great together!",
  caption: "I don’t count working hours, I count goals achieved",
  ctas: {
    lookPlans: "View my plans",
    speakGoals: "Talk about your goals",
  },
}


export const prices = {
  title: "My Plans",
  subtitle: "Choose the plan that best fits your needs.",
  footerText: "If you have special requirements or requests, contact me and I’ll create a custom plan for you!",
  ctaBookPlan: "Book this plan",
  ctaMoreDetails: "More details",
  plans: [{
    title: "€ 750",
    description: "Ideal for small tasks or for having a developer available for a short period of time.",
    included: [
      "I work on one of your projects for one week",
      "If you're not satisfied, you'll receive a 100% refund",
      "You can contact me anytime for support"
    ],
    footer: "For small developments",
    type: "WEEKLY",
    icon: weeklyIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How does it work?",
      },
      {
        type: "text",
        value: "With this plan, you \"rent\" me for one week to work on one of your projects, without wasting time on contracts or bureaucracy. Just book a call and I can start as soon as the next day.\
        \nThis plan is ideal for small tasks or to test working together before starting a longer collaboration."
      },
      {
        type: "subtitle",
        value: "Advantages",
      },
      {
        type: "text",
        value: "- You can have a developer available in less than 24 hours\
        \n- I don’t waste time tracking hours; I focus on results and keep you regularly updated\
        \n- You pay only for the time you need, with no long-term contracts\
        \n- You know the total cost upfront\
        \n- If you're not satisfied, I’ll refund the full cost of the week"
      }
    ],
  },
  {
    title: "€ 2500",
    description: "Ideal for medium to large projects where you need a full-time developer for a month.",
    included: [
      "I work on one of your projects for one month",
      "If you're not satisfied, you'll receive a 100% refund",
      "You can contact me anytime for support"
    ],
    footer: "Most popular",
    type: "MONTHLY",
    icon: monthlyIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How does it work?",
      },
      {
        type: "text",
        value: "With this plan, you \"rent\" me for one month to work on one of your projects, without wasting time on contracts or bureaucracy. Book a call and I can start as soon as the next day.\
        \nThis plan is ideal if you need a developer to work closely with you or your team for one or more months, without long-term commitments."
      },
      {
        type: "subtitle",
        value: "Advantages",
      },
      {
        type: "text",
        value: "- You can have a developer available in less than 24 hours\
        \n- I focus on outcomes, not on counting hours, and provide regular progress updates\
        \n- You can stop whenever you no longer need me, with no long-term contracts\
        \n- You know the total cost upfront\
        \n- If you’re not satisfied, you can stop after the first week and receive a refund for that week"
      }
    ],
  },
  {
    title: "Custom",
    description: "If you have special requirements or requests, contact me and I’ll create a tailored plan for you.",
    included: [
      "A custom plan based on your specific needs",
      "You can contact me anytime for support"
    ],
    footer: "Let's create your plan",
    type: "CUSTOM",
    icon: customIcon,
    longtext: [
      {
        type: "subtitle",
        value: "How does it work?",
      },
      {
        type: "text",
        value: "Choose this plan if you’re not sure how much time you’ll need or if you have specific requirements.\
        \nContact me and we’ll discuss your needs in detail. I’ll then create a custom plan tailored to your situation.\
        \nIn some cases, I may offer a discount or adjust the price depending on the context."
      },
      {
        type: "subtitle",
        value: "When this plan is useful",
      },
      {
        type: "text",
        value: "- If you're a startup with a limited budget, we can combine a discount with equity\
        \n- If you need a developer for a long period of time (more than 3 months), I can offer a discounted rate\
        \n- If you need ongoing maintenance that requires only a few hours per week or month\
        \n- If you need your solution delivered in a very short time, the price may increase to prioritize your project"
      }
    ],
  },
  {
    title: "€ 45",
    description: "Ideal for small tasks or for having a developer or consultant available for a short time.",
    included: [
      "Suitable when you need to track hours",
      "You can contact me anytime for support",
      "I regularly fill in your timesheets"
    ],
    footer: "When you need to track hours",
    type: "HOURLY",
    icon: hourlyIcon,
    longtext: [
      {
        type: "text",
        value: "In general, I prefer not to work on an hourly basis. In my experience, it often leads to inefficiencies on both sides and makes it harder to predict costs upfront. However, in some specific cases, it can be the right approach."
      },
      {
        type: "subtitle",
        value: "When to use this plan",
      },
      {
        type: "text",
        value: "- For very small tasks that can be completed in a few hours\
        \n- For consulting or strategy meetings\
        \n- When you need to track hours for internal or administrative processes"
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
  generatePdf: "Download PDF",
  menuOpen: "Open menu",
  menuClose: "Close menu",
};

export const footer = {
  center: "Website built with React",
  center2: "and love",
};

export const contacts = {
  title: "Contact Me 😃",
  subtitle:
    "If none of the available time slots work for you, feel free to reach out through my other contacts and I’ll get back to you as soon as possible!",
  bookACall: "Book a call",
  calendarLink: "https://calendar.app.google/dcnshtZYNqVt4KQx6",
};

export const form = {
  useModule: "Get in touch using the form below",
  leaveMessage: "Leave a message",
  thanks: "Thanks for reaching out! I’ll get back to you as soon as possible.",
  backToTop: "Back to top",
  send: "Send message",
};

export const career = {
  title: "Career and Education",
  schools: [
    {
      title: "State Examination for Information Engineering",
      where: "Politecnico di Milano, Italy",
      description: "Successfully passed the state examination required to practice as a professional engineer.",
      when: "2025",
    },
    {
      title: "Master’s Degree in Computer Science and Engineering",
      where: "Politecnico di Milano, Italy",
      description:
        "Download full details about my academic path and the courses I studied here: ",
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
      title: "Bachelor’s Degree in Computer Science and Engineering",
      where: "Politecnico di Milano, Italy",
      description:
        "Download full details about my academic path and the courses I studied here: ",
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
      title: "High School Diploma in Computer Science",
      where: "ITIS Enea Mattei, Sondrio (Italy)",
      when: "2008 - 2013",
    },
  ],
  jobs: [
    {
      title: "Software Engineer",
      company: "Freelance",
      link: "https://www.linkedin.com/in/angelo-falci-1292ab76/",
      description:
        "I work as a freelance software engineer, developing full-stack web applications for both large companies and startups. Beyond development, I help clients refine their ideas and choose the most suitable technologies and architectures based on their needs. On some projects, I also coordinated internal teams.",
      whereAndWhen: "Remote, 04/2025 - Present",
    },
    {
      title: "Senior Frontend Developer",
      company: "DeltaTre",
      link: "https://www.deltatre.com/",
      description:
        "I worked on the Diva project, a custom video player with many advanced features. The main technologies I used include React, Vanilla JavaScript, TypeScript, RxJS, Node.js, Storybook, Webpack, and Babel.",
      whereAndWhen: "Remote, 09/2022 - 04/2025",
    },
    {
      title: "Senior Full-Stack Developer",
      company: "TeamSystem",
      link: "https://www.teamsystems.com/",
      description:
        "I mainly worked with React and Redux to maintain and enhance the Digitalbox application. I also collaborated with backend developers to update features and fix bugs in APIs written in Node.js or Java (Spring Boot).",
      whereAndWhen: "Remote, 10/2021 - 09/2022",
    },
    {
      title: "Autonomous Driving Software Engineer",
      company: "Consultant at Stellantis",
      link: "https://www.stellantis.com/",
      description:
        "As a Netcom Group consultant, I was responsible for maintaining and developing various tools used to validate autonomous driving software. Together with my team, we also researched and tested new methodologies and tools to improve the Stellantis toolchain.",
      whereAndWhen: "Turin, Italy, 02/2020 - 10/2021",
    },
    {
      title: "Autonomous Driving Software Engineer",
      company: "Consultant at Stellantis",
      link: "https://www.stellantis.com/",
      description:
        "As a Netcom Group consultant, I focused on integrating multiple tools into the Stellantis ecosystem to build a toolchain capable of validating autonomous driving software.",
      whereAndWhen: "Munich, Germany, 10/2019 - 02/2020",
    },
    {
      title: "Frontend Developer",
      company: "Accenture",
      link: "https://www.accenture.com/",
      description:
        "I worked as a frontend developer designing and building high-performance, responsive websites for major clients, using technologies such as React, Redux, ES6 JavaScript, HTML, CSS, Docker, and others.",
      whereAndWhen: "Milan, Italy, 11/2018 - 10/2019",
    },
    {
      title: "IoT Developer",
      company: "JOL Laboratory, TIM",
      description:
        "For my thesis, I worked within a team on a European research project focused on developing an Android application to communicate with and collect data from multiple smart devices (see the Projects section for more details).",
      whereAndWhen: "Milan, Italy, 05/2018 - 09/2018",
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
      description: "I designed and developed a full-stack application to manage a fleet of different robots and their complex missions.\
  \nThe platform is used in healthcare and hospitality laboratories to automate various tasks using robots.",
      links: [
        {
          label: "Smanno - Official Website",
          url: "https://www.smanno.com/",
          icon: externalLinkIcon,
        }
      ],
      mainSkills: ['Django', 'Docker', 'MySQL', 'React'],
      allSkills: ['Bootstrap 5', "Copilot", 'CSS', 'Django', 'Docker', 'HTML', 'JavaScript', 'Linux', 'MobilePlanner', 'MySQL', 'Python', 'React', 'Redux', 'Swagger', 'TMflow', 'VS Code', 'Windows'],
      longtext: [
        {
          type: "text",
          value: "Smanno is a three-person startup (including myself) that develops robots and a software platform for healthcare and hospitality laboratories.\
      \nThe founder of Smanno was mainly responsible for business development and client relationships, while the CTO focused on the hardware development of the robots.\
      \nI was responsible for the development of the entire software platform and its deployment in client environments."
        },
        {
          type: "text",
          value: "I designed the platform to be as flexible as possible, allowing it to manage different types of robots and missions without changing the codebase. To achieve this, I abstracted everything into two core entities: Actors (robots and other machines or locations interacting with robots) and Missions (the tasks that robots need to perform).\
      \nThe platform is divided into two main parts: a backend developed with Django and a frontend developed with React."
        },
        {
          type: "subtitle",
          value: "Backend - Django",
        },
        {
          type: "text",
          value: "I developed the backend using Django with MySQL as the database. The main features implemented include:\
      \n- Database architecture to manage robots, missions, and platform users\
      \n- REST APIs for the frontend with permission and role-based access control\
      \n- Asynchronous processes to monitor the status of robots connected to the platform\
      \n- Integration with third-party services and libraries to communicate with different robot systems\
      \n- An admin interface to directly access the database, including advanced features such as data import/export and fast inline editing\
      \n- Custom Django management commands to simplify installation and platform management\
      \n- Swagger documentation for all implemented REST APIs\
      \n- Technical documentation for installing and maintaining the platform\
      \n- Docker Compose setup to run the database, backend, and frontend with a single command\
      \n- WebSocket services to provide real-time updates in the frontend dashboard for robot and mission statuses"
        },
        {
          type: "subtitle",
          value: "Frontend - React",
        },
        {
          type: "text",
          value: "I developed the frontend using React and Bootstrap 5 as a UI library, as no custom design was initially provided. Platform capabilities depend on user roles and permissions, such as admin, editor, executor, and viewer.\
      \nThe main features implemented include:\
      \n- Responsive UI for both mobile and desktop, allowing hospital staff to access the platform from any device\
      \n- Creation of complex missions composed of multiple steps, using actors and atomic missions stored in the database (atomic missions represent the smallest executable robot actions, such as moving to a position or performing a specific arm movement)\
      \n- Ability to encapsulate and reuse complex missions in other workflows, with the option to enable or disable individual steps\
      \n- Execution and monitoring of missions, with detailed feedback in case of failures\
      \n- Ability to stop and resume missions when needed\
      \n- Access to statistics on mission execution and robot performance"
        },
        {
          type: "subtitle",
          value: "Deployment",
        },
        {
          type: "text",
          value: "The application is installed on client servers (for example, hospitals) and runs on devices connected to the same network.\
      \nTo simplify deployment, I created a Docker Compose setup to run the database, backend, and frontend in three separate containers with a single command. This also made onboarding easier for other team members.\
      \nFor clients, I built a script that exports the Docker images and generates additional scripts to automate import and execution on client servers with a single command, supporting both Linux and Windows environments.\
      \nAll required assets are packaged into an output folder that can be copied directly to the client server and executed.\
      \nThis setup can be further improved in the future based on client needs."
        }
      ],
    },
    // One TCG Hero
    {
      title: "One TCG Hero",
      description: "I developed a React-based PWA and deployed it on Firebase to manage my personal trading card game collection. I added, and in some cases improved, several useful features that I found scattered across different websites, bringing them together in a single platform.",
      links: [{
        label: "One TCG Hero - Official Website",
        url: 'https://onetcghero.web.app/',
        icon: externalLinkIcon,
      }],
      mainSkills: ['Lovable', 'React', 'Copilot', 'Firebase'],
      allSkills: ["CSS", "Firestore", "GitHub", "HTML", "JavaScript", "Redux", "Vite", "VS Code"],
      longtext: [
        {
          type: "text",
          value: "I developed a React PWA to manage my personal trading card game collection. I added, and in some cases improved, several useful features inspired by other platforms but not available all in one place.\
      \nFor experimentation and learning purposes, I initially started the project using Lovable. I later stopped using it, but continued to heavily leverage AI tools, writing code manually only when strictly necessary to better understand the real limits of this new development approach.\
      \nI frequently created GitHub issues with detailed technical requirements and assigned them to Copilot to generate code, which I then reviewed and adapted to fit my needs."
        },
        {
          type: "subtitle",
          value: "Features implemented",
        },
        {
          type: "text",
          value: "Here is a list of the main features implemented in the application:\
      \n- Fully responsive UI for mobile and desktop, with support for both light and dark modes\
      \n- User authentication via Firebase Auth using email and password\
      \n- Advanced filtering to quickly find specific cards or card sets\
      \n- Collection management with the ability to add cards manually or import lists, including automatic merging when needed\
      \n- Deck creation and management, with detailed statistics such as card count, rarity distribution, and cost curve\
      \n- Import and export of decks in multiple formats compatible with external platforms (e.g. simulators or CardMarket)\
      \n- Printing of cards with customizable layouts and number of cards per page\
      \n- Optional Firestore persistence (enabled by me) to sync collections and decks across multiple devices",
        },
      ],
    },
    // Gut
    {
      title: "GUT",
      description: "I built a Spotify-like PWA with a mobile-first UI where users can watch music videos and support their favorite artists through donations.\
  \nI also developed a custom CMS to manage the platform’s content and contributed to the backend development.",
      links: [{
        label: "GUT - Official Website",
        url: 'https://gutmusic.media/',
        icon: externalLinkIcon,
      }],
      mainSkills: ['Mux', 'NodeJS', 'React', 'Stripe', 'TypeScript'],
      allSkills: ["Copilot", 'CSS', 'HTML', 'JavaScript', 'Mux', 'NodeJS', 'Panda', 'React', 'Redux', 'Stripe', 'Swagger', 'TypeScript', 'Vite', 'VS Code'],
      longtext: [
        {
          type: "text",
          value: "GUT is a startup operating in the music industry.\
      \nMy contribution was not limited to a single area: I worked across the entire platform, also proposing new features and improvements based on the product vision shared by the team.\
      \nThe work was divided into three main projects: a React PWA, a React-based CMS, and a backend built with Node.js and Express.\
      \nWe followed agile methodologies within a team of six people: three internal members and three external collaborators (including myself). I was responsible for the architecture of both the PWA and the CMS and developed most of the functionality with the support of another freelance developer.\
      \nI also collaborated on backend development together with one of the startup’s founders.\
      \nBelow are the details of each of the three main projects."
        },
        {
          type: "subtitle",
          value: "Frontend - PWA in React",
        },
        {
          type: "text",
          value: "I built a single-page application using React, TypeScript, and Vite as the build tool. The key features of the PWA include:\
      \n- Mobile-first design with a responsive UI implemented using CSS and Panda Styled Components\
      \n- Video streaming via the Mux SDK, allowing artists to upload music videos with real-time upload progress\
      \n- Payment system powered by Stripe, supporting artist subscriptions and virtual token purchases\
      \n- Performance optimizations such as lazy loading and aggressive caching strategies to reduce backend calls\
      \n- Install prompt to allow users to add the PWA to their mobile devices"
        },
        {
          type: "subtitle",
          value: "Frontend - CMS in React",
        },
        {
          type: "text",
          value: "I developed a content management system (CMS) using React, TypeScript, and Vite to ensure architectural consistency and long-term maintainability.\
      \nThe CMS is organized into macro sections representing the platform’s core entities: Users, Content, Collections, Auditions, and Tags.\
      \nEach section includes:\
      \n- A table view with pagination, search, and filtering capabilities\
      \n- A detail view to inspect, edit, or create new entities\
      \nCaching strategies were also applied to minimize expensive backend requests."
        },
        {
          type: "subtitle",
          value: "Backend - NodeJS and Express",
        },
        {
          type: "text",
          value: "One of the founders was primarily responsible for backend development using Node.js and Express, with PostgreSQL as the main database and Redis for caching.\
      \nI collaborated with him to:\
      \n- Design parts of the database schema\
      \n- Implement caching strategies using Redis\
      \n- Develop REST APIs consumed by both the PWA and the CMS\
      \n- Perform security reviews to protect against common vulnerabilities and prevent sensitive data leakage\
      \n- Create Swagger documentation for all implemented APIs\
      \n- Debug and fix issues discovered during the development of the PWA and CMS"
        }
      ],
    },
    // Curriculum online
    {
      title: "Portfolio Online",
      description:
        "I created this online portfolio to showcase my skills and professional experience.\
        \nI used React with TypeScript and styled-components, and deployed it on Firebase using a custom domain.",
      links: [
        {
          label: "Website",
          url: "https://angelofalci.com",
          icon: externalLinkIcon,
        },
        {
          label: "GitHub",
          url: "https://github.com/FAngelo94/FAngelo94.github.io",
          icon: githubIcon,
        },
      ],
      mainSkills: ["Firebase", "React", "Styled-components", "TypeScript"],
      allSkills: [
        "Firebase",
        "gh-pages",
        "GitHub Pages",
        "GitHub",
        "React",
        "Styled-components",
        "TypeScript",
      ],
      longtext: [
        {
          type: "text",
          value:
            "Starting from an online template, I built this portfolio by improving the codebase, adding new components, and implementing multilingual support in Italian and English.\
        \nIn an earlier version, the portfolio was deployed using GitHub Pages, but I later migrated to Firebase Hosting with a custom domain to gain more control and flexibility.",
        },
        {
          type: "subtitle",
          value: "Technologies and Libraries Used",
        },
        {
          type: "text",
          value:
            "- *React* as the main framework\
                \n- *TypeScript* as the programming language\
                \n- *styled-components* for styling and theming\
                \n- *GitHub* for version control\
                \n- *Firebase* for hosting\
                \n- *jsPDF* and *html2canvas* to generate a simplified PDF version of the portfolio",
        },
      ],
    },
    // Kangury
    {
      title: "Startup - Kangury",
      description:
        "I developed a full-stack application using React for the frontend and Django for the backend.\
    \nKangury allows users to purchase photos and associate them with albums containing their own photos or videos.\
    \nVisit the website to learn more!",
      links: [
        {
          label: "Kangury - Official Website",
          url: "https://www.kangury.it/",
          icon: kanguryLogo,
        },
      ],
      mainSkills: ["Bootstrap 5", "Django", "MySQL", "React"],
      allSkills: [
        "Amazon AWS",
        "Bootstrap 5",
        "Copilot",
        "CSS",
        "Django",
        "Firebase",
        "GitHub",
        "HTML",
        "JavaScript",
        "MySQL",
        "PayPal",
        "Python",
        "PythonAnywhere",
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
            "I developed the application available at the link above. Users can purchase photography-related products and customize or print their photos in various formats.\
        \nAfter purchasing a photo, users can associate it with an album where they can upload their own photos or videos.\
        \nIf you’re interested in collaborating on this startup, feel free to contact me—I can also provide a discount code!",
        },
        {
          type: "subtitle",
          value: "Introduction",
        },
        {
          type: "text",
          value:
            "I chose the following technologies for three main reasons:\
        \n- I was already familiar with them, allowing me to develop the application quickly\
        \n- I knew reliable services to deploy the application rapidly with low or zero initial costs\
        \n- They are stable, widely adopted technologies with strong communities for long-term support",
        },
        {
          type: "subtitle",
          value: "PWA in React",
        },
        {
          type: "text",
          value:
            "Key features of the web application include:\
      \n- Bootstrap 5 with customized SASS to create a maintainable theme and speed up development in the absence of a dedicated UI designer\
      \n- Redux for global state management\
      \n- Firebase deployment with separate production and test environments to safely validate changes before release\
      \n- Advanced photo editor allowing users to crop and rotate images\
      \n- Google Analytics to track user behavior within the application\
      \n- Swiper for interactive carousels across the platform"
        },
        {
          type: "subtitle",
          value: "Backend in Django",
        },
        {
          type: "text",
          value:
            "The backend was developed using Django with a MySQL database, with all APIs documented using Swagger.\
      \nUser-uploaded photos and videos are stored in an Amazon AWS S3 bucket.",
        },
      ],
    },
    // Digitalpix
    {
      title: "Personal Project - Digitalpix",
      description:
        "I developed a Progressive Web App in React, along with a mobile store application for iOS and Android, to customize and purchase professional photos.",
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
        "JavaScript",
        "HTML",
        "CSS",
        "VS Code",
        "Firebase",
        "Swagger",
      ],
      longtext: [
        {
          type: "text",
          value:
            "I developed the application available at the links above. Users can purchase photography-related products and customize or print their photos in different formats.",
        },
        {
          type: "subtitle",
          value: "Problem Analysis",
        },
        {
          type: "text",
          value:
            "My first task was to identify the most suitable technologies to meet Digitalpix’s needs: a web application optimized for mobile usage and a mobile app available on both the Google Play Store and the Apple App Store.\
        \nGiven the limited budget and the fact that I was working alone, I decided to first build a Progressive Web App (PWA) using React, and then create a mobile application in React Native embedding the PWA inside a WebView.\
        \nThis approach allowed me to share the same codebase between web and mobile, while avoiding frequent app store submissions for updates—significantly reducing deployment time and long-term maintenance costs.",
        },
        {
          type: "subtitle",
          value: "Web App in React",
        },
        {
          type: "text",
          value:
            "Key features of the web application include:\
      \n- Bootstrap 5 with customized SASS to create a maintainable theme and accelerate development without a UI designer\
      \n- Redux for application state management\
      \n- Firebase deployment with separate production and test environments\
      \n- Advanced photo editor with cropping and rotation features\
      \n- Google Analytics to track user behavior\
      \n- Swiper for interactive carousels throughout the application"
        },
        {
          type: "subtitle",
          value: "Mobile App in React Native",
        },
        {
          type: "text",
          value:
            "To publish the application on mobile stores, I developed a React Native app embedding the web application inside a WebView.\
      \nThis approach allowed full code reuse between web and mobile, while drastically reducing deployment time and update complexity.\
      \nConsidering I worked alone and only in my free time, this solution provided the best balance between quality and delivery speed.",
        },
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value:
            "During the project, I proposed several improvements to Digitalpix’s software architecture to address issues identified during development.\
      \nThe main suggestions included:\
      \n- Creating comprehensive Swagger documentation for all APIs to clarify request and response structures\
      \n- Centralizing all internal software solutions in a dedicated GitHub organization to ensure version control, traceability, and reliable backups"
        },
      ],
    },
    // ClimberWorld
    {
      title: "Personal Project - Climberworld Web App",
      description:
        "A web application I developed as a full-stack project, using React for the frontend and Flask (Python framework) for the backend. The goal of this platform is to collect and organize information about alpine refuges, excursions, and climbing gyms across the Alps.\
            \n(Note: the backend is no longer online, so data is not currently visible)",
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
            "I worked on this application in my free time to continuously improve my skills, reinforce existing knowledge, and experiment with new technologies.\
            \nI developed both the frontend and the backend.",
        },
        {
          type: "subtitle",
          value: "Frontend",
        },
        {
          type: "text",
          value:
            "For the frontend, these are the main technologies I used:\
                    \n- *React* as the frontend framework\
                    \n- *Redux* to manage the application state\
                    \n- *styled-components* to manage styling\
                    \n- *Firebase* to deploy the application",
        },
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value:
            "For the backend, these are the main technologies I used:\
                    \n- *Flask*, a micro-framework developed in Python\
                    \n- *MySQL* to manage the database, since the application data is highly structured\
                    \n- *phpMyAdmin Docker image* used locally to explore and manage the database through a UI\
                    \n- *Docker* and *docker-compose* to easily develop the backend locally, running three containers (Flask, MySQL, and phpMyAdmin)\
                    \n- *Swagger* to create well-documented APIs\
                    \n- *PythonAnywhere* to deploy the application\
                    \n- *Marshmallow*, *SQLAlchemy*, and *Connexion* to simplify database modeling and API management",
        },
        {
          type: "subtitle",
          value: "Other Technologies / Tools",
        },
        {
          type: "text",
          value:
            "- *Git*\
                    \n- *Visual Studio Code*",
        },
      ],
    },
    // Diva
    {
      title: "Diva - Custom Video Player",
      description:
        "A custom video player with advanced features, designed to be integrated into multiple platforms (web, TV, mobile, etc.).\
        The project is developed as a library divided into multiple packages, each targeting a specific platform where Diva is used (web, mobile, TV, and more).",
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
            "I worked as a frontend developer on the Diva project using Agile methodologies, improving existing features and developing new ones.",
        },
        {
          type: "subtitle",
          value: "Project Description",
        },
        {
          type: "text",
          value:
            "Diva is a video player library sold by DeltaTre to multiple clients, who integrated it into their streaming platforms.\
                    \nThe project is structured into different packages, dedicated to:\
                    \n- Shared functionalities reused across multiple packages\
                    \n- Specific components or groups of components that can be used standalone, sold independently, or integrated into larger packages",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as the frontend framework (with *Typescript* and *SCSS*)\
                    \n- *Typescript* to define shared data structures and catch errors at compile time\
                    \n- *RXjs* to simplify the management of asynchronous and event-based logic caused by video streaming\
                    \n- *SCSS* to manage component styles and maintain a scalable architecture\
                    \n- *Storybook.js* to document and showcase shared components used across packages\
                    \n- *Git* as the version control system\
                    \n- *VS Code* as the IDE\
                    \n- *Yarn* to run and build different parts of Diva\
                    \n- *Jest* for unit testing\
                    \n- *JSON* as the standard format for frontend-backend data exchange\
                    \n- *Jira* for task and issue tracking\
                    \n- *Windows* or *macOS* as operating systems",
        },
        {
          type: "subtitle",
          value: "Workflow",
        },
        {
          type: "text",
          value:
            "We worked in 2-week sprints. At the end of each sprint, we reviewed completed work and selected user stories for the next iteration.\
                      User stories were created either by analyzing upcoming features or proactively by my team when we needed to:\
                      \n- Perform major refactors of the codebase\
                      \n- Improve or extend existing components\
                      \n\nOnce a user story was completed, it was deployed to the *dev* environment for internal testing, then to the *test* environment for QA validation. If issues were found, we fixed them and redeployed to *dev* and *test* until all requirements were fully met.\
                      \nOur workflow included three environments: *dev*, *test*, and *prod*.\
                      \n- *dev* for early validation and developer testing\
                      \n- *test* as a stable pre-production environment\
                      \n- *prod* as the final environment used by end customers",
        },
      ],
    },
    // Digital Box
    {
      title: "TeamSystem - Digital Box",
      description:
        "A web application designed for professional firms to streamline information sharing, strengthen relationships with their customers, and enable real-time data exchange.",
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
            "I worked as a frontend developer on the Digital Box application using Agile methodologies, improving existing features, implementing new ones, fixing bugs, and refactoring legacy components to improve readability and performance.",
        },
        {
          type: "subtitle",
          value: "Technologies Used",
        },
        {
          type: "text",
          value:
            "- *React* as the frontend framework (with *JavaScript* and *HTML*)\
                    \n- *Redux* for state management\
                    \n- *CSS* to style internally developed components\
                    \n- *Jest* for unit testing\
                    \n- *Cypress* for integration testing\
                    \n- *Storybook.js* to document shared UI components\
                    \n- *Git* as the version control system\
                    \n- *Python* to automate development-related tasks\
                    \n- *Docker* to run backend services locally\
                    \n- *VS Code* as the IDE\
                    \n- *JSON* as the standard data exchange format\
                    \n- *Swagger* to analyze and understand backend APIs\
                    \n- *Jira* for task and issue tracking\
                    \n- *Windows* or *macOS* as operating systems",
        },
        {
          type: "subtitle",
          value: "Workflow",
        },
        {
          type: "text",
          value:
            "We worked in 2-week sprints. At the end of each sprint, we reviewed completed work and selected user stories for the next iteration.\
                    User stories were created either by analyzing upcoming features or proactively by my team to:\
                    \n- Perform large-scale refactors of the codebase\
                    \n- Improve or extend existing components\
                    \n\nCompleted user stories were first deployed to the *dev* environment for internal testing, then to the *test* environment for QA validation. Issues were fixed iteratively until all requirements were met.\
                    \nWe used three environments in our workflow: *dev*, *test*, and *prod*.\
                    \n- *dev* for early validation\
                    \n- *test* for stable pre-production demos\
                    \n- *prod* for the live application used by customers",
        },
        {
          type: "subtitle",
          value: "Interaction with Backend",
        },
        {
          type: "text",
          value:
            "The application interacted with multiple backend services, some developed with Spring Boot (Java) and others with Node.js (JavaScript).\
                    \nWhen introducing new features, required APIs could either already exist or need to be implemented.\
                    \nIf APIs were available, we consumed them directly and proposed improvements when necessary.\
                    \nIf not, we mocked server responses in the Redux store, shared the JSON structures with the backend team, and collaborated on the final API implementation.",
        },
      ],
    },
    // Traveltips
    {
      title: "Personal Project - Traveltips Web Application",
      description:
        "A web application designed as a travel-focused social network, where users can share information about cities and tourist destinations.\nI developed both the backend and frontend for a startup, but the project was not completed because the company decided to discontinue it. The backend is currently offline, so only the frontend is available.",
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
            "A travel-focused social web application where users can share information about cities and tourist destinations.\nI developed both the backend and frontend for a startup, but the project was discontinued due to a change in business priorities. The backend is currently offline, so only the frontend is visible.",
        },
        {
          type: "subtitle",
          value: "Frontend Technologies",
        },
        {
          type: "text",
          value: "For the frontend, these are the main technologies I used:",
        },
        {
          type: "text",
          value:
            "*React* as the frontend framework,\n*Redux* to manage the application state\n*Bootstrap 5* to manage the UI and layout\n*Firebase* to deploy the application\n*Jest* to manage tests",
        },
        {
          type: "text",
          value:
            "I organized the application architecture into six main folders:",
        },
        {
          type: "text",
          value:
            "- *bootstrap* contains all SCSS code defining the utility and layout classes used in the application\
                \n- *components* contains all reusable UI components rendered in the application\
                \n- *languages* contains one JSON file for each supported language\
                \n- *pages* contains all application pages\
                \n- *store* manages the global application state, including actions and API interactions\
                \n- *utils* contains shared utility functions used across different parts of the application",
        },
        {
          type: "subtitle",
          value: "Backend",
        },
        {
          type: "text",
          value: "For the backend, these are the main technologies I used:",
        },
        {
          type: "text",
          value:
            "- *Flask*, a micro-framework developed in *Python*. I chose Python because it enables rapid development and makes future integration with recommendation algorithms easier\
                \n- *MySQL* to manage the database, as the application data is highly structured\
                \n- *phpMyAdmin* Docker image used locally to explore and manage the database via a UI\
                \n- *Docker* and *docker-compose* to easily develop the backend locally, running three containers (Flask, MySQL, and phpMyAdmin)\
                \n- *Swagger* to create well-documented APIs\
                \n- *Marshmallow*, *SQLAlchemy*, and *Connexion* to simplify database modeling and API management",
        },
        {
          type: "subtitle",
          value: "Other Technologies",
        },
        {
          type: "text",
          value:
            "- *Git*\
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
      title: "Stellantis - Validation of ADAS Systems",
      description:
        "As a consultant, I worked at Stellantis (formerly FCA) within an engineering team responsible for managing and maintaining tools used to validate autonomous driving algorithms. We collaborated with teams located across different regions worldwide.",
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
            "As a consultant, I worked at Stellantis (formerly FCA) on a large-scale project related to autonomous driving validation.",
        },
        {
          type: "subtitle",
          value: "What I Did",
        },
        {
          type: "text",
          value:
            "I worked using Agile methodologies within an engineering team responsible for maintaining and extending validation tools used by other teams. We collaborated with multiple international teams.\n\
                    \nMy main responsibilities included:\n\
                    \n- Customizing simulation software according to Stellantis requirements (C++ for the core logic and C#/Unity for the GUI)\n\
                    \n- Creating Docker images containing specific test suites and deploying them to a cluster, allowing teams to run tests remotely\n\
                    \n- Implementing Airflow DAGs (using Python) to orchestrate pipelines and push KPIs to databases\n\
                    \n- Building Grafana dashboards to visualize simulation outputs\n\
                    \n- Defining new features and test scenarios in collaboration with other teams",
        },
        {
          type: "subtitle",
          value: "Methodology",
        },
        {
          type: "text",
          value:
            "We followed the Agile Scrum methodology with 2-week sprints.\n\
                    \nIn addition to tasks defined by the APO, we proactively proposed improvements to better meet delivery goals.",
        },
        {
          type: "subtitle",
          value: "Programming Languages",
        },
        {
          type: "text",
          value:
            "- *C++*\
                    \n- *Python*\
                    \n- *C#*\
                    \n- *Bash scripting*",
        },
        {
          type: "subtitle",
          value: "Operating Systems",
        },
        {
          type: "text",
          value:
            "- *Ubuntu* (primary)\
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
                    \n- *GitHub*\
                    \n- *Docker*\
                    \n- *Airflow*\
                    \n- *Jenkins*\
                    \n- *Codebeamer*\
                    \n- *Grafana*\
                    \n- *NDS* and *OpenDRIVE* map formats\
                    \n- *Google Workspace* (documents, spreadsheets, presentations)\
                    \n- *ROS*",
        },
      ],
    },
    // React-Redux application
    {
      title:
        "Accenture - React-Redux Application for a Large Energy Company",
      description:
        "I developed a web application using React and Redux to collect and visualize asynchronous data coming from multiple stations distributed across Italy.",
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
            "In my fourth project, I developed a web application using React and Redux.\n\
      I worked in an Agile (Scrum) environment within a multidisciplinary team composed of frontend developers, functional analysts, a UI designer, backend developers, and a Scrum Master.\n\
      The application collected and visualized multiple data streams arriving asynchronously from stations distributed across Italy.",
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
      \n- *ES6 JavaScript*\
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
      \n- *Chrome, Firefox, Safari, and IE11* for cross-browser testing\
      \n- *Visual Studio Code* as the IDE\
      \n- *Git* as the version control system\
      \n- *Jupyter Notebook* for Python experimentation\
      \n- *MQTT* to communicate with backend services",
        },
        {
          type: "subtitle",
          value: "Libraries Used",
        },
        {
          type: "text",
          value:
            "We intentionally limited external libraries, introducing them only when necessary to build complex components.\n\
      \n- *LeafletJS* for the interactive map, one of the core homepage components\n\
      \n- *D3.js* to render dynamic and customizable SVG graphics\n\
      \n- *React Intl* to support multi-language functionality",
        },
        {
          type: "subtitle",
          value: "What I Did",
        },
        {
          type: "text",
          value:
            "Below is an overview of the main components I developed during the project, without exposing client-specific details.",
        },
        {
          type: "subtitle",
          value: "1) Interactive Map",
        },
        {
          type: "text",
          value:
            "One of the first components was a map centered on Italy, built using LeafletJS.\n\
      Each station was represented by an icon placed using geographic coordinates. Clicking on an icon opened a popup displaying real-time station data, with a link to the station detail page.\n\
      I later added geographic overlays to highlight Italy while dimming surrounding regions, and restricted zoom and pan interactions to keep user focus on relevant data.",
        },
        {
          type: "subtitle",
          value: "2) NodeJS Server",
        },
        {
          type: "text",
          value:
            "At the beginning of frontend development, the backend was not yet available. I implemented a local NodeJS server that provided mock data via REST APIs and streamed asynchronous updates through a socket connection.",
        },
        {
          type: "subtitle",
          value: "3) SVG Graphics",
        },
        {
          type: "text",
          value:
            "Each station page displayed graphical representations of station components and metrics. I used D3.js to generate responsive SVG graphics that scaled without loss of quality.\n\
      To avoid code duplication, I created reusable rendering functions driven by JSON configurations.",
        },
        {
          type: "subtitle",
          value: "4) Multi-language Support",
        },
        {
          type: "text",
          value:
            "I implemented multi-language support using React Intl, defining parallel JSON files for Italian and English.\n\
      A shared utility function returned the correct translation based on the selected language, which was persisted in storage and applied on reload.",
        },
        {
          type: "subtitle",
          value: "5) Redux-Saga",
        },
        {
          type: "text",
          value:
            "Redux-Saga was used to centralize data retrieval and storage.\n\
      Asynchronous updates were normalized to prevent duplicated values, and the global state simplified debugging and data flow management.\n\
      All communication logic was isolated from the UI, keeping components clean and maintainable.",
        },
        {
          type: "subtitle",
          value: "6) JSON Data Generation",
        },
        {
          type: "text",
          value:
            "Before real data was available, I generated realistic JSON datasets using Python.\n\
      This approach allowed controlled randomness and fast iteration. Later, Python scripts were also used to convert CSV inputs into backend-ready JSON structures.",
        },
        {
          type: "subtitle",
          value: "7) Pure CSS Components",
        },
        {
          type: "text",
          value:
            "To improve performance, we minimized JavaScript usage where possible, relying on pure CSS solutions for components such as accordions and toggle filters.",
        },
        {
          type: "subtitle",
          value: "8) MQTT Connection",
        },
        {
          type: "text",
          value:
            "Once the backend was available, we replaced sockets with MQTT due to infrastructure constraints. The client subscribed to specific topics where the server published real-time data.",
        },
        {
          type: "subtitle",
          value: "9) SVG Function Graphs",
        },
        {
          type: "text",
          value:
            "For complex mathematical functions, I used Python to calculate data points and then rendered them in React.\n\
      These graphs supported drag, zoom, and area selection to analyze specific data ranges.",
        },
      ],
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
