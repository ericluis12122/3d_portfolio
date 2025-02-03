import { universidad, ink, superprofe, ninja, score, rick_morty, libro, chat, instagram } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    sass,
    tailwindcss,
    typescript,
    csharp,
    java,
    sql,
    exercism,
    python,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "Csharp",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "Sql",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Computer Science training",
        company_name: "University of Havana",
        icon: universidad,
        iconBg: "#accbe1",
        date: "Sep 2008 - Jun 2014",
        points: [
            "Studied programming languages with a special emphasis on C# and Java.",
            "Gained in-depth knowledge of data structures and algorithms.",
            "Worked on a compiler project as part of a compilation course.",
            "Developed a file system project during the Operating Systems course.",
            "Learned the fundamentals of relational database theory.",
            "Studied assembly language and its application in low-level programming.",
            "Collaborated on various projects involving software development and system design."
        ]        
    },
    {
        title: "Full Stack Developer",
        company_name: "InkPresion",
        icon: ink,
        iconBg: "#fbc3bc",
        date: "Jun 2014 - Nov 2024",
        points: [
            "Designed, developed, and maintained an automated accounting system, optimizing the company's financial management.",
            "Implemented features for inventory and point-of-sale management, enhancing operational efficiency.",
            "Supervised and trained accounting technicians on the use of the new system, ensuring its correct implementation."
        ]        
    },
    {
        title: "Web Developer - Shadow",
        company_name: "Freelancer",
        icon: ninja,
        iconBg: "#b7e4c7",
        date: "Jan 2018 - Jan 2024",
        points: [
            "Contributed to numerous web application development projects, working as a developer in the background.",
            "Specialized in frontend development using Vue.js, React.js, and Next.js, delivering responsive and dynamic user interfaces.",
            "Worked on backend development with Node.js, Spring Boot, and Django, ensuring robust and scalable server-side functionality."
        ]        
    },
    {
        title: "Programming Languages Teacher",
        company_name: "Private Teacher",
        icon: superprofe,
        iconBg: "#fbc3bc",
        date: "Jan 2013 - Present",
        points: [
            "I have had a long and rewarding career as a private programming tutor, imparting knowledge to students across various platforms such as Superprofe, TusClasesParticulares, and others.",
            "Taught a wide range of subjects including multiple programming languages, logic, computability theory, and discrete mathematics, helping students build a solid foundation in computer science.",
            "The languages I have worked with most extensively include C#, Java, JavaScript, and Python, adapting my teaching approach to meet the diverse needs of my students."
        ]        
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: score,
        theme: 'btn-back-red',
        name: 'Mini Games Top Score',
        description: "Developed an application where you can play various mental agility and memory games. It keeps track of players' records across different games and maintains a ranking system. The frontend is built using Vanilla JavaScript, while the backend is powered by Node.js + Express.js, featuring user registration and authentication with tokens. Data persistence is handled using MongoDB.",
        link: 'https://ericluis12122.github.io/frontend_mini_games_top_score',
    },
    {
        iconUrl: rick_morty,
        theme: 'btn-back-green',
        name: 'Rick and Morty Character Manager',
        description: 'A full-stack CRUD application built with React + TypeScript + Vite that allows user registration and login. Once authenticated, users can interact with the Rick and Morty API to view a list of characters. The app also enables users to create, edit, and delete custom characters, providing a seamless and interactive experience. Perfect for showcasing user authentication, API integration, and CRUD operations in a modern web application.',
        link: 'https://github.com/ericluis12122/react_avanzado',
    },
    {
        iconUrl: exercism,
        theme: 'btn-back-blue',
        name: 'My Exercism Codes',
        description: 'Solving programming challenges with the goal of having fun while exploring and mastering the depths of various programming languages.',
        link: 'https://github.com/ericluis12122/exercism',
    },
    {
        iconUrl: libro,
        theme: 'btn-back-pink',
        name: 'Library Management API',
        description: 'A robust API built with Spring Boot designed to manage a library system, including books and authors. This project supports full CRUD operations, allowing users to add, edit, and delete books and authors seamlessly. The database is managed using XAMPP, showcasing efficient database integration and backend development. Ideal for demonstrating RESTful API design and CRUD functionality in Java.',
        link: 'https://github.com/ericluis12122/biblioteca_API_spring_boot',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'Realtime Chat Application',
        description: 'A Realtime Chat Application built with React for the frontend and Node.js with the Socket.io library for real-time communication on the backend. This setup enables instant messaging between users in different chat rooms.',
        link: 'https://github.com/ericluis12122/chat_app',
    },
    {
        iconUrl: instagram,
        theme: 'btn-back-yellow',
        name: 'e_Instagram',
        description: 'Social Media application where users can: Register and log in. Create and edit their profiles. Post photos with descriptions. Follow other users. Like and comment on posts. The application is primarily built with Django, with AJAX used for specific frontend functionalities.',
        link: 'https://github.com/ericluis12122/e_instagram',
    }
];