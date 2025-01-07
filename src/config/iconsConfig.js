import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import {
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiBootstrap,
  SiStyledcomponents,
  SiSupabase,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";

const iconsConfig = {
  HTML: {
    icon: React.createElement(FaHtml5, { color: "#E34F26" }),
    name: "HTML",
  },
  CSS: {
    icon: React.createElement(FaCss3Alt, { color: "#1572B6" }),
    name: "CSS",
  },
  JavaScript: {
    icon: React.createElement(FaJs, { color: "#F7DF1E" }),
    name: "JavaScript",
  },
  Git: { icon: React.createElement(FaGit, { color: "#F05032" }), name: "Git" },
  GitHub: {
    icon: React.createElement(FaGithub, { color: "#181717" }),
    name: "GitHub",
  },
  React: {
    icon: React.createElement(FaReact, { color: "#61DAFB" }),
    name: "React",
  },
  Redux: {
    icon: React.createElement(SiRedux, { color: "#764ABC" }),
    name: "Redux",
  },
  "React Query": {
    icon: React.createElement(SiReactquery, { color: "#FF4154" }),
    name: "React Query",
  },
  "Tailwind CSS": {
    icon: React.createElement(SiTailwindcss, { color: "#06B6D4" }),
    name: "Tailwind CSS",
  },
  Bootstrap: {
    icon: React.createElement(SiBootstrap, { color: "#7952B3" }),
    name: "Bootstrap",
  },
  "Styled Components": {
    icon: React.createElement(SiStyledcomponents, { color: "#DB7093" }),
    name: "Styled Components",
  },
  Supabase: {
    icon: React.createElement(SiSupabase, { color: "#3ECF8E" }),
    name: "Supabase",
  },
  Jest: {
    icon: React.createElement(SiJest, { color: "#C21325" }),
    name: "Jest",
  },
  "React Testing Library": {
    icon: React.createElement(SiTestinglibrary, { color: "#E33332" }),
    name: "React Testing Library",
  },
};

export default iconsConfig;
