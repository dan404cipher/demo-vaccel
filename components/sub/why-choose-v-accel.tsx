// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion, Variants, useInView } from 'framer-motion';
// import { Search, Palette, Laptop, Zap, Rocket, RefreshCw } from 'lucide-react';

// const PARTICLE_COUNT = 50;

// function getRandomParticleStyle(): React.CSSProperties {
//     return {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${Math.random() * 6 + 4}px`,
//         height: `${Math.random() * 6 + 4}px`,
//         backgroundColor: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4',
//         borderRadius: '9999px',
//         opacity: Math.random() * 0.4 + 0.1,
//         position: 'absolute',
//         animation: `float ${Math.random() * 8 + 4}s ease-in-out ${Math.random() * 10}s infinite`,
//         boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
//     };
// }

// const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
//     id: i,
//     style: getRandomParticleStyle(),
// }));

// const whatWeDoCards = [
//     {
//         title: 'Custom Software Development',
//         points: [
//       'Frontend','Backend','Mobile Apps','APIs','Database','Cloud','Authentication','Hosting'
//     ],
//         icon: '💻',
//         border: 'border-purple-500/30',
//         shadow: 'hover:shadow-purple-500/25'
//     },
    
//     {
//         title: 'DevOps & Cloud Engineering',
//           points: [
//       'CI/CD','Containerization','Infrastructure as Code','Monitoring','Cloud Platforms','Serverless','Security'
//     ],
//         icon: '📊',
//         border: 'border-orange-500/30',
//         shadow: 'hover:shadow-orange-500/25'
//     },
//     {
//         title: 'SaaS Product Development',
//         points: [
//       'Web Framework','Billing & Payments','Authentication/SSO','Backend APIs','Database','Multi-Tenancy','Deployment/Hosting','Storage & CDN',
//     ],
//         icon: '🌐',
//         border: 'border-cyan-500/30',
//         shadow: 'hover:shadow-cyan-500/25'
//     },
//     {
//         title: 'AI & ML Engineering',
//        points: [
//       'LLMs & Generative AI','Fine-Tuning Models','AI Development','Vector Databases','Computer Vision','NLP','MLOps','AI Infrastructure',
//     ],
//         icon: '🤖',
//         border: 'border-emerald-500/30',
//         shadow: 'hover:shadow-emerald-500/25'
//     }
// ];

// const highlights = [
//     {
//         title: "AI-First Approach",
//         description: "We don't just build — we think with your software.",
//         icon: "🧠",
//         border: "border-purple-500/30",
//         shadow: "hover:shadow-purple-500/25"
//     },
//     {
//         title: "Zero Template Policy", 
//         description: "Every module is crafted ground-up, no generic kits.",
//         icon: "🛡️",
//         border: "border-cyan-500/30",
//         shadow: "hover:shadow-cyan-500/25"
//     },
//     {
//         title: "Experience-Driven Design",
//         description: "Built around user behavior, not developer convenience.",
//         icon: "🪄", 
//         border: "border-emerald-500/30",
//         shadow: "hover:shadow-emerald-500/25"
//     },
//     {
//         title: "Scalability Embedded",
//         description: "Your MVP today can be your platform tomorrow.",
//         icon: "📈",
//         border: "border-orange-500/30",
//         shadow: "hover:shadow-orange-500/25"
//     },
// ];

// // Timeline data - removed period field
// interface TimelineItemType {
//     id: string;
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     category: 'primary' | 'secondary';
//     details?: string[];
// }

