// // "use client";

// // import { motion } from "framer-motion";

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: (i = 0) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delay: i * 0.08,
// //       type: "tween",
// //       ease: "easeIn",
// //       duration: 0.7,
// //     },
// //   }),
// // };

// // export const AwardSection = () => {
// //   return (
// //     <motion.section
// //       className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: false, amount: 0.2 }}
// //       variants={fadeUp}
// //     >
// //       {/* Award Winning Section */}
// //       <motion.div
// //         className="flex flex-col items-center text-center w-full mb-16"
// //         variants={fadeUp}
// //         custom={0}
// //       >
// //         <motion.h2
// //           className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-4"
// //           variants={fadeUp}
// //           custom={0.1}
// //         >
// //           Award Winning
// //         </motion.h2>
// //         <motion.h1
// //           className="text-3xl md:text-5xl lg:text-6xl min-[2560px]:text-7xl font-bold text-white mb-6"
// //           variants={fadeUp}
// //           custom={0.2}
// //         >
// //           Software Development Company
// //         </motion.h1>
// //         <motion.p
// //           className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
// //           variants={fadeUp}
// //           custom={0.3}
// //         >
// //           V-Accel, a premier Custom Software Development company, excels in crafting bespoke enterprise solutions tailored to your company&apos;s unique requirements. Beyond mere technical expertise, we embody visionary creativity, adept at turning potential into tangible achievements.
// //         </motion.p>
// //       </motion.div>

// //       {/* Our Mission Section */}
// //       <motion.div
// //         className="flex flex-col items-center text-center w-full mb-16"
// //         variants={fadeUp}
// //         custom={0.4}
// //       >
// //         <motion.h2
// //           className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-6"
// //           variants={fadeUp}
// //           custom={0.5}
// //         >
// //           ion
// //         </motion.h2>
// //         <motion.p
// //           className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
// //           variants={fadeUp}
// //           custom={0.6}
// //         >
// //           To furnish groundbreaking, customized software solutions that surpass expectations, propelling our clients towards unparalleled success. We remain at the forefront of industry trends and standards, ensuring our clients maintain a competitive edge in their respective markets.
// //         </motion.p>
// //       </motion.div>

// //       {/* Achievement Cards */}
// //       <motion.div
// //         className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
// //         variants={fadeUp}
// //         custom={0.7}
// //       >
// //         <motion.div
// //           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
// //           variants={fadeUp}
// //           custom={0.8}
// //         >
// //           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
// //             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //             </svg>
// //           </div>
// //           <span className="text-white text-lg font-medium">8+ Years of Experience</span>
// //         </motion.div>

// //         <motion.div
// //           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
// //           variants={fadeUp}
// //           custom={0.9}
// //         >
// //           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
// //             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //             </svg>
// //           </div>
// //           <span className="text-white text-lg font-medium">In-House Professionals</span>
// //         </motion.div>

// //         <motion.div
// //           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
// //           variants={fadeUp}
// //           custom={1.0}
// //         >
// //           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
// //             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //             </svg>
// //           </div>
// //           <span className="text-white text-lg font-medium">25+ Projects Wrapped Up</span>
// //         </motion.div>

// //         <motion.div
// //           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
// //           variants={fadeUp}
// //           custom={1.1}
// //         >
// //           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
// //             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
// //               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //             </svg>
// //           </div>
// //           <span className="text-white text-lg font-medium">100% Client Approval Score</span>
// //         </motion.div>
// //       </motion.div>

// //       {/* Statistics Section */}
// //       <motion.div
// //         className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12"
// //         variants={fadeUp}
// //         custom={1.2}
// //       >
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
// //           <motion.div
// //             className="flex flex-col items-center"
// //             variants={fadeUp}
// //             custom={1.3}
// //           >
// //             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">12+</span>
// //             <span className="text-black font-semibold text-lg tracking-wider">COUNTRIES</span>
// //           </motion.div>

// //           <motion.div
// //             className="flex flex-col items-center md:border-l md:border-r border-black/20"
// //             variants={fadeUp}
// //             custom={1.4}
// //           >
// //             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">25+</span>
// //             <span className="text-black font-semibold text-lg tracking-wider">PROJECTS DELIVERED</span>
// //           </motion.div>

// //           <motion.div
// //             className="flex flex-col items-center"
// //             variants={fadeUp}
// //             custom={1.5}
// //           >
// //             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">8+</span>
// //             <span className="text-black font-semibold text-lg tracking-wider">YEARS OF EXPERIENCE</span>
// //           </motion.div>
// //         </div>
// //       </motion.div>
// //     </motion.section>
// //   );
// // };


// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.08,
//       type: "tween",
//       ease: "easeIn",
//       duration: 0.7,
//     },
//   }),
// };
// import React, { useRef } from "react";
// import { useInView } from "framer-motion";

// const SectionWrapper = ({ children, className = "" }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-50px" });

//     return (
//         <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 100 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//             transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//             className={className}
//         >
//             {children}
//         </motion.div>
//     );
// };

