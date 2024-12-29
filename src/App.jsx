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
      className="bg-background mx-auto text-accent text-center w-full h-full"
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
