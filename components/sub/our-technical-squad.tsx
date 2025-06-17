// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { FaLaptopCode, FaRobot, FaBug } from 'react-icons/fa';
// import image from '@/public/projects/MD_Final (1).png';
// import type { StaticImageData } from 'next/image';

// interface TeamMember {
//   name: string;
//   role?: string;
//   bio?: string;
//   bio2?: string;
//   expertise?: string[];
//   image?: StaticImageData;
//   count?: number;
//   icon?: JSX.Element;
// }

// const Team: React.FC = () => {
//   const teamRef = useRef<HTMLDivElement>(null);

//   const teamMembers: TeamMember[] = [
//     {
//       name: 'Venkatesan J',
//       role: 'CEO & AI Architect',
//       bio: 'Visionary CEO of V-Accel AI Dynamics, leading the company with over 8 years of expertise in AI-driven solutions',
//       bio2: 'He is deeply passionate about harnessing the power of AI to create innovative solutions that meet evolving business needs',
//       expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
//       image: image,
//     },
//     {
//       name: 'Software Developers',
//       count: 12,
//       icon: <FaLaptopCode className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//     {
//       name: 'AI Engineers',
//       count: 4,
//       icon: <FaRobot className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//     {
//       name: 'Software Testers',
//       count: 8,
//       icon: <FaBug className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//   ];

//   return (
//     <section id="team" className="text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-20" ref={teamRef}>
//       <div className="max-w-7xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
//             Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Technical Squad</span>
//           </h2>
//           <p className="text-base sm:text-lg max-w-3xl mx-auto">
//            Cutting-edge tools and frameworks we leverage to build your next breakthrough
//           </p>
//         </div>

//         {/* CEO Section */}
//         <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <Image
//               src={teamMembers[0].image!}
//               alt="CEO"
//               className="object-cover rounded-3xl bg-transparent"
//               width={320}
//               height={420}
//               priority
//             />
//           </div>
//           <div className="w-full lg:w-2/3 text-center lg:text-left">
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">{teamMembers[0].name}</h2>
//             <p className="text-base sm:text-lg font-semibold">{teamMembers[0].role}</p>
//             <p className="text-sm sm:text-base mt-4 mb-2">{teamMembers[0].bio}</p>
//             <p className="text-sm sm:text-base mb-4">{teamMembers[0].bio2}</p>

//             <div className="mt-6">
//               <h4 className="text-base sm:text-lg font-semibold mb-4">Areas of Expertise</h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                 {teamMembers[0].expertise?.map((skill, idx) => (
//                   <span key={idx} className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Team Counters */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
//           {teamMembers.slice(1).map((member, index) => (
//             <TeamCard key={index} member={member} delay={300 + index * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// interface TeamCardProps {
//   member: TeamMember;
//   delay: number;
// }

// const TeamCard: React.FC<TeamCardProps> = ({ member, delay }) => {
//   const [count, setCount] = useState(0);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && member.count) {
//           animateCount(member.count);
//           entry.target.classList.add('opacity-100');
//           entry.target.classList.remove('translate-y-10');
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, [member.count]);

//   const animateCount = (target: number) => {
//     let current = 0;
//     const duration = 1000;
//     const stepTime = Math.max(Math.floor(duration / target), 20);

//     const interval = setInterval(() => {
//       current += 1;
//       setCount(current);
//       if (current >= target) clearInterval(interval);
//     }, stepTime);
//   };

//   return (
//     <div
//       ref={cardRef}
//       className="opacity-0 translate-y-10 transition-all duration-700"
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <div className="bg-transparent rounded-3xl px-6 py-8 transition-all duration-500 h-full flex flex-col items-center justify-between min-h-[240px] sm:min-h-[280px] transform hover:scale-105 max-w-[320px] mx-auto">
//         <div className="mb-4">{member.icon}</div>
//         <div className="text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-extrabold mb-2">
//           {count}
//         </div>
//         <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
//       </div>
//     </div>
//   );
// };

// export default Team;


// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { FaLaptopCode, FaRobot, FaBug } from 'react-icons/fa';
// import { motion, useInView } from 'framer-motion';
// import image from '@/public/projects/MD_Final (1).png';
// import type { StaticImageData } from 'next/image';