// export const AwardSection = () => {
//   return (
//     <motion.section
//       className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }}
//       variants={fadeUp}
//     >
//       {/* Award Winning Section */}
//       <motion.div
//         className="flex flex-col items-center text-center w-full mb-16"
//         variants={fadeUp}
//         custom={0}
//       >
//         <motion.h2
//           className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-4"
//           variants={fadeUp}
//           custom={0.1}
//         >
//           Award Winning
//         </motion.h2>
//         <motion.h1
//           className="text-3xl md:text-5xl lg:text-6xl min-[2560px]:text-7xl font-bold text-white mb-6"
//           variants={fadeUp}
//           custom={0.2}
//         >
//          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//   Software Development Company
// </span>
//         </motion.h1>
//         <motion.p
//           className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
//           variants={fadeUp}
//           custom={0.3}
//         >
//           V-Accel, a premier Custom Software Development company, excels in crafting bespoke enterprise solutions tailored to your company&apos;s unique requirements. Beyond mere technical expertise, we embody visionary creativity, adept at turning potential into tangible achievements.
//         </motion.p>
//       </motion.div>

//       {/* Our Mission Section */}
//      {/* Mission Section */}
//                <SectionWrapper className="z-10 max-w-7xl w-full">
//                    <motion.section
//                        initial={{ opacity: 0 }}
//                        animate={{ opacity: 1 }}
//                        transition={{ duration: 1 }}
//                    >
//                        <motion.div 
//                            className="p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20"
//                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
//                            animate={{ opacity: 1, scale: 1, y: 0 }}
//                            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//                            whileHover={{
//                                scale: 1.02,
//                                boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
//                                transition: { duration: 0.3 }
//                            }}
//                        >
//                            <motion.h3 
//                                className="text-2xl font-semibold text-white mb-4 text-center"
//                                initial={{ opacity: 0, y: 20 }}
//                                animate={{ opacity: 1, y: 0 }}
//                                transition={{ delay: 0.2 }}
//                            >
//                               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Our </span>Mission
//                            </motion.h3>
//                            <motion.p 
//                                className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed"
//                                initial={{ opacity: 0, y: 20 }}
//                                animate={{ opacity: 1, y: 0 }}
//                                transition={{ delay: 0.4 }}
//                            >
//           To furnish groundbreaking, customized software solutions that surpass expectations, propelling our clients towards unparalleled success. We remain at the forefront of industry trends and standards, ensuring our clients maintain a competitive edge in their respective markets.
//            </motion.p>
//                            </motion.div>
//                        </motion.section>
//                    </SectionWrapper>

//       {/* Achievement Cards */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
//         variants={fadeUp}
//         custom={0.7}
//       >
//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={0.8}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">8+ Years of Experience</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={0.9}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">In-House Professionals</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={1.0}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">25+ Projects Wrapped Up</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={1.1}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">100% Client Approval Score</span>
//         </motion.div>
//       </motion.div>

//       {/* Statistics Section */}
//       <motion.div
//         className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12"
//         variants={fadeUp}
//         custom={1.2}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <motion.div
//             className="flex flex-col items-center"
//             variants={fadeUp}
//             custom={1.3}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">12+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">COUNTRIES</span>
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center md:border-l md:border-r border-black/20"
//             variants={fadeUp}
//             custom={1.4}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">25+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">PROJECTS DELIVERED</span>
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center"
//             variants={fadeUp}
//             custom={1.5}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">8+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">YEARS OF EXPERIENCE</span>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// };

// "use client";

// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.08,
//       type: "tween",
//       ease: "easeIn",
//       duration: 0.7,
//     },
//   }),
// };

// export const AwardSection = () => {
//   return (
//     <motion.section
//       className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: false, amount: 0.2 }}
//       variants={fadeUp}
//     >
//       {/* Award Winning Section */}
//       <motion.div
//         className="flex flex-col items-center text-center w-full mb-16"
//         variants={fadeUp}
//         custom={0}
//       >
//         <motion.h2
//           className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-4"
//           variants={fadeUp}
//           custom={0.1}
//         >
//           Award Winning
//         </motion.h2>
//         <motion.h1
//           className="text-3xl md:text-5xl lg:text-6xl min-[2560px]:text-7xl font-bold text-white mb-6"
//           variants={fadeUp}
//           custom={0.2}
//         >
//          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Development Company</span>
//         </motion.h1>
//         <motion.p
//           className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
//           variants={fadeUp}
//           custom={0.3}
//         >
//           V-Accel, a premier Custom Software Development company, excels in crafting bespoke enterprise solutions tailored to your company&apos;s unique requirements. Beyond mere technical expertise, we embody visionary creativity, adept at turning potential into tangible achievements.
//         </motion.p>
//       </motion.div>