// const timelineData: TimelineItemType[] = [
//     {
//         id: 'decode',
//         title: 'Decode',
//         description: 'We deep-dive into your business logic, users, and industry', 
//         icon: <Search className="text-white" />,
//         category: 'primary',
//         details: [
//             'Business analysis',
//             'User research',
//             'Market insights',
//             'Technical requirements'
//         ]
//     },
//     {
//         id: 'design',
//         title: 'Design',
//         description: 'Every line, button, and flow is tailor-made, pixel-perfect',
//         icon: <Palette className="text-white" />,
//         category: 'secondary',
//         details: [
//             'UI/UX design',
//             'User flow mapping',
//             'Interactive prototypes',
//             'Design systems'
//         ]
//     },
//     {
//         id: 'develop',
//         title: 'Develop',
//         description: 'Clean, scalable, and efficient code that aligns with your DNA',
//         icon: <Laptop className="text-white" />,
//         category: 'primary',
//         details: [
//             'Clean code practices',
//             'Modern tech stack',
//             'Scalable architecture',
//             'Security-first approach'
//         ]
//     },
//     {
//         id: 'distill',
//         title: 'Distill',
//         description: "Testing, refining, and optimizing until it's frictionless",
//         icon: <Zap className="text-white" />,
//         category: 'secondary',
//         details: [
//             'Performance testing', 
//             'Quality assurance',
//             'User testing',
//             'Optimization'
//         ]
//     },
//     {
//         id: 'deploy',
//         title: 'Deploy',
//         description: 'Fast, safe, and scalable launches with zero stress',
//         icon: <Rocket className="text-white" />,
//         category: 'primary',
//         details: [
//             'CI/CD pipelines',
//             'Zero-downtime deployment',
//             'Monitoring setup',
//             'Security checks'
//         ]
//     },
//     {
//         id: 'dynamic',
//         title: 'Dynamic',
//         description: 'Evolve as you grow — continuous support and innovation',
//         icon: <RefreshCw className="text-white" />,
//         category: 'secondary',
//         details: [
//             'Continuous updates',
//             'Performance monitoring',
//             'Feature expansion',
//             'Technical support'
//         ]
//     }
// ];

// interface TimelineNodeProps {
//     item: TimelineItemType;
//     index: number;
// }

// const TimelineNode: React.FC<TimelineNodeProps> = ({ item, index }) => {
//     const isEven = index % 2 === 0;
//     const ref = React.useRef(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" });

//     return (
//         <div ref={ref} className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} w-full`}>
//             <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2" />

//             <motion.div
//                 className={`relative z-10 w-full sm:w-3/5 md:w-1/2 mb-16 ${isEven ? 'mr-auto pr-4 sm:pr-8' : 'ml-auto pl-4 sm:pl-8'}`}
//                 initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
//                 animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
//                 transition={{ 
//                     duration: 0.8, 
//                     delay: index * 0.15,
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 15
//                 }}
//                 whileHover={{ 
//                     scale: 1.05, 
//                     y: -5,
//                     transition: { duration: 0.2 }
//                 }}
//             >
//                 <motion.div
//                     className={`absolute top-1/3 ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-5 h-5 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-cyan-500 z-20`}
//                     initial={{ scale: 0, rotate: 0 }}
//                     animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
//                     transition={{ 
//                         type: 'spring', 
//                         stiffness: 400, 
//                         delay: index * 0.15 + 0.3, 
//                         duration: 0.6
//                     }}
//                     whileHover={{ 
//                         scale: 1.3, 
//                         boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
//                         transition: { duration: 0.2 }
//                     }}
//                 />