// interface TeamMember {
//   name: string;
//   role?: string;
//   bio?: string;
//   bio2?: string;
//   expertise?: string[];
//   image?: StaticImageData;
//   count?: number;
//   icon?: JSX.Element;
// }

// const Team: React.FC = () => {
//   const teamRef = useRef<HTMLDivElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);
//   const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

//   // Animation variants
//   const imageVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const floatingTextVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (custom: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         delay: custom * 0.1,
//         ease: "easeOut"
//       }
//     })
//   };

//   const floatingAnimation = {
//     y: [0, -10, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }
//   };

//   const teamMembers: TeamMember[] = [
//     {
//       name: 'Venkatesan J',
//       role: 'CEO & AI Architect',
//       bio: 'Visionary CEO of V-Accel AI Dynamics, leading the company with over 8 years of expertise in AI-driven solutions',
//       bio2: 'He is deeply passionate about harnessing the power of AI to create innovative solutions that meet evolving business needs',
//       expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
//       image: image,
//     },
//     {
//       name: 'Software Developers',
//       count: 12,
//       icon: <FaLaptopCode className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//     {
//       name: 'AI Engineers',
//       count: 4,
//       icon: <FaRobot className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//     {
//       name: 'Software Testers',
//       count: 8,
//       icon: <FaBug className="text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
//     },
//   ];

//   return (
//     <section id="team" className="text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-20" ref={teamRef}>
//       <div className="max-w-7xl mx-auto">
//         {/* Title with Animation */}
//         <div className="text-center mb-12" ref={headingRef}>
//           <motion.h2 
//             variants={floatingTextVariants}
//             initial="hidden"
//             animate={isHeadingInView ? "visible" : "hidden"}
//             custom={0}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
//             whileInView={floatingAnimation}
//           >
//             Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Technical Squad</span>
//           </motion.h2>
//           <motion.p 
//             variants={floatingTextVariants}
//             initial="hidden"
//             animate={isHeadingInView ? "visible" : "hidden"}
//             custom={1}
//             className="text-base sm:text-lg max-w-3xl mx-auto"
//             whileInView={floatingAnimation}
//           >
//            Cutting-edge tools and frameworks we leverage to build your next breakthrough
//           </motion.p>
//         </div>

//         {/* CEO Section */}
//         <motion.div 
//           className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
//           variants={imageVariants}
//           initial="hidden"
//           animate={isHeadingInView ? "visible" : "hidden"}
//         >
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <Image
//               src={teamMembers[0].image!}
//               alt="CEO"
//               className="object-cover rounded-3xl bg-transparent"
//               width={320}
//               height={420}
//               priority
//             />
//           </div>
//           <div className="w-full lg:w-2/3 text-center lg:text-left">
//             <motion.h2 
//               className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
//               variants={floatingTextVariants}
//               initial="hidden"
//               animate={isHeadingInView ? "visible" : "hidden"}
//               custom={2}
//               whileInView={floatingAnimation}
//             >
//               {teamMembers[0].name}
//             </motion.h2>
//             <motion.p 
//               className="text-base sm:text-lg font-semibold"
//               variants={floatingTextVariants}
//               initial="hidden"
//               animate={isHeadingInView ? "visible" : "hidden"}
//               custom={3}
//               whileInView={floatingAnimation}
//             >
//               {teamMembers[0].role}
//             </motion.p>
//             <motion.p 
//               className="text-sm sm:text-base mt-4 mb-2"
//               variants={floatingTextVariants}
//               initial="hidden"
//               animate={isHeadingInView ? "visible" : "hidden"}
//               custom={4}
//               whileInView={floatingAnimation}
//             >
//               {teamMembers[0].bio}
//             </motion.p>
//             <motion.p 
//               className="text-sm sm:text-base mb-4"
//               variants={floatingTextVariants}
//               initial="hidden"
//               animate={isHeadingInView ? "visible" : "hidden"}
//               custom={5}
//               whileInView={floatingAnimation}
//             >
//               {teamMembers[0].bio2}
//             </motion.p>

