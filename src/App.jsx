import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Landing from "./UI/Landing";
import Projects from "./UI/Projects";
import Skills from "./UI/Skills";

// TODO: make background "move around" slightly (like space)

function App() {
  return (
    <div id="root" className="">
      {/*  // ! app container */}
      <div className="relative w-screen h-screen mx-auto overflow-hidden text-center "></div>

      <main className="relative z-10">
        <Header />
        <Landing />
        <Skills />
        <Projects />
        {/* <TechStack /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