//       {/* Our Mission Section */}
//       <motion.div
//         className="flex flex-col items-center text-center w-full mb-16"
//         variants={fadeUp}
//         custom={0.4}
//       >
//         <motion.h2
//           className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-6"
//           variants={fadeUp}
//           custom={0.5}
//         >
//           Our Mission
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
//           variants={fadeUp}
//           custom={0.6}
//         >
//           To furnish groundbreaking, customized software solutions that surpass expectations, propelling our clients towards unparalleled success. We remain at the forefront of industry trends and standards, ensuring our clients maintain a competitive edge in their respective markets.
//         </motion.p>
//       </motion.div>

//       {/* Achievement Cards */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
//         variants={fadeUp}
//         custom={0.7}
//       >
//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={0.8}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">8+ Years of Experience</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={0.9}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">In-House Professionals</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={1.0}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">25+ Projects Wrapped Up</span>
//         </motion.div>

//         <motion.div
//           className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
//           variants={fadeUp}
//           custom={1.1}
//         >
//           <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
//             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white text-lg font-medium">100% Client Approval Score</span>
//         </motion.div>
//       </motion.div>

//       {/* Statistics Section */}
//       <motion.div
//         className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12"
//         variants={fadeUp}
//         custom={1.2}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           <motion.div
//             className="flex flex-col items-center"
//             variants={fadeUp}
//             custom={1.3}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">12+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">COUNTRIES</span>
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center md:border-l md:border-r border-black/20"
//             variants={fadeUp}
//             custom={1.4}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">25+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">PROJECTS DELIVERED</span>
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center"
//             variants={fadeUp}
//             custom={1.5}
//           >
//             <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">8+</span>
//             <span className="text-black font-semibold text-lg tracking-wider">YEARS OF EXPERIENCE</span>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.section>
//   );
// };



"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "tween",
      ease: "easeIn",
      duration: 0.7,
    },
  }),
};

// Custom hook for animated counters
const useAnimatedCounter = (target, duration = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startValue + (target - startValue) * easeOut);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);
  
  return { ref, value: count };
};

// Animated Counter Component
const AnimatedCounter = ({ target, suffix = "", className = "" }) => {
  const { ref, value } = useAnimatedCounter(target);
  
  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  );
};

export const AwardSection = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
    >
      {/* Award Winning Section */}
      <motion.div
        className="flex flex-col items-center text-center w-full mb-16"
        variants={fadeUp}
        custom={0}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-4"
          variants={fadeUp}
          custom={0.1}
        >
          Award Winning
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl min-[2560px]:text-7xl font-bold text-white mb-6"
          variants={fadeUp}
          custom={0.2}
        >
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Software Development Company</span>
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
          variants={fadeUp}
          custom={0.3}
        >
          V-Accel, a premier Custom Software Development company, excels in crafting bespoke enterprise solutions tailored to your company&apos;s unique requirements. Beyond mere technical expertise, we embody visionary creativity, adept at turning potential into tangible achievements.
        </motion.p>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        className="flex flex-col items-center text-center w-full mb-16"
        variants={fadeUp}
        custom={0.4}
      >
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl min-[2560px]:text-5xl font-semibold text-white mb-6"
          variants={fadeUp}
          custom={0.5}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl min-[2560px]:text-2xl leading-relaxed max-w-4xl"
          variants={fadeUp}
          custom={0.6}
        >
          To furnish groundbreaking, customized software solutions that surpass expectations, propelling our clients towards unparalleled success. We remain at the forefront of industry trends and standards, ensuring our clients maintain a competitive edge in their respective markets.
        </motion.p>
      </motion.div>

      {/* Achievement Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16"
        variants={fadeUp}
        custom={0.7}
      >
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
          variants={fadeUp}
          custom={0.8}
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">
            <AnimatedCounter target={8} suffix="+ Years of Experience" />
          </span>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
          variants={fadeUp}
          custom={0.9}
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">In-House Professionals</span>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
          variants={fadeUp}
          custom={1.0}
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">
            <AnimatedCounter target={25} suffix="+ Projects Wrapped Up" />
          </span>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex items-center gap-4"
          variants={fadeUp}
          custom={1.1}
        >
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium">
            <AnimatedCounter target={100} suffix="% Client Approval Score" />
          </span>
        </motion.div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12"
        variants={fadeUp}
        custom={1.2}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="flex flex-col items-center"
            variants={fadeUp}
            custom={1.3}
          >
            <AnimatedCounter 
              target={12} 
              suffix="+" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
            />
            <span className="text-black font-semibold text-lg tracking-wider">COUNTRIES</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:border-l md:border-r border-black/20"
            variants={fadeUp}
            custom={1.4}
          >
            <AnimatedCounter 
              target={25} 
              suffix="+" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
            />
            <span className="text-black font-semibold text-lg tracking-wider">PROJECTS DELIVERED</span>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            variants={fadeUp}
            custom={1.5}
          >
            <AnimatedCounter 
              target={8} 
              suffix="+" 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2"
            />
            <span className="text-black font-semibold text-lg tracking-wider">YEARS OF EXPERIENCE</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};