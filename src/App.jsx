import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProgressBar from "./design/ProgressBar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div className="pt-[2rem] lg:pt-[2.25rem] px-6 lg:px-8 xl:px-20 max-lg:py-4  overflow-hidden">
        <ProgressBar />
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="brijeshportfolio/#/projects" element={<Projects />} />
          <Route
            path="brijeshportfolio/#/experiences"
            element={<Experience />}
          />
          <Route path="brijeshportfolio/#/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
