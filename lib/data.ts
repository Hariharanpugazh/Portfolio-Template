import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import Drop from "@/public/Drop.png";
import predict from "@/public/Predict.jpg";
import AI from "@/public/AI.png";

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
    title: "Full Stack Developer",
    location: "Tamilnadu, India",
    description:
      "Worked as Full Stack Developer in OneDot Communication.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "Genpact Intern",
    location: "Banglore, IN",
    description:
      "Working in real-time projects as Intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ZARA - An AI Bot",
    description:
      "Developed a Telegram chatbot using the GPT-3.5 model capable of generating text responses and storing/retrieving images, videos, and documents.",
    tags: [
      "PYTHON",
      "GEMINI",
      "TELEGRAM API",
      "GENAI",
    ],
    imageUrl: AI,
    link: "",
  },

  {
    title: "DeepSecure AI",
    description:
      "• Developed an AI-driven solution to automatically detect and obscure sensitive information in the search results of web applications.",
    tags: ["TENSORFLOW", "PYTORCH", "OPENCV", "TESSERACT OCR"],
    imageUrl: Drop,
    link: "",
  },
] as const;

export const skillsData = [
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "React.js",
  "Next.js",
  "Git",
  "SQL",
  "Machine Learning",
  "Databricks",
] as const;