//                 <motion.div
//                     className={`rounded-xl overflow-hidden ${
//                         item.category === 'primary'
//                             ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border border-purple-500/30'
//                             : 'bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border border-cyan-500/30'
//                     } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
//                     whileHover={{
//                         borderColor: item.category === 'primary' ? 'rgba(168, 85, 247, 0.6)' : 'rgba(6, 182, 212, 0.6)',
//                         boxShadow: item.category === 'primary' 
//                             ? '0 25px 50px -12px rgba(168, 85, 247, 0.25)' 
//                             : '0 25px 50px -12px rgba(6, 182, 212, 0.25)',
//                         transition: { duration: 0.3 }
//                     }}
//                     layout
//                 >
//                     <div className="p-6">
//                         <motion.div 
//                             className="text-4xl mb-4 text-white"
//                             whileHover={{ 
//                                 scale: 1.2, 
//                                 rotate: 10,
//                                 transition: { duration: 0.2 }
//                             }}
//                         >
//                             {item.icon}
//                         </motion.div>
//                         <motion.h3 
//                             className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                             transition={{ delay: index * 0.15 + 0.5 }}
//                         >
//                             {item.title}
//                         </motion.h3>
//                         <motion.p 
//                             className="text-white/80 text-sm leading-relaxed mb-4"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                             transition={{ delay: index * 0.15 + 0.6 }}
//                         >
//                             {item.description}
//                         </motion.p>
//                         {item.details && (
//                             <motion.ul 
//                                 className="list-disc list-inside text-white/70 text-sm space-y-1 pl-2"
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={isInView ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
//                                 transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
//                             >
//                                 {item.details.map((detail, idx) => (
//                                     <motion.li 
//                                         key={idx}
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                                         transition={{ delay: index * 0.15 + 0.8 + (idx * 0.1) }}
//                                     >
//                                         {detail}
//                                     </motion.li>
//                                 ))}
//                             </motion.ul>
//                         )}
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.2,
//             delayChildren: 0.1
//         }
//     }
// };

// const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
//     const ref = React.useRef(null);
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

// export default function WhyChooseVAccel() {
//     const [currentBouncingIndex, setCurrentBouncingIndex] = useState(0);
//     const [currentBouncingIndexWhy, setCurrentBouncingIndexWhy] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentBouncingIndex((prev) => (prev + 1) % whatWeDoCards.length);
//         }, 1500);
//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentBouncingIndexWhy((prev) => (prev + 1) % highlights.length);
//         }, 1500);
//         return () => clearInterval(interval);
//     }, []);

//     const slideInFromLeft = (delay: number) => ({
//         hidden: { x: -100, opacity: 0 },
//         visible: { 
//             x: 0, 
//             opacity: 1, 
//             transition: { 
//                 delay, 
//                 duration: 0.8,
//                 type: "spring",
//                 stiffness: 100
//             } 
//         }
//     });

//     const slideInFromRight = (delay: number) => ({
//         hidden: { x: 100, opacity: 0 },
//         visible: { 
//             x: 0, 
//             opacity: 1, 
//             transition: { 
//                 delay, 
//                 duration: 0.8,
//                 type: "spring",
//                 stiffness: 100
//             } 
//         }
//     });

//     return (
//         <main className="relative w-full min-h-screen text-white flex flex-col items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
//             <style>{`
//                 @keyframes float {
//                     0%, 100% {
//                         transform: translateY(0) rotate(0deg);
//                     }
//                     33% {
//                         transform: translateY(-15px) rotate(120deg);
//                     }
//                     66% {
//                         transform: translateY(-25px) rotate(240deg);
//                     }
//                 }
//                 @keyframes continuousBounce {
//                     0%, 20%, 50%, 80%, 100% {
//                         transform: translateY(0) scale(1);
//                     }
//                     40% {
//                         transform: translateY(-20px) scale(1.05);
//                     }
//                     60% {
//                         transform: translateY(-10px) scale(1.02);
//                     }
//                 }
//                 .bouncing-card {
//                     animation: continuousBounce 2s ease-in-out infinite;
//                 }
//             `}</style>

//             {/* Enhanced Background Elements */}
//             <div className="absolute inset-0">
//                 <motion.div 
//                     className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
//                     animate={{ 
//                         scale: [1, 1.2, 1],
//                         opacity: [0.1, 0.2, 0.1]
//                     }}
//                     transition={{ 
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut"
//                     }}
//                 />
//                 <motion.div 
//                     className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
//                     animate={{ 
//                         scale: [1.2, 1, 1.2],
//                         opacity: [0.2, 0.1, 0.2]
//                     }}
//                     transition={{ 
//                         duration: 4,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: 2
//                     }}
//                 />
//             </div>

//             {/* Floating Particles */}
//             <div className="absolute inset-0 pointer-events-none z-0">
//                 {particles.map((p) => (
//                     <span key={p.id} style={p.style} />
//                 ))}
//             </div>

//             {/* What We Do Section - Left Content, Right Cards */}
//             <SectionWrapper className="z-10 max-w-7xl w-full">
//                 <motion.section
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <div className="flex flex-col mb-40 lg:flex-row items-center gap-8 lg:gap-12">
//                         {/* Left Content */}
//                         <motion.div 
//                             className="flex-1 text-center lg:text-left"
//                             initial="hidden"
//                             animate="visible"
//                             variants={slideInFromLeft(0.2)}
//                         >
//                             <motion.h2 
//                                 className="font-bold mb-6 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl"
//                                 whileInView={{ 
//                                     scale: [1, 1.02, 1],
//                                     transition: { duration: 2, repeat: Infinity }
//                                 }}
//                             >
//                                 What Makes Our Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">&quot;Custom&quot;</span>?
//                             </motion.h2>
//                         </motion.div> 

//                         {/* Right Cards */}
//                         <motion.div 
//                             className="flex-1"
//                             initial="hidden"
//                             animate="visible"
//                             variants={slideInFromRight(0.4)}
//                         >
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 {highlights.map((item, i) => (
//                                     <motion.div
//                                         key={item.title}
//                                         className={`border ${item.border} rounded-2xl p-6 shadow-xl ${item.shadow} hover:scale-105 hover:shadow-2xl transition-all duration-500 group ${
//                                             i === currentBouncingIndexWhy ? 'bouncing-card' : ''
//                                         }`}
//                                         initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                                         transition={{ 
//                                             delay: 0.6 + (0.15 * i), 
//                                             duration: 0.6,
//                                             type: "spring",
//                                             stiffness: 100
//                                         }}
//                                         whileHover={{
//                                             y: -10,
//                                             boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//                                             transition: { duration: 0.2 }
//                                         }}
//                                     >
//                                         <motion.div 
//                                             className="text-4xl mb-4 group-hover:animate-pulse"
//                                             whileHover={{ scale: 1.2, rotate: 10 }}
//                                         >
//                                             {item.icon}
//                                         </motion.div>
//                                         <h3 className="text-lg font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
//                                             {item.title}
//                                         </h3>
//                                         <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
//                                             {item.description}
//                                         </p>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.section>
//             </SectionWrapper>

//             {/* Timeline Section */}
//             <SectionWrapper className="z-10 max-w-7xl w-full">
//                 <motion.section
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     <div className="flex flex-col mb-40 lg:flex-row items-start gap-8 lg:gap-12">
//                         <motion.div 
//                             className="flex-1 lg:order-1"
//                             initial="hidden"
//                             animate="visible"
//                         >
//                             <div className="flex flex-col items-center">
//                                 <motion.h2 
//                                     className="font-bold mb-6 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl"
//                                     initial={{ opacity: 0, y: 50 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8 }}
//                                     whileInView={{ 
//                                         scale: [1, 1.02, 1],
//                                         transition: { duration: 2, repeat: Infinity }
//                                     }}
//                                 >
//                                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Our </span> Development DNA
//                                 </motion.h2>
//                                 <motion.p 
//                                     className="text-lg text-gray-300 mb-6 leading-relaxed"
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: 0.2 }}
//                                 >
//                                     Every line of code we write carries our unique genetic markers of quality, innovation, and precision.
//                                 </motion.p>
//                             </div>
//                             <div className="py-20 px-4 relative">
//                                 <div className="relative z-10 max-w-4xl mx-auto">
//                                     <motion.div
//                                         className="relative"
//                                         variants={containerVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                     >
//                                         {timelineData.map((item, index) => (
//                                             <TimelineNode
//                                                 key={item.id}
//                                                 item={item}
//                                                 index={index}
//                                             />
//                                         ))}
//                                     </motion.div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.section>
//             </SectionWrapper>

//          {/* Technology Arsenal Section */}
// <SectionWrapper className="z-10 max-w-7xl w-full">
//     <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//     >
//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

//             {/* Left Content (formerly Right Content) */}
//             <motion.div 
//                 className="flex-1 text-center lg:text-left"
//                 initial="hidden"
//                 animate="visible"
//                 variants={slideInFromLeft(0.4)}
//             >
//                 <motion.h2 
//                     className="font-bold mb-6 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl"
//                     whileInView={{ 
//                         scale: [1, 1.02, 1],
//                         transition: { duration: 2, repeat: Infinity }
//                     }}
//                 >
//                     Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Technology Arsenal</span>
//                 </motion.h2>
//                 <motion.p 
//                     className="text-lg text-gray-300 mb-6 leading-relaxed"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                 >
//                     Cutting-edge tools and frameworks we leverage to build your next breakthrough
//                 </motion.p>
//             </motion.div>

//             {/* Right Cards (formerly Left Cards) */}
//             <motion.div 
//                 className="flex-1"
//                 initial="hidden"
//                 animate="visible"
//                 variants={slideInFromRight(0.2)}
//             >
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {whatWeDoCards.map((item, i) => (
//                         <motion.div
//                             key={item.title}
//                             className={`border ${item.border} rounded-2xl p-6 shadow-xl ${item.shadow} hover:scale-105 hover:shadow-2xl transition-all duration-500 group ${
//                                 i === currentBouncingIndex ? 'bouncing-card' : ''
//                             }`}
//                             initial={{ opacity: 0, y: 50, scale: 0.8 }}
//                             animate={{ opacity: 1, y: 0, scale: 1 }}
//                             transition={{ 
//                                 delay: 0.6 + (0.15 * i), 
//                                 duration: 0.6,
//                                 type: "spring",
//                                 stiffness: 100
//                             }}
'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { Search, Palette, Laptop, Zap, Rocket, RefreshCw } from 'lucide-react';

const PARTICLE_COUNT = 50;

function getRandomParticleStyle(): React.CSSProperties {
    return {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 6 + 4}px`,
        height: `${Math.random() * 6 + 4}px`,
        backgroundColor: Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4',
        borderRadius: '9999px',
        opacity: Math.random() * 0.4 + 0.1,
        position: 'absolute',
        animation: `float ${Math.random() * 8 + 4}s ease-in-out ${Math.random() * 10}s infinite`,
        boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)',
    };
}

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    style: getRandomParticleStyle(),
}));

const whatWeDoCards = [
    {
        title: 'Custom Software Development',
        points: [
      'Frontend','Backend','Mobile Apps','APIs','Database','Cloud','Authentication','Hosting'
    ],
        icon: '💻',
        border: 'border-purple-500/30',
        shadow: 'hover:shadow-purple-500/25'
    },
    
    {
        title: 'DevOps & Cloud Engineering',
          points: [
      'CI/CD','Containerization','Infrastructure as Code','Monitoring','Cloud Platforms','Serverless','Security'
    ],
        icon: '📊',
        border: 'border-orange-500/30',
        shadow: 'hover:shadow-orange-500/25'
    },
    {
        title: 'SaaS Product Development',
        points: [
      'Web Framework','Billing & Payments','Authentication/SSO','Backend APIs','Database','Multi-Tenancy','Deployment/Hosting','Storage & CDN',
    ],
        icon: '🌐',
        border: 'border-cyan-500/30',
        shadow: 'hover:shadow-cyan-500/25'
    },
    {
        title: 'AI & ML Engineering',
       points: [
      'LLMs & Generative AI','Fine-Tuning Models','AI Development','Vector Databases','Computer Vision','NLP','MLOps','AI Infrastructure',
    ],
        icon: '🤖',
        border: 'border-emerald-500/30',
        shadow: 'hover:shadow-emerald-500/25'
    }
];

const highlights = [
    {
        title: "AI-First Approach",
        description: "We don't just build — we think with your software.",
        icon: "🧠",
        border: "border-purple-500/30",
        shadow: "hover:shadow-purple-500/25"
    },
    {
        title: "Zero Template Policy", 
        description: "Every module is crafted ground-up, no generic kits.",
        icon: "🛡️",
        border: "border-cyan-500/30",
        shadow: "hover:shadow-cyan-500/25"
    },
    {
        title: "Experience-Driven Design",
        description: "Built around user behavior, not developer convenience.",
        icon: "🪄", 
        border: "border-emerald-500/30",
        shadow: "hover:shadow-emerald-500/25"
    },
    {
        title: "Scalability Embedded",
        description: "Your MVP today can be your platform tomorrow.",
        icon: "📈",
        border: "border-orange-500/30",
        shadow: "hover:shadow-orange-500/25"
    },
];

// Timeline data - removed period field
interface TimelineItemType {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    category: 'primary' | 'secondary';
    details?: string[];
}

const timelineData: TimelineItemType[] = [
    {
        id: 'decode',
        title: 'Decode',
        description: 'We deep-dive into your business logic, users, and industry', 
        icon: <Search className="text-white" />,
        category: 'primary',
        details: [
            'Business analysis',
            'User research',
            'Market insights',
            'Technical requirements'
        ]
    },
    {
        id: 'design',
        title: 'Design',
        description: 'Every line, button, and flow is tailor-made, pixel-perfect',
        icon: <Palette className="text-white" />,
        category: 'secondary',
        details: [
            'UI/UX design',
            'User flow mapping',
            'Interactive prototypes',
            'Design systems'
        ]
    },
    {
        id: 'develop',
        title: 'Develop',
        description: 'Clean, scalable, and efficient code that aligns with your DNA',
        icon: <Laptop className="text-white" />,
        category: 'primary',
        details: [
            'Clean code practices',
            'Modern tech stack',
            'Scalable architecture',
            'Security-first approach'
        ]
    },
    {
        id: 'distill',
        title: 'Distill',
        description: "Testing, refining, and optimizing until it's frictionless",
        icon: <Zap className="text-white" />,
        category: 'secondary',
        details: [
            'Performance testing', 
            'Quality assurance',
            'User testing',
            'Optimization'
        ]
    },
    {
        id: 'deploy',
        title: 'Deploy',
        description: 'Fast, safe, and scalable launches with zero stress',
        icon: <Rocket className="text-white" />,
        category: 'primary',
        details: [
            'CI/CD pipelines',
            'Zero-downtime deployment',
            'Monitoring setup',
            'Security checks'
        ]
    },
    {
        id: 'dynamic',
        title: 'Dynamic',
        description: 'Evolve as you grow — continuous support and innovation',
        icon: <RefreshCw className="text-white" />,
        category: 'secondary',
        details: [
            'Continuous updates',
            'Performance monitoring',
            'Feature expansion',
            'Technical support'
        ]
    }
];

interface TimelineNodeProps {
    item: TimelineItemType;
    index: number;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'} w-full`}>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-purple-500 to-cyan-500 transform -translate-x-1/2 min-[2560px]:w-0.5" />

            <motion.div
                className={`relative z-10 w-full sm:w-3/5 md:w-1/2 mb-16 min-[2560px]:mb-24 ${isEven ? 'mr-auto pr-4 sm:pr-8 min-[2560px]:pr-16' : 'ml-auto pl-4 sm:pl-8 min-[2560px]:pl-16'}`}
                initial={{ opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: isEven ? -100 : 100, scale: 0.8 }}
                transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
                whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                }}
            >
                <motion.div
                    className={`absolute top-1/3 ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-cyan-500 z-20`}
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isInView ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                    transition={{ 
                        type: 'spring', 
                        stiffness: 400, 
                        delay: index * 0.15 + 0.3, 
                        duration: 0.6
                    }}
                    whileHover={{ 
                        scale: 1.3, 
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
                        transition: { duration: 0.2 }
                    }}
                />

                <motion.div
                    className={`rounded-xl overflow-hidden min-[2560px]:rounded-2xl ${
                        item.category === 'primary'
                            ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border border-purple-500/30'
                            : 'bg-gradient-to-br from-cyan-900/80 to-blue-900/80 border border-cyan-500/30'
                    } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{
                        borderColor: item.category === 'primary' ? 'rgba(168, 85, 247, 0.6)' : 'rgba(6, 182, 212, 0.6)',
                        boxShadow: item.category === 'primary' 
                            ? '0 25px 50px -12px rgba(168, 85, 247, 0.25)' 
                            : '0 25px 50px -12px rgba(6, 182, 212, 0.25)',
                        transition: { duration: 0.3 }
                    }}
                    layout
                >
                    <div className="p-6 min-[2560px]:p-10">
                        <motion.div 
                            className="text-4xl min-[2560px]:text-6xl mb-4 min-[2560px]:mb-6 text-white"
                            whileHover={{ 
                                scale: 1.2, 
                                rotate: 10,
                                transition: { duration: 0.2 }
                            }}
                        >
                            {item.icon}
                        </motion.div>
                        <motion.h3 
                            className="text-xl min-[2560px]:text-3xl font-bold mb-3 min-[2560px]:mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.15 + 0.5 }}
                        >
                            {item.title}
                        </motion.h3>
                        <motion.p 
                            className="text-white/80 text-sm min-[2560px]:text-lg leading-relaxed mb-4 min-[2560px]:mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.15 + 0.6 }}
                        >
                            {item.description}
                        </motion.p>
                        {item.details && (
                            <motion.ul 
                                className="list-disc list-inside text-white/70 text-sm min-[2560px]:text-base space-y-1 min-[2560px]:space-y-2 pl-2 min-[2560px]:pl-4"
                                initial={{ opacity: 0, height: 0 }}
                                animate={isInView ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                                transition={{ delay: index * 0.15 + 0.7, duration: 0.5 }}
                            >
                                {item.details.map((detail, idx) => (
                                    <motion.li 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.15 + 0.8 + (idx * 0.1) }}
                                    >
                                        {detail}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default function WhyChooseVAccel() {
    const [currentBouncingIndex, setCurrentBouncingIndex] = useState(0);
    const [currentBouncingIndexWhy, setCurrentBouncingIndexWhy] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBouncingIndex((prev) => (prev + 1) % whatWeDoCards.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBouncingIndexWhy((prev) => (prev + 1) % highlights.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    const slideInFromLeft = (delay: number) => ({
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { 
                delay, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
            } 
        }
    });

    const slideInFromRight = (delay: number) => ({
        hidden: { x: 100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1, 
            transition: { 
                delay, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
            } 
        }
    });

    return (
        <main className="relative w-full min-h-screen text-white flex flex-col items-center justify-start px-2 sm:px-4 md:px-6 lg:px-8 min-[2560px]:px-32 py-8 sm:py-12 md:py-16 lg:py-20 min-[2560px]:py-32 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 min-[2560px]:space-y-32">
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    33% {
                        transform: translateY(-15px) rotate(120deg);
                    }
                    66% {
                        transform: translateY(-25px) rotate(240deg);
                    }
                }
                @keyframes continuousBounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0) scale(1);
                    }
                    40% {
                        transform: translateY(-20px) scale(1.05);
                    }
                    60% {
                        transform: translateY(-10px) scale(1.02);
                    }
                }
                .bouncing-card {
                    animation: continuousBounce 2s ease-in-out infinite;
                }
            `}</style>

            {/* Enhanced Background Elements */}
            <div className="absolute inset-0">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 min-[2560px]:w-[600px] min-[2560px]:h-[600px] bg-purple-500/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 min-[2560px]:w-[600px] min-[2560px]:h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {particles.map((p) => (
                    <span key={p.id} style={p.style} />
                ))}
            </div>
           
                 {/* <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 ">
           
                <div className="md:w-1/2 mb-8 md:mb-0 text-left">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Why v-Accel?</h1>
                  <h2 className="text-xl text-gray-700">
                    From Concept to Reality —<br />
                    Empowering ideas with AI & Accelerating Success
                  </h2>
                </div>

            </section> */}
              
            {/* What We Do Section - Left Content, Right Cards */}
            <SectionWrapper className="z-10 max-w-7xl min-[2560px]:max-w-[2400px] w-full">
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col mb-40 min-[2560px]:mb-64 lg:flex-row items-center gap-8 lg:gap-12 min-[2560px]:gap-20">
                        {/* Left Content */}
                        <motion.div 
                            className="flex-1 text-center lg:text-left min-[2560px]:px-8"
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromLeft(0.2)}
                        >
                            <motion.h2 
                                className="font-bold mb-6 min-[2560px]:mb-10 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl min-[2560px]:text-8xl min-[2560px]:leading-[1.1]"
                                whileInView={{ 
                                    scale: [1, 1.02, 1],
                                    transition: { duration: 2, repeat: Infinity }
                                }}
                            >
                                What Makes Our Code<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">&quot;Custom&quot;</span>?
                            </motion.h2>
                        </motion.div> 

                        {/* Right Cards */}
                        <motion.div 
                            className="flex-1 min-[2560px]:px-8"
                            initial="hidden"
                            animate="visible"
                            variants={slideInFromRight(0.4)}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-[2560px]:gap-8">
                                {highlights.map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        className={`border ${item.border} rounded-2xl min-[2560px]:rounded-3xl p-6 min-[2560px]:p-10 shadow-xl ${item.shadow} hover:scale-105 hover:shadow-2xl transition-all duration-500 group ${
                                            i === currentBouncingIndexWhy ? 'bouncing-card' : ''
                                        }`}
                                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ 
                                            delay: 0.6 + (0.15 * i), 
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{
                                            y: -10,
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <motion.div 
                                            className="text-4xl min-[2560px]:text-6xl mb-4 min-[2560px]:mb-6 group-hover:animate-pulse"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <h3 className="text-lg min-[2560px]:text-2xl font-bold mb-3 min-[2560px]:mb-5 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/80 text-sm min-[2560px]:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </SectionWrapper>

            {/* Timeline Section */}
            {/* <SectionWrapper className="z-10 max-w-7xl min-[2560px]:max-w-[2400px] w-full">
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col mb-40 min-[2560px]:mb-64 lg:flex-row items-start gap-8 lg:gap-12 min-[2560px]:gap-20">
                        <motion.div 
                            className="flex-1 lg:order-1"
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="flex flex-col items-center">
                                <motion.h2 
                                    className="font-bold mb-6 min-[2560px]:mb-10 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl min-[2560px]:text-8xl min-[2560px]:leading-[1.1]"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                    whileInView={{ 
                                        scale: [1, 1.02, 1],
                                        transition: { duration: 2, repeat: Infinity }
                                    }}
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Our </span> Development DNA
                                </motion.h2>
                                <motion.p 
                                    className="text-lg min-[2560px]:text-2xl text-gray-300 mb-6 min-[2560px]:mb-10 leading-relaxed max-w-4xl min-[2560px]:max-w-6xl text-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    Every line of code we write carries our unique genetic markers of quality, innovation, and precision.
                                </motion.p>
                            </div>
                            <div className="py-20 min-[2560px]:py-32 px-4 min-[2560px]:px-8 relative">
                                <div className="relative z-10 max-w-4xl min-[2560px]:max-w-6xl mx-auto">
                                    <motion.div
                                        className="relative"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {timelineData.map((item, index) => (
                                            <TimelineNode
                                                key={item.id}
                                                item={item}
                                                index={index}
                                            />
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </SectionWrapper> */}

         {/* Technology Arsenal Section */}
{/* <SectionWrapper className="z-10 max-w-7xl min-[2560px]:max-w-[2400px] w-full">
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 min-[2560px]:gap-20"> */}

            {/* Left Content (formerly Right Content) */}
            {/* <motion.div 
                className="flex-1 text-center lg:text-left min-[2560px]:px-8"
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(0.4)}
            >
                <motion.h2 
                    className="font-bold mb-6 min-[2560px]:mb-10 text-transparent bg-clip-text bg-white text-4xl lg:text-5xl min-[2560px]:text-8xl min-[2560px]:leading-[1.1]"
                    whileInView={{ 
                        scale: [1, 1.02, 1],
                        transition: { duration: 2, repeat: Infinity }
                    }}
                >
                    Our<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Technology Arsenal</span>
                </motion.h2>
                <motion.p 
                    className="text-lg min-[2560px]:text-2xl text-gray-300 mb-6 min-[2560px]:mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Cutting-edge tools and frameworks we leverage to build your next breakthrough
                </motion.p>
            </motion.div> */}

            {/* Right Cards (formerly Left Cards) */}
            {/* <motion.div 
                className="flex-1 min-[2560px]:px-8"
                initial="hidden"
                animate="visible"
                variants={slideInFromRight(0.2)}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-[2560px]:gap-8">
                    {whatWeDoCards.map((item, i) => (
                        <motion.div
                            key={item.title}
                            className={`border ${item.border} rounded-2xl min-[2560px]:rounded-3xl p-6 min-[2560px]:p-10 shadow-xl ${item.shadow} hover:scale-105 hover:shadow-2xl transition-all duration-500 group ${
                                i === currentBouncingIndex ? 'bouncing-card' : ''
                            }`}
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                delay: 0.6 + (0.15 * i), 
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="text-4xl mb-4 group-hover:animate-pulse"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-lg font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                {item.title}
                            </h3>
                           <div className="grid grid-cols-2 gap-3">
                                    {item.points.map((point, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white/10 text-white/80  transition-all duration-300 hover:scale-105"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex-shrink-0" />
                                            <span className="text-xs font-medium truncate">{point}</span>
                                        </div>
                                    ))}
                                </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
    </motion.section>
</SectionWrapper> */}

            {/* Mission Section */}
            {/* <SectionWrapper className="z-10 max-w-7xl w-full">
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div 
                        className="p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.25)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <motion.h3 
                            className="text-2xl font-semibold text-white mb-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Our </span>Mission
                        </motion.h3>
                        <motion.p 
                            className="text-gray-300 text-center max-w-3xl mx-auto text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Empowering businesses through innovative AI solutions - We don&apos;t just write code, we architect digital transformations that redefine possibilities.
                        </motion.p>
                    </motion.div>
                </motion.section>
            </SectionWrapper> */}
        </main>
    );
}