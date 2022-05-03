import threeYearsEn from "./assets/three-year-EN.pdf";
import threeYearsIt from "./assets/three-year-IT.pdf";
import masterlyEn from "./assets/masterly-EN.pdf";
import masterlyIt from "./assets/masterly-IT.pdf";
import githubIcon from './assets/github-icon.svg'
import externalLinkIcon from "./assets/external-link-icon.svg";

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
    title: "Main Projects",
    subtitle: "(click on the card to see more details)",
    footerText: "For more projects looks my github or codepen! (links in footer)",
    projects: [
        // ClimberWorld
        {
            title: "Personal Project - Climberworld Web App",
            description: "Web app I'm developing as fullstack using React as frontend and Flask (Python framework) as backend. This site has the ambition to collect information about all the refuges, excursions and climbing walls of the Alps.\
            \nClick the link to see the website!",
            links: [
                {
                    label: "Climberworld",
                    url: "https://climberworld.web.app/",
                    icon: externalLinkIcon,
                }
            ],
            mainSkills: ["React", "Python", "SQL", "Flask", "Docker"],
            allSkills: ["React", "Redux","styled-components", "Javascript", "Python", "html","CSS","SQL", "Flask", "Docker", "VS Code","firebase","pythonanywhere","Swagger"],
            longtext: [
                {
                    type: "text",
                    value: "In my free time I'm working to to this application in order to learn new things and keep training the knowledge I already have.\
                    \nFor the moment I’m working on it alone and I’m developing both frontend and backend."
                },
                {
                    type: "subtitle",
                    value:"Frontend"
                },
                {
                    type: "text",
                    value:"For the frontend these are the main technologies I’m using:\
                    \n- *React* as frontend\
                    \n- *Redux* to manage the store of application\
                    \n- *Styled* components to manage the style\
                    \n- *Firebase* to deploy the application"
                },
                {
                    type: "subtitle",
                    value:"Backend"
                },
                {
                    type: "text",
                    value:"For the backend these are the main technologies I’m using:\
                    \n- *Flask* micro-framework developed in Python\
                    \n- *mysql* to manage the database because the information inside the application are well structured\
                    \n- *phpmyadmin docker image* used locally to explore the local database using an UI\
                    \n- *docker* and *docker-compose* to develop easly the backend locally where 3 docker image are run, one for Flask, one for mysql and one for phpmyadmin\
                    \n- *Swagger* to create a list of API documented well\
                    \n- *pythonanywhere* to deploy the application\
                    \n- *marshmallow, SQLAlchemy and connexion* to manage easly the tables in the db inside the API"
                },
                {
                    type: "subtitle",
                    value:"Other Technologies/Tools"
                },
                {
                    type: "text",
                    value:"- *Git*:\
                    \n- *Visual Studio Code*"
                }

            ]
        },
        // Digital Box
        {
            title: "TeamSystems - Digital Box",
            description: "This is an application web designed for professional firms who wish to achieve information sharing processes and improve the relationship with their customers, involve and exchange information procuofi and in real time.",
            links: [
                {
                    label: "Digital Box",
                    url: "https://app.teamsystemdigital.com/digitalbox#/",
                    icon: externalLinkIcon,
                }
            ],
            mainSkills: ["React", "Redux", "JS", "HTML", "CSS"],
            allSkills: ["React", "Redux", "JS", "HTML", "CSS", "VS Code", "Windows 10", "Python", "Storybook", "antd", "Cypress", "Jest"],
            longtext: [
                {
                    type: "text",
                    value: "I work, using Agile methodologies, as frontend developer, to Digital Box application in order to update the functionalities already available,implement new ones. Furthermore I fix bugs and refactored old components in order to create a more understandable code and improve the performance."
                },
                {
                    type: "subtitle",
                    value: "Technologies Used"
                },
                {
                    type: "text",
                    value: "- *React* as frontend framework (with *Javascript* and *html* obviusly) \
                    \n- *Redux* as state management inside the application\
                    \n- *CSS* to manage the styles of components we create internally in the application\
                    \n- *Jest* to manage unit tests\
                    \n- *Cypress* to manage integration tests\
                    \n- *Storybook.JS* to manage the documentation some common components used in different place in the application\
                    \n- *Git* as management as version control system\
                    \n- *Python* to automatize some task during the development process\
                    \n- *Docker* to execute the backend locally\
                    \n- *VS Code* as IDE\
                    \n- *JSON* as standard format to pass data between frontend and backend\
                    \n- *Swagger* as documentation to analyze backend API\
                    \n- *Jira* to manage the tasks and issues of the project\
                    \n- *Windows* or *MacOS* as operative systems"
                },
                {
                    type: "subtitle",
                    value: "Workflow"
                },
                {
                    type: "text",
                    value: "We work in sprint of 2 weeks and between each sprint we present the work done and decide which user story take for the next sprints.\
                    The stories can be created by the teams that analyze next components to implement or by me and my team if we want:\
                    \n- Do a big refactor in the code\
                    \n- Do an update to old component\
                    \n\nWhen we complete an user story we put it in *dev* environment to test it on ourself, next we deploy it to *test* environment in order to give the possibility to our test team to see if the requirements are reached without errors. If the requirements are not reached or there are some errors we proceed to fix problems and deploy again first in *dev* and then in *test*. We continue to do this until we reach the requirements requested in the user story without bugs or errors.\
                    \nIn out workflow we have 3 different environments: *dev*, *test* and *prod*.\
                    \n- *dev* is used to test the application by other developers and to see if the requirements are reached without errors\
                    \n- *test* is when we have a stable solution in dev in order to have a 'semi-prod' environment to do official demo when needs\
                    \n- *prod* is the final environment where the application is deployed and used by the real customers"
                },
                {
                    type: "subtitle",
                    value: "Interaction with backend"
                },
                {
                    type: "text",
                    value: "We don't have only one server for backend but different services, some of them are developed with Springboot (Java), other in NodeJS (Javascript)\
                    \nWhen we deploy a new components or functionalities in our application could be that we already have the API needs or we don't have it.\
                    \nIn the first case we just use them and, if necessary, we suggest some updates\
                    \nIn the second case we mock the server reply in our redux store, we pass to backend the JSON format of mocked data and they create the API."
                }
            ]
        },
        // Curriculum online
        {
            title: "Portfolio Online",
            description: "I create this portfolio online to show my skills and experience.\
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
                }
            ],
            mainSkills: ["React", "Typescript", "Style-components", "GiHub Pages"],
            allSkills: ["React", "Typescript", "Style-components", "GiHub Pages", "GitHub", "gh-pages"],
            longtext: [
                {
                    type: "text",
                    value: "Starting from a model I found online I created this portfolio online improving the code and adding new components."
                },
                {
                    type: "subtitle",
                    value: "Technologies and Libraries Used"
                },
                {
                    type: "text",
                    value: "- *React* as framework\
                    \n- *Typescript* as language\
                    \n- *style-components* as library to manage styles\
                    \n- *GitHub* as version control system\
                    \n- *GitHub Pages* as static site generator\
                    \n- *gh-pages* package to deploy the website in react using GitHub Pages"
                }
            ]
        },
        // Traveltips
        {
            title: "Personal Project - Traveltips Web Application",
            description: "This is an application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it. Backend is down at the moment, only frontend is visible.",
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
                }],
            mainSkills: ["React", "Redux", "Python", "Docker"],
            longtext: [
                {
                    type: "text",
                    value:"This is an application that user will use to share information about cities and tourist places like a social network focused on travel.\n I developed both backend and frontend for a startup but I didn't finish the project because they aren't interested anymore on it. Backend is down at the moment, only frontend is visible."
                },
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
                    value: "- *bootstrap* contains all scss code that define the classes used in the application\
                \n- *components* contains all UI components rendered inside the application\
                \n- *languages* contains one json for each languages user can select in the application\
                \n- *pages*\
                \n- *store* to manage the information saved inside the application, included all action other components can use to interact with the store and API services\
                \n- *utils* contains a list of functionalities used in different parts of the application, divided in some file"
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
                    value: "- *Flask* micro-framework developed in *Python*, I choose these language for different reason, it’s faster develop in Python and in future it will be easier integrate the backend with recommender algorithms written in Python to improve the user experience\
                \n- *mysql* to manage the database because the information inside the application are well structured\
                \n- *phpmyadmin* docker image used locally to explore the local database using an UI\
                \n- *docker* and *docker-compose* to develop easly the backend locally where 3 docker image are run, one for Flask, one for mysql and one for phpmyadmin\
                \n- *Swagger* to create a list of API documented well\
                \n- *marshmallow*, *SQLAlchemy* and *connexion* to manage easly the tables in the db inside the API"
                },
                {
                    type: "subtitle",
                    value: "Other technologies"
                },
                {
                    type: "text",
                    value: "- *Git*\
                \n- *Visual Studio Code*"
                }
            ],
            allSkills: ["React", "Redux", "Bootstrap 5", "Firebase", "Jest", "Flask", "Python", "mysql", "phpmyadmin", "Docker", "docker-compose", "Swagger", "firebase", "HTML", "CSS", "pythonanywhere", "marshmallow", "SQLAlchemy"],
        },
        // FCA Project
        {
            title: "Stellantis - Validation of ADAS System",
            description: "As consultant I’m working inside Stellantis (previous FCA) in an engineering team that manage the different tools used by other team in order to validate the autonomous driving algorithm. We work together other teams that are in different part of the world.",
            links: [
            ],
            mainSkills: ["Python", "Ubuntu", "Docker", "C++"],
            allSkills: ["Python", "Ubuntu", "Docker", "C++", "C#", "Bash Script", "Visual Studio Code", "Windows 10", "Unity",
                "Github",
                "Airflow",
                "Jenkins",
                "Codebeamer",
                "Grafana",
                "NDS and OpenDRIVE map format",
                "ROS"],
            longtext: [
                {
                    type: "text",
                    value: "As consultant I’m working inside Stellantis (previous FCA) in one big project regarding the autonomous driving."
                },
                {
                    type: "subtitle",
                    value: "What I do?"
                },
                {
                    type: "text",
                    value: "I’m working, using AGILE methodology, in an engineering team that manage the different tools used by other team in order to validate the autonomous driving algorithm. We work together other teams that are in different part of the world.\
                    \nSome of our main activities are:\
                    \n- Customize the simulation software bought with Stellantis specific requirements (using c++ for core and c#/Unity for GUI)\
                    \n- Implement docker images with specific test and push them in a cluster to give the possibility to other teams to run test remotely\
                    \n- Implement DAGs in Airflow (using Python) to manage pipeline tasks like push KPI in a database\
                    \nBuild Grafana dashboards to visualize simulations outputs\
                    \n- Define with other teams next features and tests to implement in our simulation tool"
                },
                {
                    type: "subtitle",
                    value: "Methodology"
                },
                {
                    type: "text",
                    value: "We work in AGILE SCRUM with sprints that last 2 weeks.\
                    \nWe not only take care items added by our APO but we also propose items that help us to reach goals delivery"
                },
                {
                    type: "subtitle",
                    value: "Programming languages"
                },
                {
                    type: "text",
                    value: "- *C++*\
                    \n- *Python*\
                    \n- *C#*\
                    \n- *Bash script*"
                },
                {
                    type: "subtitle",
                    value: "Operative Systems"
                },
                {
                    type: "text",
                    value: "- *Ubuntu* (mainly)\
                    \n- *Windows 10*"
                },
                {
                    type: "subtitle",
                    value: "Other Technologies"
                },
                {
                    type: "text",
                    value: "- *Visual Studio Code*\
                    \n- *Unity*\
                    \n- *Github*\
                    \n- *Docker*\
                    \n- *Airflow*\
                    \n- *Jenkins*\
                    \n- *Codebeamer*\
                    \n- *Grafana*\
                    \n- *NDS and OpenDRIVE* map format\
                    \n- *Online Google Sheets* (word, excel, presetation)\
                    \n- *ROS*"
                }
            ]
        },
        // React-Redux application
        {
            title: "Accenture - React-Redux Application for a Big Company in the Energy Sector",
            description: " I developed a web application using React with Redux.\
            \nI realized a React application to collect and visualize multiple data, coming in an asynchronous way from different station distributed in Italy.",
            links: [

            ],
            mainSkills: ["React", "Redux", "NodeJS", "Stencil JS", "Python"],
            allSkills: ["html", "CSS", "Sass", "JS6", "Python", "Java", "React", "Redux", "NodeJS", "Stencil JS", "Storybook", "Chrome", "Firefox", "Safari", "IE11", "VS Code", "Git", "Jupiter", "MQTT", "LeafletJS", "D3.js", "React intl"],
            longtext: [
                {
                    type: "text",
                    value: "In my fourth project I developed a web application using React with Redux.\
                    \nIn this project I worked in agile mode (scrum in the specific) and the team included mainly with 2 frontend developers, 2 functional, 1 UI designer, 2 backend developer and 1 scrum master.\
                    \nI realized a React application to collect and visualize multiple data, coming in an asynchronous way from different station distributed in Italy."
                },
                {
                    type: "subtitle",
                    value: "Languages Used"
                },
                {
                    type: "text",
                    value: "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*\
                    \n- *Python*\
                    \n- *Java*"
                },
                {
                    type: "subtitle",
                    value: "Technologies Used"
                },
                {
                    type: "text",
                    value: "- *React*\
                    \n- *Redux Saga*\
                    \n- *NodeJS*\
                    \n- *Stencil JS*\
                    \n- *Storybook UI*\
                    \n- *Chrome, Firefox, Safari and IE11* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Git* to repository online\
                    \n- *Jupyter* notebook for Python code\
                    \n- *MQTT* to connect with the server"
                },
                {
                    type: "subtitle",
                    value: "Libraries Used"
                },
                {
                    type: "text",
                    value: "We introduced few libraries only to implement some complex components.\
                    \n- *LeafletJS* to implement an interactive map that are one the main component in website put in the homepage\
                    \n- *D3.js* to draw dynamic and custum svg\
                    \n- *React intl* to support multi language in the website"
                },
                {
                    type: "subtitle",
                    value: "What I did"
                },
                {
                    type: "text",
                    value: "I describe here the main components I developed during the project without enter in details about the client."
                },
                {
                    type: "subtitle",
                    value: "1) Interactive Map"
                },
                {
                    type: "text",
                    value: "One of the first component was a map center in Italy. To build this component I used Leaflet JS.\
                    \nI put in the map one icon, using the geographic coordinates, for each station of the company. When user clicks in one icon a popup appear showing some data relatives the station. The data in the popup change in realtime.\
                    \nFrom the popup user can also reach the station page clicking the title of popup.\
                    \nNext in the map I put an image on top of Italy (using the geographic coordinates for top left and bottom right corner of the image). I put an other image on Europe and Nord Africa to apply an opacity filter to all countries except Italy.\
                    \nI limited the zoom and the moving in the map to concentrate the attention of the user to the Italy. And some object in the map disappear when user zooms in too much in order to have only the stations in the map."
                },
                {
                    type: "subtitle",
                    value: "2) Server with NodeJS"
                },
                {
                    type: "text",
                    value: "When we start to develop frontend we don’t have backed, for this reason I create a NodeJS local server to send fake data to the frontend using a GET (to take basic information about stations) and a socket to send asynchronous data every seconds."
                },
                {
                    type: "subtitle",
                    value: "3) SVG Graphics"
                },
                {
                    type: "text",
                    value: "For each station there are different pages that shows data coming from server. For some page there are a graphics that represent components in the station with the data. To realize these graphics I used 3D js.\
                    \nThanks to this library I created SVG graphics that adapt their dimensions to the page space without lost quality.\
                    \nA lot of page have similar draw components. In order to avoid repeated code, for each type of component, I created a function that draw and customize the component using a JSON configuration passed from the page where we are."
                },
                {
                    type: "subtitle",
                    value: "4) Support multi language"
                },
                {
                    type: "text",
                    value: "I used React intl to support english and italian. With this library I created 2 file JSON, one for italian terms and one for english terms where I assign to the same set of keys the correct translation.\
                    \nThen I created a global function that is possible to use everywhere in the code, you pass a key and the function return the correct translated word, depending on the language set in the local storage.\
                    \nWhen the user changes language I save the new setting in the session storage and the page will be reloaded to change the language."
                },
                {
                    type: "subtitle",
                    value: "5) Redux-Saga"
                },
                {
                    type: "text",
                    value: "To save data coming from the server we use Redux-Saga.\
                    \nWe receive asynchronous data and thanks to Redux we avoid to have different values for the same property. Moreover we can manage easier the state of the website because is centralized. And thanks to a tool installed on chrome we can see how the state of the application is evolving (making easy the debug).\
                    \nUsing redux we can divide data from application. It means that the application doesn’t need to get data from server or manage the connection. The application just use the data.\
                    \nIn Redux we implemented all the logic about comunication and recovery of data.\
                    \nIn this way the code is more clean and maintainable."
                },
                {
                    type: "subtitle",
                    value: "6) Build JSON format data"
                },
                {
                    type: "text",
                    value: "After we decided the better format to store data in our application I created JSON with random data using python.\
                    \nI used python for 2 reasons:\
                    \n- Data aren’t completely random but enter in certain range\
                    \n- I manipulated and changed these json many time so thanks to python it I spent less time\
                    \nWhen we obtained the real data from csv files I used Python to manipulate them and build a realistic JSON data to give to the backend so they know in which format send the real data."
                },
                {
                    type: "subtitle",
                    value: "7) Pure CSS components"
                },
                {
                    type: "text",
                    value: "To have better performance we avoid to use script when we can. For example we use pure CSS accordion and toggle for filters."
                },
                {
                    type: "subtitle",
                    value: "8) MQTT Connection"
                },
                {
                    type: "text",
                    value: "When backend was ready we tried a first connection with socket but the backend technologies supported only mqtt communication. So we realized a mqtt connection subscribing our client to a topic where server put data in a queue."
                },
                {
                    type: "subtitle",
                    value: "9) SVG Function Graphs"
                },
                {
                    type: "text",
                    value: "To draw the cartesian graph of some complex function given the equations I used Python to calculate a set of points that then I used in React to draw the function.\
                    \nThen, in these cartesian graph, I implemented 2 functionalities:\
                    \nThe possibility to drag and zoom in/out the graph\
                    \nThe possibility to select a specific section of the graph and zoom in it"
                }
            ]
        },
        // Gazzetta dello Sport
        {
            title: "Accenture - Gazzetta dello Sport",
            description: "In my second project in Accenture I work in a very big and interesting project. In this case the goal was the performances because the website is read by thousand and thousand of people.",
            links: [
                {
                    label: "Gazzetta dello Sport",
                    url: "https://www.gazzetta.it/",
                    icon: externalLinkIcon,
                }
            ],
            mainSkills: ["HTML", "CSS", "JS6", "Sass", "Docker"],
            allSkills: ["HTML", "CSS", "JS6", "Sass", "Galen", "Docker", "Gulp", "VS Code", "Jenkins", "Jira", "Git"],
            longtext: [
                {
                    type: "subtitle",
                    value: "Languages Used"
                },
                {
                    type: "text",
                    value: "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*"
                },
                {
                    type: "subtitle",
                    value: "Tecnologies Used"
                },
                {
                    type: "text",
                    value: "- *Gulp*\
                    \n- *Docker* to create a container when we run the project\
                    \n- *Chrome* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Galen* to test some parts of the website\
                    \n- *Jenkins* to manage the deploys\
                    \n- *Jira* to manage the different tasks\
                    \n- *GitHub* to repository online"
                },
                {
                    type: "subtitle",
                    value: "Architectures Used"
                },
                {
                    type: "text",
                    value: "*Some part of *Bulma* framework\
                    \n*SMACSS* and *BEM* to organize the code and name convention"
                },
                {
                    type: "subtitle",
                    value: "Implementation"
                },
                {
                    type: "text",
                    value: "This was a very long and complex project so I divide it in little chapters based on the tasks I did.\
                    \nObviously I didn’t execute them one after other but often I worked on more task parallel, for example I made a few desktop pages, after a few mobile pages and after a few other desktop pages."
                },
                {
                    type: "subtitle",
                    value: "1) Desktop pages"
                },
                {
                    type: "text",
                    value: "First of all I worked with an other guy to build the main pages of the website for desktop using html and sass.\
                    \nDuring the development we followed some important guidelines:\
                    \n- write less code possible to have a light website\
                    \n- divide the website in reusable components that have a common css to make the website more scalable and maintainable\
                    \n- use the most general names possible for components for the maintainability, because, for example, the same component will be used in different position or maybe change position so it is better not say a name connected to the position like “top-media”\
                    \n- architecture of code inspired of SMACSS and BEM\
                    \n- write code to make the website usable and well designed in different website like Firefox, Chrome, Safari, Explorer 11and others"
                },
                {
                    type: "subtitle",
                    value: "2) Mobile pages"
                },
                {
                    type: "text",
                    value: "After the pages for the desktop we made the pages for mobile using the same architecture of desktop but dividing the css code to improve the performance because in this way who use the desktop not download useless css code written for the mobile."
                },
                {
                    type: "subtitle",
                    value: "3) Test with Galen"
                },
                {
                    type: "text",
                    value: "After we did the first pages, our clients want to introduce in the work galen to test the graphic of some pages already done.\
                    \nI was the responsibility to study Galen and use it.\
                    I met a lot of difficult with galen. It is a easy instrument to do basic things but if you want to do more sophisticated tests it’s a nightmare because online there is only the official guide and it is very difficult (for not say impossible) to find complex examples.\
                    \nFor this reason it was also funny because I used all my problem solving skills to find original ways to do sophisticated test using the most simple possible code because the goal for the client was create a simple and standard way to test in order to be used from everyone to test in a fastly way website pages of this project but also of future projects.\
                    \nI used Galen syntax and JS for some important scripts for the tests.\
                    \nHere I will upload the guide when I will have finished it and will have removed possible sensible data (I don’t write the guide directly here or this article becomes too huge).\
                    \nIn the guide I will write the main problems met and how I resolved them."
                },
                {
                    type: "subtitle",
                    value: "4) Integration with JS"
                },
                {
                    type: "text",
                    value: "When we finished the html and css structure for the first pages other guys did the Javascript components to make the website really useable.\
                    \nI worked with some of them to find the best Javascript solution adding some data (like data-target, new classes or transition) in the html or css when it was needed.\
                    \nMoreover I also develped some complex components in Javascript (like a custom scrollbar)."
                },
                {
                    type: "subtitle",
                    value: "5) Optimizations"
                },
                {
                    type: "text",
                    value: "Apart to use the guidelines I wrote above for CSS and html, to improve more the speed of the website we adopted other different methodologies:\
                    \n- Use an orchestrator to manage when, and in which order, loading the JS scripts\
                    \n- Put the CSS of the first visible object inline to reduce the initial loading of webpage"
                },
                {
                    type: "subtitle",
                    value: "6) Compability and Bug fixing"
                },
                {
                    type: "text",
                    value: "In order to resolv different bugs and have the compability with all the main browser (Firefox, Chrome, Safary, Edge and also IE11 with different types of device) I learned to inspect the code of the webpage with all browser and also using virtual machine (for Windows) and emulator (for Android and Safary)"
                },
                {
                    type: "subtitle",
                    value: "Conclusion"
                },
                {
                    type: "text",
                    value: "This project was a great experience and I learn a lot from it.\
                    \nIn particular I understand how write and organize CSS, html and Javascript to have a performance website."
                }
            ]
        },
        // Static Website for Financial Client - Accenture
        {
            title: "Accenture - Static Website for Financial Client",
            description: "I worked on an already started project.\
            \nI developed some components for the website of a big client in the financial sector.\
            \nHere the website was divided in “molecules”.\
            \nEvery molecules it was implemented to be responsive and work as in desktop as in mobile devices.",
            links: [
            ],
            mainSkills: ["JS6", "Sass", "html"],
            allSkills: ["JS6", "Sass", "Html", "CSS", "Gulp", "Chrome", "firefox", "Safari", "IE11", "Git", "VS Code", "Webpack", "Swiper", "Plyr"],
            longtext: [
                {
                    type: "text",
                    value: "In my third project in Accenture I worked on an already started project.\
                    \nI developed some components for the website of a big client in the financial sector.\
                    \nHere the website was divided in “molecules”.\
                    \nEvery molecules it was implemented to be responsive and work as in desktop as in mobile devices.\
                    \nIn this projects I worked with a very huge teams. The most difficult and challenging thing in this project was interact to so many people. When I resolved bugs often they aren’t bugs I could directly resolve. So I had to understand which team I needed to contact to resolve it (backend team, maintanence team, integration team), explain the problem and follow each phases until the bug was solved."
                },
                {
                    type: "subtitle",
                    value: "Languages Used"
                },
                {
                    type: "text",
                    value: "- *html*\
                    \n- *CSS*\
                    \n- *Sass*\
                    \n- *JS6*"
                },
                {
                    type: "subtitle",
                    value: "Tecnologies Used"
                },
                {
                    type: "text",
                    value: "- *Gulp*\
                    \n- *Chrome, Firefox, Safari and IE11* to test and modify at runtime the components\
                    \n- *Visual Studio Code* as editor\
                    \n- *Git* to repository online\
                    \n- *Webpack*"
                },
                {
                    type: "subtitle",
                    value: "Libraries Used"
                },
                {
                    type: "text",
                    value: "This projects doesn’t need very hight performance so, to speed up the development, we used some libraries:\
                    \n- *Swiper* to manage the carousels\
                    \n- *Plyr* to manage have a simple, accessible and customisable media player for Youtube and Vimeo"
                },
                {
                    type: "subtitle",
                    value: "What I did"
                },
                {
                    type: "text",
                    value: "I described here the main features I developed during the project."
                },
                {
                    type: "subtitle",
                    value: "1) Carousel and Video"
                },
                {
                    type: "text",
                    value: "I wrote the html, CSS and JS to develop a carousel using Swiper. I also added a listener to activate the automatic loop of carousel images when user don’t put the mouse on it and deactivate it when user put the mouse.\
                    \nUsing Ply I created a custom component to add video in page from Youtube or Vimeo and, optionally, start automatically with mute active.\
                    \nFinally I also added Ply in the carousel in order to have a video in the carousel that start automatically with mute activated when the current slide has a video and stop it when slide change.\
                    \nAfter some weeks I updated the hero carousel to be used also in the middle of page, inside other molecules, without full the screen. To do this I checked if the carousel was inside an other molecules."
                },
                {
                    type: "subtitle",
                    value: "2) Optimization of JS"
                },
                {
                    type: "text",
                    value: "I started to work to this project when it was near the final deliver and most of the work was already done but Javascript code was written by different persons, without use classes or try-catch and this was a problem because if in the code incurred in an error in the first rows the other code will not be executed because Gulp copied all javascript together.\
                    \nTo solve this problem I work with an other guy in order to:\
                    \n- Organize the different molecules script in different classes; then, for each class we instantiated them in different try-catch, so if some class was broken it would not stop the others.\
                    \n- To organize better the scripts we substituted Gulp with Webpack because it didn’t just copy all scripts in a file and the code became more robust and the scripts more independent from each other."
                },
                {
                    type: "subtitle",
                    value: "3) Autocomplete"
                },
                {
                    type: "text",
                    value: "First of all I developed a search bar inside the header that user can show or hide pressing a button.\
                    \nIn this search bar I implemented the autocomplete. A listener make a fetch to a server with the value of input field anytime the user inserts new char (or remove ones). If the fetch ends successful I builds a list with the results returned to show them to the user.\
                    \nUser can interact with the autocomplete in the following ways:\
                    \n- If he press enter button the research start and it will be redirect in a new page with the research results.\
                    \n- If he pressed exit button the search bar is cleaned and hidden\
                    \n- He can also start the research clicking in an option in the suggest list created or navigating in the suggested list with the arrows and click enter button to chose the desired option"
                },
                {
                    type: "subtitle",
                    value: "4) Research"
                },
                {
                    type: "text",
                    value: "When the user confirm the word, or sentence, that he want to search in the autocomplete field, it is saved in the local storage and the user is redirect in the research page.\
                    \nIn this page I implemented the research with a fetch that send the word or sentence to the server using a REST api (POST with a JSON payload) and show in page the results of the research.\
                    \nThe graphics of the list of results was enough complex to implement because there were three different sublist, different each other from the graphics point of view. Moreover for each field in the lists I showed different parameters depend of the JSON the client received.\
                    \nAnd for last I implemented this page, like all website, to be seen good as in mobile as in desktop.\
                    \nTo realize this page I made a great use of flex in order to adapt it in each screen size and I used mixin only where it was extremely necessary in order to use less css code possible."
                }
            ]
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
    ]
}