//             <motion.div 
//               className="mt-6"
//               variants={floatingTextVariants}
//               initial="hidden"
//               animate={isHeadingInView ? "visible" : "hidden"}
//               custom={6}
//             >
//               <h4 className="text-base sm:text-lg font-semibold mb-4">Areas of Expertise</h4>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                 {teamMembers[0].expertise?.map((skill, idx) => (
//                   <motion.span 
//                     key={idx} 
//                     className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
//                     variants={floatingTextVariants}
//                     initial="hidden"
//                     animate={isHeadingInView ? "visible" : "hidden"}
//                     custom={7 + idx}
//                     whileInView={floatingAnimation}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Team Counters */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
//           {teamMembers.slice(1).map((member, index) => (
//             <TeamCard key={index} member={member} delay={300 + index * 100} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// interface TeamCardProps {
//   member: TeamMember;
//   delay: number;
// }

// const TeamCard: React.FC<TeamCardProps> = ({ member, delay }) => {
//   const [count, setCount] = useState(0);
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && member.count) {
//           animateCount(member.count);
//           entry.target.classList.add('opacity-100');
//           entry.target.classList.remove('translate-y-10');
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);
//     return () => observer.disconnect();
//   }, [member.count]);

//   const animateCount = (target: number) => {
//     let current = 0;
//     const duration = 1000;
//     const stepTime = Math.max(Math.floor(duration / target), 20);

//     const interval = setInterval(() => {
//       current += 1;
//       setCount(current);
//       if (current >= target) clearInterval(interval);
//     }, stepTime);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="opacity-0 translate-y-10 transition-all duration-700"
//       style={{ transitionDelay: `${delay}ms` }}
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//     >
//       <div className="bg-transparent rounded-3xl px-6 py-8 transition-all duration-500 h-full flex flex-col items-center justify-between min-h-[240px] sm:min-h-[280px] transform hover:scale-105 max-w-[320px] mx-auto">
//         <div className="mb-4">{member.icon}</div>
//         <div className="text-6xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-extrabold mb-2">
//           {count}
//         </div>
//         <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
//       </div>
//     </motion.div>
//   );
// };

// export default Team;


'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FaLaptopCode, FaRobot, FaBug } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import image from '@/public/projects/MD_Final (1).png';
import type { StaticImageData } from 'next/image';

