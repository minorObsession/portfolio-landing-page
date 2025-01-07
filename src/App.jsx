import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Landing from "./UI/Landing";
import Projects from "./UI/Projects";
import Skills from "./UI/Skills";

// TODO: make background "move" slightly
function App() {
  return (
    <div
      id="root"
      className="relative text-accent mx-auto text-center w-full min-h-screen overflow-hidden"
    >
      <div className="fixed inset-0 bg-[url('/b3.jpg')] bg-cover bg-center filter blur-[0.5px]"></div>
      <div className="fixed inset-0 bg-black opacity-30"></div> {/* Overlay */}
      <div className="relative z-10">
        <Header />
        <Landing />
        <Skills />
        <Projects />
        {/* <TechStack /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
