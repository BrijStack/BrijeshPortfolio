import { motion } from "framer-motion";
import SkillAnimation from "./ui/SkillAnimation";
import { fadeTextAnimation } from "../assets/config/motion";
const Skills = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center items-center py-10">
      <motion.div
        variants={fadeTextAnimation}
        initial="initial"
        whileInView="animate"
        className="text-white w-full flex items-start justify-center flex-col pr-20"
      >
        <h1 className="leading-[8rem] text-[80px]">
          Elevate my web development skills with ease
        </h1>
        <p className="text-slate-300 leading-9 text-lg">
          I am dedicated to mastering the latest technologies and best practices
          in the industry. From front-end design to back-end development, I
          continually strive to create seamless, efficient, and innovative web
          solutions. My commitment to learning and adapting ensures that I can
          tackle any challenge and deliver top-notch results.
        </p>
      </motion.div>
      <motion.div
        variants={fadeTextAnimation}
        initial="initial"
        whileInView="animate"
        className="flex flex-col justify-center w-full items-center overflow-hidden  whitespace-nowrap h-[800px] "
      >
        <SkillAnimation />
      </motion.div>
    </div>
  );
};

export default Skills;