interface TeamMember {
  name: string;
  role?: string;
  bio?: string;
  bio2?: string;
  bio3?: string;
  expertise?: string[];
  image?: StaticImageData;
  count?: number;
  icon?: JSX.Element;
}

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const teamMembers: TeamMember[] = [
    {
      name: 'Mr. Venkatesan J- Full-back Engineer I Al Specialist I Visionary Technologiest',
      role: 'CEO & AI Architect',
      bio : 'With over 8+ years of hands-on experience in building high-performance applications and intelligent systems, Venkatesan leads V.accel At Dynamics with a unique blend of deep technical expertise and strategic vision.',
      bio2: ' Holding & BE in Mechanical Engineering, a PGDM in Operations & supply Chain, a PG Diploma in Al/ML and an M.E. in Artificial intelligence & Data Science, he bridges the gap between engineering, enterprise, and emerging technologies.',
      bio3: 'As a full-stack Software engineer (MERN) and a QA Automation Specialist, he has architected, tested, and scaled SaaS platforms, microservices ecosystems, and AI-powered products across industries.',
      expertise: ['AI & Machine Learning', 'Software Development', 'Leadership & Team Building', 'Business Strategy', 'Client Relations'],
      image: image,
    },
    {
      name: 'Software Developers',
      count: 12,
      icon: <FaLaptopCode className="text-4xl sm:text-5xl min-[2560px]:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
    {
      name: 'AI Engineers',
      count: 4,
      icon: <FaRobot className="text-4xl sm:text-5xl min-[2560px]:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
    {
      name: 'Software Testers',
      count: 8,
      icon: <FaBug className="text-4xl sm:text-5xl min-[2560px]:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" />,
    },
  ];

  return (
    <section id="team" className="text-white py-16 sm:py-20 min-[2560px]:py-32 px-4 sm:px-8 lg:px-20 min-[2560px]:px-32" ref={teamRef}>
      <div className="max-w-7xl min-[2560px]:max-w-[2400px] mx-auto">
        {/* Title with Animation */}
        <div className="text-center mb-12 min-[2560px]:mb-20" ref={headingRef}>
          <motion.h2 
            variants={floatingTextVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            custom={0}
            className="text-3xl sm:text-4xl lg:text-5xl min-[2560px]:text-6xl font-bold mb-4 min-[2560px]:mb-8"
            whileInView={floatingAnimation}
          >
            Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Technical Squad</span>
          </motion.h2>
          <motion.p 
            variants={floatingTextVariants}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            custom={1}
            className="text-base sm:text-lg min-[2560px]:text-2xl max-w-3xl min-[2560px]:max-w-5xl mx-auto"
            whileInView={floatingAnimation}
          >
           Cutting-edge tools and frameworks we leverage to build your next breakthrough
          </motion.p>
        </div>

        {/* CEO Section */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start gap-10 min-[2560px]:gap-16"
          variants={imageVariants}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
        >
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src={teamMembers[0].image!}
              alt="CEO"
              className="object-cover rounded-3xl bg-transparent"
              width={320}
              height={420}
              priority
            />
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl min-[2560px]:text-5xl font-bold mb-6 min-[2560px]:mb-10"
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              custom={2}
              whileInView={floatingAnimation}
            >
              {teamMembers[0].name}
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg min-[2560px]:text-2xl font-semibold"
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              custom={3}
              whileInView={floatingAnimation}
            >
              {teamMembers[0].role}
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base min-[2560px]:text-xl mt-4 min-[2560px]:mt-8 mb-2 min-[2560px]:mb-4"
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              custom={4}
              whileInView={floatingAnimation}
            >
              {teamMembers[0].bio}
            </motion.p>
            <motion.p 
              className="text-sm sm:text-base min-[2560px]:text-xl mb-4 min-[2560px]:mb-8"
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              custom={5}
              whileInView={floatingAnimation}
            >
              {teamMembers[0].bio2}
            </motion.p>

            <motion.div 
              className="mt-6 min-[2560px]:mt-10"
              variants={floatingTextVariants}
              initial="hidden"
              animate={isHeadingInView ? "visible" : "hidden"}
              custom={6}
            >
              <h4 className="text-base sm:text-lg min-[2560px]:text-2xl font-semibold mb-4 min-[2560px]:mb-8">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-[2560px]:gap-6">
                {teamMembers[0].expertise?.map((skill, idx) => (
                  <motion.span 
                    key={idx} 
                    className="text-sm sm:text-base min-[2560px]:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                    variants={floatingTextVariants}
                    initial="hidden"
                    animate={isHeadingInView ? "visible" : "hidden"}
                    custom={7 + idx}
                    whileInView={floatingAnimation}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Team Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 min-[2560px]:gap-12 mt-16 min-[2560px]:mt-24">
          {teamMembers.slice(1).map((member, index) => (
            <TeamCard key={index} member={member} delay={300 + index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamCardProps {
  member: TeamMember;
  delay: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, delay }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && member.count) {
          animateCount(member.count);
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('translate-y-10');
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [member.count]);

  const animateCount = (target: number) => {
    let current = 0;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(interval);
    }, stepTime);
  };

  return (
    <motion.div
      ref={cardRef}
      className="opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-transparent rounded-3xl px-6 py-8 min-[2560px]:px-12 min-[2560px]:py-12 transition-all duration-500 h-full flex flex-col items-center justify-between min-h-[240px] sm:min-h-[280px] min-[2560px]:min-h-[380px] transform hover:scale-105 max-w-[320px] min-[2560px]:max-w-[450px] mx-auto">
        <div className="mb-4 min-[2560px]:mb-8">{member.icon}</div>
        <div className="text-6xl sm:text-7xl min-[2560px]:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-extrabold mb-2 min-[2560px]:mb-6">
          {count}
        </div>
        <h3 className="text-lg sm:text-xl min-[2560px]:text-3xl font-semibold">{member.name}</h3>
      </div>
    </motion.div>
  );
};

export default Team;