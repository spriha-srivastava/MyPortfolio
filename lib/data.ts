import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGoogle, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import CryptoInfo from "@/public/cryptoInfo.png";
import geminiimg from "@/public/gemini.png";
import wetherapp from "@/public/weather.png";
import memegenerator from "@/public/memegenerator.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Web Development Intern | Lets Grow More",
    location: "Remote",
    description: `
      Designed a responsive landing page using HTML, CSS, and JavaScript.
      Built a React application for data display using APIs.
      Developed a student record management system using HTML, CSS, PHP, and MySQL.
    `,
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Jan 2024",
  },
  
  {
    title: "Babu Banarasi Das Institute of Technology and Management",
    location: "Lucknow , Uttar Pradesh",
    description:
      "Bachelor of Technology in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
] as const;

export const projectsData = [
  {
    title: "Whatsapp-Clone",
    description: `
     Built a WhatsApp-like Android app with OTP login, and functional Chats, Status & Calls screens using React Navigation. Designed clean UI with smooth navigation and mobile responsiveness.
    `,
    tags: ["React Native", "Expo", "Andriod", "Git", "VS Code"],
    imageUrl: ,
    GitHubUrl: "https://github.com/spriha-srivastava/Clone-Whatsapp.git",
  },
  {
    title: "Crypto Info Web App",
    description:
      "It allows users to view the real‑time prices of various cryptocurrencies.It uses the react‑chartjs‑2 library which allow to easily track the price movements of cryptocurrencies.",
    tags: ["React", "Chart 2 js", "Axios", "CoinGecko API"],
    imageUrl: CryptoInfo,
    GitHubUrl: "https://github.com/spriha-srivastava/crypto-info",
  },
  {
  title: "AI Chat-Bot",
    description: `
      Built a responsive interface using React.js and Google Generative AI .Integrated external APIs for fetching dynamic data and implemented robust error handling.
    `,
    tags: ["React.js", "Google Generative AI", "CSS3", "Git", "VS Code"],
    imageUrl: geminiimg,
    GitHubUrl: "https://github.com/spriha-srivastava/gemini",
  },
  {
    title: "Weather Web App",
    description: `
      Fetches and displays current weather details such as temperature, humidity, wind speed, and conditions using an API.
      Enables users to search weather information by city name.
      Ensures seamless compatibility across all devices, including desktops, tablets, and smartphones.
    `,
    tags: ["HTML5", "CSS3", "JavaScript", "Fetch API", "Git", "VS Code"],
    imageUrl: wetherapp,
    GitHubUrl: "https://github.com/spriha-srivastava/weather-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Figma",
  "Express",
  "React Native",
  
] as const;
