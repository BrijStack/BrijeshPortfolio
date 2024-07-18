import { motion } from "framer-motion";
import { scalingHover, textAnimationVar } from "../assets/config/motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa";
import Divider from "../design/Divider";

const Contact = () => {
  return (
    <div className="h-full md:h-full w-full flex flex-col my-20 gap-5 md:gap-14">
      <div className="flex justify-end">
        <p className="text-slate-300 text-[18px] md:text-3xl leading-5 underline underline-offset-4">
          brijesh17091999@gmail.com
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-white py-5 my-20 gap-2">
        <div className="py-2 overflow-hidden ">
          <motion.div
            variants={textAnimationVar}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="mailto:brijesh17091999@gmail.com"
              className="font-poppins text-[50px] md:text-[150px] md:leading-[7rem] leading-[5rem]"
            >
              <div className="flex gap-2 md:gap-10 justify-center items-center">
                Get in Touch{" "}
                <FaLocationArrow className="text-[35px] md:text-[60px]" />
              </div>
            </motion.a>
          </motion.div>

          <Divider />
        </div>
        <div className="flex flex-row items-center justify-center text-white text-[35px] gap-14">
          <motion.a
            variants={scalingHover}
            whileHover="hover"
            className=" cursor-pointer"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            variants={scalingHover}
            whileHover="hover"
            className=" cursor-pointer"
          >
            <FaFacebookSquare />
          </motion.a>
          <motion.a
            variants={scalingHover}
            whileHover="hover"
            className=" cursor-pointer"
          >
            <FaInstagramSquare />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
