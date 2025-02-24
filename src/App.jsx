import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Landing from "./UI/Landing";
import Projects from "./UI/Projects";
import Sidebar from "./UI/Sidebar";
import Skills from "./UI/Skills";

// TODO: make background "move around" slightly (like space)

function App() {
  return (
    <div id="root" className="">
      {/*  // ! app container */}
      <div className="relative min-h-screen overflow-x-hidden ">
        <main className="">
          {/* <TechStack /> */}
          <Landing />
          <Sidebar />
          {/* <Skills />
          <Projects />
          <Footer /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
