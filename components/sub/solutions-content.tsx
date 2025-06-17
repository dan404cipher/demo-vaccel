
"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

const solutions = [
  { title: 'ERP', description: 'Streamline your entire business operations' },
  { title: 'CRM', description: 'Build stronger customer relationships' },
  { title: 'HR Software', description: 'Simplify employee management' },
  { title: 'Enterprise Applications', description: 'Power your business with custom solutions' },
  { title: 'Data Analytics', description: 'Turn data into actionable insights' },
  { title: 'IT Service Management', description: 'Optimize your IT operations' },
  { title: 'Ecommerce', description: 'Scale your online business' },
  { title: 'Supply Chain', description: 'Optimize your logistics network' },
  { title: 'Web Portals', description: 'Create seamless digital experiences' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const SolutionsContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-14 lg:px-20 mt-20 lg:mt-60 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromTop(0.2)}
        className="flex flex-col items-center gap-6 lg:gap-8 max-w-[1200px] text-center lg:text-left"
      >
        <motion.h2
          variants={slideInFromTop(0.4)}
          className="text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          We&apos;re More than Just{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Developers
          </span>. We{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Solve
          </span>{" "}
          Real-world Problems By Creating{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Better Digital Solutions
          </span>.
        </motion.h2>

        <motion.p
          variants={slideInFromTop(0.6)}
          className="text-base  text-center sm:text-lg text-gray-400 font-semibold max-w-[800px]"
        >
          As a full-stack software development agency, we make extraordinary things that engage your users.
        </motion.p>

        {/* Responsive grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 w-full max-w-[1200px]">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-xl p-4 sm:p-5 flex flex-col items-center justify-center min-h-[150px] transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/30 hover:shadow-purple-500/20"
            >
              <span className="text-lg sm:text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
                {solution.title}
              </span>
              <span className="text-sm sm:text-base text-gray-400 text-center">
                {solution.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
