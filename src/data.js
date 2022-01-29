import threeYearsEn from "./assets/three-year-EN.pdf";
import threeYearsIt from "./assets/three-year-IT.pdf";
import masterlyEn from "./assets/masterly-EN.pdf";
import masterlyIt from "./assets/masterly-IT.pdf";
import githubIcon from './assets/github-icon.svg'

export const hero = {
    hello: "Hello 👋, I'm",
    name: "Ing. Angelo Falci",
    title: "Full Stack Developer",
    smallResume: "Web developer focused on Javascript, React, Python and SQL to develop both frontend and backend applications",
    contacts: "Contacts",
}

export const header = {
    home: "Home",
    career: "Career",
    aboutMe: "About Me",
    projects: "Projects",
    contacts: "Contacts",
}

export const footer = {
    center: "Website done by React",
    center2: "and love",
}

export const contacts = {
    title: "Contact Me😃",
    subtitle: "Feel free to contact me if you want to propose me interesting jobs, projects or just if you want an exchange of ideas!💡",
}

export const form = {
    useModule: "Get in touch using the form below",
    leaveMessage: "Leave your message",
    thanks: "Thanks for your message! I'll get back to you as soon as possible!",
    backToTop: "Back to top",
    send: "Send",
}

export const about = {
    title: "About Me",
    mainSkills: "Here are my main skills:",
    paragraphs: [
        "Hi, Angelo and I live in the heart of the alps, Sondrio (north of Milan), Italy. I'm passionate about programming and I'm always looking for new challenges to learn and improve my skills. I’m a very active and motivated person. My best qualities are determination and sincerity. In the other side my defects are.. wait, it is better not say my defects in a curriculum.",
        "For the moment I work in TeamSystems, using mainly React with Redux. In my free time I develop a fullstack web application using React for frontend and Flask (Python framework) for backend. Below you can see more details about my work experience and projects!",
        "My other hobbies are: travel, read books, board games, videogames and do a lot of sports!"]
}

export const career = {
    title: "Career",
    schools: [{
        title: "Master of Computer Science and Engineering",
        where: "Politecnico di Milano, Italy",
        description: "Download all the details about my studies and which subjects I studied here: ",
        when: "2016 - 2018",
        links: [{
            title: "IT",
            url: masterlyIt,
        }, {
            title: "EN",
            url: masterlyEn,
        }],
    }, {
        title: "Computer Science and Engineering",
        where: "Politecnico di Milano, Italy",
        description: "Download all the details about my studies and which subjects I studied here: ",
        when: "2013 - 2016",
        links: [{
            title: "IT",
            url: threeYearsIt,
        }, {
            title: "EN",
            url: threeYearsEn,
        }],
    },
    {
        title: "Diploma in Computer Expert",
        where: "High school ITIS Enea Mattei (Sondrio, Italy)",
        when: "2008 - 2013"
    }],
    jobs: [{
        title: "Senior FullStack Developer",
        company: "TeamSystem",
        link: "https://www.teamsystems.com/",
        description: "I work mainly with React and Redux to maintain and improve Digitalbox application. I also collaborate occasionally with backend developers to update or fix bugs in API written in NodeJS or Java.",
        whereAndWhen: "Remote, 10/2021 - Present",
    }, {
        title: "Autonomous Driving Software Engineer",
        company: "Consultant in Stellantis",
        link: "https://www.stellantis.com/",
        description: "As NetcomGroup consultant I was responsible of maintain and develop different tools used to validate autonomous driving software. Moreover with my team we studied and teste new methodologies and softwares to improve Stellantis toolchain.",
        whereAndWhen: "Turin - Italy, 02/2020 - 10/2021",
    }, {
        title: "Autonomous Driving Software Engineer",
        company: "Consultant in Stellantis",
        link: "https://www.stellantis.com/",
        description: "As NetcomGroup consultant I studied how to integrate some tools in Stellantis system in order to create a toolchain able to validate autonomous driving software",
        whereAndWhen: "Munich - Germany, 10/2019 - 02/2020",
    }, {
        title: "Frontend Developer",
        company: "Accenture",
        link: "https://www.accenture.com/",
        description: "I worked as frontend developer to design and develop performance and responsive website for very important clients with using different technologies like React, Redux, JS6, HTML, CSS, Docker and others",
        whereAndWhen: "Milan - Italy, 11/2018 - 10/2019",
    }, {
        title: "IoT Developer",
        company: "JOL Laboratory, Tim",
        description: "For my thesis I worked with a team for an European project that have as main goal the creaton of an Android application that can be used to communicate and collect data from different smart devices (look in my projects section for more details)",
        whereAndWhen: "Milan - Italy, 05/2018 - 09/2018",
    }]
}

export const projects = {
    title: "Projects",
    projects: [{
        title: "Traveltips Web Application",
        description: "This is an application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it.",
        links: [{
            label: "Traveltips Backend",
            url: "https://github.com/FAngelo94/TravelTipsBackend",
            icon: githubIcon,
        }],
        mainSkills: ["React", "Redux", "Python", "Docker", "firebase", "HTML", "CSS", "pythonanywhere"],
        longtext: [
            {
                type: "subtitle",
                value: "Frontend Technologies"
            },
            {
                type: "text",
                value: "For the frontend these are the main technologies I’m using:"
            },
            {
                type: "text",
                value: "*React* as frontend,\n*Redux* to manage the store of application \n*Bootstrap* 5 to manage the graphics property of the application \n*Firebase* to deploy the application\n*Jest* to manage tests"
            },
            {
                type: "text",
                value: "I organize the architecture of the application in 6 mainfolder:"
            },
            {
                type: "text",
                value: "*bootstrap* contains all scss code that define the classes used in the application\
                \n*components* contains all UI components rendered inside the application\
                \n*languages* contains one json for each languages user can select in the application\
                \n*pages*\
                \n*store* to manage the information saved inside the application, included all action other components can use to interact with the store and API services\
                \n*utils* contains a list of functionalities used in different parts of the application, divided in some file"
            },
            {
                type: "subtitle",
                value: "Backend"
            },
            {
                type: "text",
                value: "For the backend these are the main technologies I’m using:"
            },
            {
                type: "text",
                value: "*Flask* micro-framework developed in *Python*, I choose these language for different reason, it’s faster develop in Python and in future it will be easier integrate the backend with recommender algorithms written in Python to improve the user experience\
                \n*mysql* to manage the database because the information inside the application are well structured\
                \n*phpmyadmin* docker image used locally to explore the local database using an UI\
                \n*docker* and *docker-compose* to develop easly the backend locally where 3 docker image are run, one for Flask, one for mysql and one for phpmyadmin\
                \n*Swagger* to create a list of API documented well\
                \n*marshmallow*, *SQLAlchemy* and *connexion* to manage easly the tables in the db inside the API"
            },
            {
                type: "subtitle",
                value: "Other technologies"
            },
            {
                type: "text",
                value: "*Git*\
                \n*Visual Studio Code*"
            }
        ],
        allSkills: ["React", "Redux", "Python", "Docker", "firebase", "HTML", "CSS", "pythonanywhere"],
    }]
}