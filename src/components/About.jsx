import { motion, useInView } from "framer-motion";
import {
  buttonVarantAnmation,
  fadeTextAnimation,
  textAnimationVar,
} from "../assets/config/motion";
import { useRef } from "react";
import Button from "./Button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className=" flex  justify-center">
      <div className="flex flex-col md:gap-10 justify-center items-center text-white pt-5 my-16">
        <div className="py-12  overflow-hidden " ref={ref}>
          <motion.div
            variants={textAnimationVar}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h1>About Me</h1>
          </motion.div>
        </div>
        <motion.div
          variants={fadeTextAnimation}
          initial="initial"
          whileInView="animate"
          className="text-slate-300 font-medium text-[13px] md:text-[20px] text-center  md:px-20 leading-8 md:leading-9 md:w-[70%] flex flex-wrap gap-5"
        >
          <div>
            <p>
              Hi there! I&apos;m [Your Name], a data scientist specializing in
              data analytics, predictive modeling, natural language
              divprocessing, machine learning, and AI chatbots. With a passion
              for unraveling insights from complex datasets, I&apos;m dedicated
              to helping businesses make informed decisions and stay ahead in
              today&apos;s data-driven world.
            </p>
          </div>
          <div>
            <p>
              I bring a blend of technical expertise, hands-on experience, and a
              commitment to clear communication to every project. Whether
              it&apos;s uncovering hidden patterns, predicting future trends, or
              automating processes with AI, I&apos;m here to help you harness
              the full potential of your data.
            </p>
          </div>
          <div>
            <p>
              Let&apos;s work together to transform your data into actionable
              insights that drive real results. Get in touch, and let&apos;s
              start unlocking the power of your data today!
            </p>
          </div>
        </motion.div>
        <div className="mt-14">
          <Button
            variants={buttonVarantAnmation}
            initial="initial"
            whileHover="hover"
            whileTap="whiletap"
            className="text-[15px] h-16 rounded-[5px] relative z-0 font-medium"
            px="px-20"
            href="/contact"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
