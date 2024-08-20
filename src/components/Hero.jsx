import About from "./About";
import Experience from "./Experience";
import Overview from "./Overview";
import Projects from "./Projects";
import Skills from "./Skills";

const HeroSingle = () => {
  return (
    <>
      <section className="hero-background bg-[length:60%] bg-no-repeat bg-center ">
        <Overview />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default HeroSingle;
