import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Gulam Mustafa",
    location: "Mumbai, Maharastra",
    tagline: "Full Stack Web Developer",
    email: "gulam.mu159@gmail.com",
    brand:
      "An Enthusiastic and highly motivated full stack web developer with a strong foundation to write web applications using both frontend and back-end technologies. Strong problem-solving skill, ability to learn quickly and ability to work in a team. looking for the job opportunities in tech driven organizations.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
