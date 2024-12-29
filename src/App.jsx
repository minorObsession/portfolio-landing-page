import "./App.css";
import Header from "./UI/Header";
import Landing from "./UI/Landing";
import Projects from "./UI/Projects";
import Skills from "./UI/Skills";
import TechStack from "./UI/TechStack";

function App() {
  return (
    <div
      id="root"
      className="bg-background text-accent mx-auto text-center w-full min-h-screen"
    >
      <Header />
      <Landing />
      <Projects />
      <Skills />
      <TechStack />
    </div>
  );
}

export default App;
