import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import MySkills from "./pages/skills/Skills";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import "./OneApp.css";

function App() {
  return (
    <>
      <div
        style={{
          // border: "1px solid white",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#101010",
          zIndex: "999",
        }}
      >
        <Header />
      </div>
      <Landing />
      <About />
      <MySkills />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
