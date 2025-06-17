"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/lib/motion";

const services = [
  "Customer Retention System",
  "Enterprise Resource Planning",
  "Customer Relationship Management",
  "HR Software",
  "Data Analytics",
  "IT Service Management",
  "Ecommerce",
  "Supply Chain",
  "Web Portals",
];


const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const Projects = () => {
  return (
    <>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         font-semibold text-white text-center
                         mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20
                         leading-tight
                         min-[2560px]:text-9xl min-[2560px]:mb-24 min-[2560px]:max-w-[1800px]"
        >

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Our Expertise{" "}
          </span>
        </motion.div>

      {/* Main Section */}
      <section
        id="projects"
        className="flex flex-col lg:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-20 gap-10"
      >
        {/* Left Image - 25% */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/4 flex justify-center"
        >
          <img
            src="/work/Expertise.png"
            alt="Consultation"
            className="w-[260px] md:w-[300px] lg:w-[320px] h-auto object-contain"
          />
        </motion.div>

        {/* Right Content - 75% */}
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl sm:text-2xl md:text-3xl text-white mb-4 max-w-lg"
          >
            We’re More than Just Developers. <br />
            We Solve Real-world Problems <br />
            By Creating Better Digital Solutions.
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-sm sm:text-base text-white max-w-xl mb-8"
          >
            As a full-stack software development agency, we make some extraordinary things that engage your users.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl justify-center">
            {services.map((service, index) => (
              <motion.div
                key={service}
                className="relative text-white text-center rounded-2xl p-4 shadow-lg backdrop-blur-md bg-white/10 border border-white/20 transition-transform duration-300 hover:scale-105 hover:z-10"
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ rotate: [0, 1.5, -1.5, 1, 0] }}
                transition={{ type: "spring", stiffness: 100 }}
                variants={fadeUp}
              >
                <h3 className="text-sm sm:text-base font-medium">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};
