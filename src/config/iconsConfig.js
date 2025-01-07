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
  HTML: { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
  CSS: { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
  JavaScript: { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
  Git: { icon: <FaGit color="#F05032" />, name: "Git" },
  GitHub: { icon: <FaGithub color="#181717" />, name: "GitHub" },
  React: { icon: <FaReact color="#61DAFB" />, name: "React" },
  Redux: { icon: <SiRedux color="#764ABC" />, name: "Redux" },
  "React Query": {
    icon: <SiReactquery color="#FF4154" />,
    name: "React Query",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss color="#06B6D4" />,
    name: "Tailwind CSS",
  },
  Bootstrap: { icon: <SiBootstrap color="#7952B3" />, name: "Bootstrap" },
  "Styled Components": {
    icon: <SiStyledcomponents color="#DB7093" />,
    name: "Styled Components",
  },
  Supabase: { icon: <SiSupabase color="#3ECF8E" />, name: "Supabase" },
  Jest: { icon: <SiJest color="#C21325" />, name: "Jest" },
  "React Testing Library": {
    icon: <SiTestinglibrary color="#E33332" />,
    name: "React Testing Library",
  },
};

export default iconsConfig;
