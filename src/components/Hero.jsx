import React from "react";
import sillylittleguy from "../../public/sillylittleguy.webp";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Développeuse Fullstack",
                1000,
                "Transformation digitale",
                1000,
                "Frontend & Backend",
                1000,
                "Alternante",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-pink-light/80"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-gray-800 dark:text-pink-light uppercase"
            >
              Hey, moi
              <br />
              <span className="text-pink-dark dark:text-pink uppercase">
                c'est Emma
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className="dark:text-gray-300 text-gray-600 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
            >
              Spécialisée en programmation & Web Design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="px-6 py-3 bg-pink dark:bg-pink-dark text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="px-6 py-3 bg-white/50 dark:bg-darkPink-light/30 backdrop-blur-sm text-gray-800 dark:text-pink-light font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] md:w-[450px]">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-pink to-purple-400 dark:from-pink-dark dark:to-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <motion.img
              src={sillylittleguy}
              className="relative w-full overflow-hidden dark:border-darkPink-light/30"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
      {/* 
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div> */}
    </div>
  );
};

export default Hero;
