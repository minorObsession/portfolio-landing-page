import "./App.css";
import Header from "./UI/Header";
import Landing from "./UI/Landing";
import Projects from "./UI/Projects";
import Skills from "./UI/Skills";

function App() {
  return (
    <div
      id="root"
      className="relative text-accent mx-auto text-center w-full min-h-screen overflow-hidden"
    >
      <div className="fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center filter blur-md"></div>
      <div className="relative z-10">
        <Header />
        <Landing />
        <Projects />
        <Skills />
        {/* <TechStack /> */}
      </div>
    </div>
  );
}

export default App;
