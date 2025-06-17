
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import clsx from "clsx";
// import { motion } from "framer-motion";

// const categoryEmojis: Record<string, string> = {
//   cafe: "☕️",
//   ecommerce: "🛒",
//   education: "🎓",
//   events: "🎉",
//   hospital: "🏥",
//   insurance: "🛡️",
//   portfolio: "💼",
//   realestate: "🏠",
//   restaurant: "🍽️",
//   school: "🏫",
//   travels: "✈️",
//   bakery: "🥐",
//   carrental: "🚗",
//   gaming: "🎮",
//   gym: "🏋️‍♂️",
// };

// const iconCategories = [
//   {
//     key: "cafe1",
//     image: "/work/cafe1.png",
//     title: "Cafe Digital Experience",
//   },
//   {
//     key: "ecommerce1",
//     image: "/work/ecommerce1.png",
//     title: "E-Commerce Excellence",
//   },
//   {
//     key: "education1",
//     image: "/work/education1.png",
//     title: "Education Innovation",
//   },
//   {
//     key: "events1",
//     image: "/work/events1.png",
//     title: "Event Management",
//   },
//   {
//     key: "hospital1",
//     image: "/work/hospital1.png",
//     title: "Hospital Solutions",
//   },
//   {
//     key: "insurance1",
//     image: "/work/insurance1.png",
//     title: "Insurance Tech",
//   },
//   {
//     key: "portfolio1",
//     image: "/work/portfolio1.png",
//     title: "Portfolio Websites",
//   },
//   {
//     key: "realestate1",
//     image: "/work/realestate1.png",
//     title: "Real Estate Tech",
//   },
//   {
//     key: "restaurant1",
//     image: "/work/restaurant1.png",
//     title: "Restaurant Experience",
//   },
//   {
//     key: "school1",
//     image: "/work/school1.png",
//     title: "School Management",
//   },
//   {
//     key: "travels1",
//     image: "/work/travels1.png",
//     title: "Travel & Adventure",
//   },
//   {
//     key: "bakery1",
//     image: "/work/bakery1.png",
//     title: "Bakery Solutions",
//   },
//   {
//     key: "carrental1",
//     image: "/work/carrental1.png",
//     title: "Car Rental Services",
//   },
//   {
//     key: "gaming1",
//     image: "/work/gaming1.png",
//     title: "Gaming Platforms",
//   },
//   {
//     key: "gym1",
//     image: "/work/gym1.png",
//     title: "Gym & Fitness"
//   }
// ];

// const categories = [
//   {
//     key: "cafe",
//     label: "Cafe",
//     title: "Cafe Digital Experience",
//     subtitle: "Brewing connections, one click at a time.",
//     image: "/work/cafe.png",
//     desc: "We help cafes build a digital presence, from online menus to loyalty apps, making every customer feel at home. Our solutions enable seamless ordering, manage reservations, and keep your community engaged with personalized offers. Enhance your cafe's brand and customer loyalty with digital tools tailored for the hospitality industry.",
//   },
//   {
//     key: "ecommerce",
//     label: "E-Commerce",
//     title: "E-Commerce Excellence",
//     subtitle: "Turning clicks into customers.",
//     image: "/work/ecommerce.png",
//     desc: "We craft seamless online stores with robust features, helping you grow sales and delight shoppers worldwide. From inventory management to secure payments and analytics, our platforms are scalable, secure, and designed for growth. Reach new markets and provide a smooth shopping experience for your customers.",
//   },
//   {
//     key: "education",
//     label: "Education",
//     title: "Education Innovation",
//     subtitle: "Transforming learning for the digital age.",
//     image: "/work/education.png",
//     desc: "E-learning platforms, student management, and more for modern education. We create interactive classrooms, automate grading, and provide tools for teachers, students, and parents to connect and succeed. Our solutions foster engagement and make learning accessible for all, whether in-person or remote.",
//   },
//   {
//     key: "events",
//     label: "Events",
//     title: "Event Management",
//     subtitle: "Making every event unforgettable.",
//     image: "/work/events.png",
//     desc: "Ticketing, scheduling, and attendee engagement for events of all sizes. Our solutions help you manage registrations, send reminders, and create memorable experiences for your audience. From virtual to in-person, we make event management effortless and impactful.",
//   },
//   {
//     key: "hospital",
//     label: "Hospital",
//     title: "Hospital Solutions",
//     subtitle: "ring better health with technology.",
//     image: "/work/Hospital (1).png",
//     desc: "Digital solutions for hospitals, clinics, and health startups. We streamline patient management, appointment scheduling, and telemedicine, ensuring efficient and compassionate care. Our platforms are secure, scalable, and designed for modern healthcare needs, improving outcomes for both patients and providers.",
//   },
//   {
//     key: "insurance",
//     label: "Insurance",
//     title: "Insurance Tech",
//     subtitle: "Securing futures with smart systems.",
//     image: "/work/insurance.png",
//     desc: "Digital onboarding, claims, and engagement for insurance providers. Our platforms simplify policy management, automate claims, and enhance customer trust with transparent processes. Deliver a seamless experience for both agents and policyholders, and stay ahead in a competitive market.",
//   },
//   {
//     key: "portfolio",
//     label: "Portfolio",
//     title: "Portfolio Websites",
//     subtitle: "Showcase your work with style.",
//     image: "/work/portfolio.png",
//     desc: "Personal and business portfolios that make a lasting impression. We design visually stunning sites to highlight your achievements, skills, and projects, helping you stand out online. Our solutions are easy to update, optimized for every device, and tailored to your unique brand.",
//   },
//   {
//     key: "realestate",
//     label: "Real Estate",
//     title: "Real Estate Tech",
//     subtitle: "Modernizing property experiences.",
//     image: "/work/realestate.png",
//     desc: "Listings, virtual tours, and CRM for real estate businesses. Our solutions make it easy to manage properties, connect with buyers, and provide immersive viewing experiences. Streamline your workflow, close deals faster, and offer clients a modern, digital-first approach.",
//   },
//   {
//     key: "restaurant",
//     label: "Restaurant",
//     title: "Restaurant Experience",
//     subtitle: "Serving up seamless digital dining.",
//     image: "/work/restaurant.png",
//     desc: "Menus, reservations, and loyalty apps for restaurants and cafes. We help you streamline orders, manage tables, and engage diners with special offers and feedback tools. Delight your guests and optimize your operations with our restaurant tech, designed for efficiency and growth.",
//   },
//   {
//     key: "school",
//     label: "School",
//     title: "School Management",
//     subtitle: "Smart solutions for schools.",
//     image: "/work/school.png",
//     desc: "Attendance, grading, and communication tools for schools. Our platforms connect teachers, students, and parents, making administration and learning more efficient and collaborative. Empower your school community with our all-in-one solution for modern education.",
//   },
//   {
//     key: "travels",
//     label: "Travels",
//     title: "Travel & Adventure",
//     subtitle: "Journeys begin with a single tap.",
//     image: "/work/travels.png",
//     desc: "Our travel solutions simplify bookings, itineraries, and customer engagement, so your clients can focus on the adventure. We provide tools for agencies, tour operators, and travelers alike, making every journey smooth and memorable. Enhance your travel business with digital innovation.",
//   },
//   {
//     key: "bakery",
//     label: "Bakery",
//     title: "Bakery Solutions",
//     subtitle: "Fresh digital experiences for bakeries.",
//     image: "/work/bakery.png",
//     desc: "We help bakeries grow with online ordering, loyalty programs, and beautiful digital menus. Our solutions streamline daily operations, enhance customer engagement, and make it easy to showcase your latest treats online. From inventory tracking to customer feedback, we provide everything you need to rise above the competition.",
//   },
//   {
//     key: "carrental",
//     label: "Car Rental",
//     title: "Car Rental Services",
//     subtitle: "Drive your business forward.",
//     image: "/work/carrental.png",
//     desc: "Booking, fleet management, and customer engagement for modern car rental companies. Our platforms simplify reservations, automate billing, and provide real-time vehicle tracking for a smooth rental experience. Enhance customer satisfaction and streamline your operations with our tailored solutions.",
//   },
//   {
//     key: "gaming",
//     label: "Gaming",
//     title: "Gaming Platforms",
//     subtitle: "Level up your digital play.",
//     image: "/work/gaming.jpg",
//     desc: "Community, leaderboards, and engagement tools for gaming brands. We build immersive platforms that connect players, track achievements, and foster vibrant gaming communities. Our solutions support tournaments, live streams, and social features for maximum engagement.",
//   },
//   {
//     key: "gym",
//     label: "Gym",
//     title: "Gym & Fitness",
//     subtitle: "Empowering healthy lifestyles.",
//     image: "/work/gym.png",
//     desc: "Membership management, class bookings, and digital engagement for gyms and fitness centers. Our tools help you retain members, schedule sessions, and offer personalized fitness journeys. Motivate your community and streamline your operations with our fitness tech.",
//   },
// ];

// const MAIN_CATEGORIES = categories.slice(0, 5);
// const MORE_CATEGORIES = categories.slice(5);

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

// export const WorkSection = () => {
//   const [active, setActive] = useState(categories[0].key);
//   const [showMore, setShowMore] = useState(false);
//   const current = categories.find((cat) => cat.key === active)!;

//   return (
//     <>
//       {/* Next Section: Overview & Category Cards */}
//       <motion.section
//         className="w-full flex flex-col lg:flex-row items-center justify-center py-8 sm:py-12 lg:py-20 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false, amount: 0.2 }}
//         variants={fadeUp}
//       >
//         {/* Left: Title, Subtitle, Description */}
//         <motion.div
//           className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-2xl lg:max-w-none"
//           variants={fadeUp}
//           custom={0}
//         >
//           <motion.h2
//             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
//             variants={fadeUp}
//             custom={0.1}
//           >
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Explore</span> Our Solutions
//           </motion.h2>
//           <motion.p
//             className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-2 sm:mb-3"
//             variants={fadeUp}
//             custom={0.2}
//           >
//             A digital edge for every industry
//           </motion.p>
//           <motion.p
//             className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
//             variants={fadeUp}
//             custom={0.3}
//           >
//             We deliver tailored digital solutions for a wide range of industries. Whether you run a cafe, manage a hospital, or lead an e-commerce brand, our expertise helps you innovate, streamline, and grow. Discover how we can empower your business with technology.
//           </motion.p>
//         </motion.div>

//         {/* Right: Category Cards */}
//         <div className="flex-1 w-full max-w-2xl lg:max-w-none">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
//             {iconCategories.map((cat, idx) => (
//               <motion.div
//                 key={cat.key}
//                 className="bg-gradient-to-br from-[#2d2a4a] to-[#1a1833] rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[120px]"
//                 whileHover={{ scale: 1.08, rotate: -2 }}
//                 whileTap={{ scale: 0.97, rotate: 2 }}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, amount: 0.2 }}
//                 variants={fadeUp}
//                 custom={idx}
//               >
//                 <motion.div
//                   className="mb-2 sm:mb-3 text-3xl sm:text-4xl"
//                   whileHover={{ rotate: 12, scale: 1.2 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <span role="img" aria-label={cat.title}>
//                     {cat.image ? (
//                       <Image
//                         src={cat.image}
//                         alt={cat.title}
//                         width={32}
//                         height={32}
//                         className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
//                       />
//                     ) : (
//                       categoryEmojis[cat.key] || "🌟"
//                     )}
//                   </span>
//                 </motion.div>
//                 <motion.div
//                   className="text-xs sm:text-sm md:text-base lg:text-sm font-semibold text-white text-center leading-tight px-1"
//                   variants={fadeUp}
//                   custom={idx + 0.1}
//                 >
//                   {cat.title}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </>
//   );
// };


"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";

const categoryEmojis: Record<string, string> = {
  cafe: "☕️",
  ecommerce: "🛒",
  education: "🎓",
  events: "🎉",
  hospital: "🏥",
  insurance: "🛡️",
  portfolio: "💼",
  realestate: "🏠",
  restaurant: "🍽️",
  school: "🏫",
  travels: "✈️",
  bakery: "🥐",
  carrental: "🚗",
  gaming: "🎮",
  gym: "🏋️‍♂️",
};

const iconCategories = [
  {
    key: "cafe1",
    image: "/work/cafe1.png",
    title: "Cafe Digital Experience",
  },
  {
    key: "ecommerce1",
    image: "/work/ecommerce1.png",
    title: "E-Commerce Excellence",
  },
  {
    key: "education1",
    image: "/work/education1.png",
    title: "Education Innovation",
  },
  {
    key: "events1",
    image: "/work/events1.png",
    title: "Event Management",
  },
  {
    key: "hospital1",
    image: "/work/hospital1.png",
    title: "Hospital Solutions",
  },
  {
    key: "insurance1",
    image: "/work/insurance1.png",
    title: "Insurance Tech",
  },
  {
    key: "portfolio1",
    image: "/work/portfolio1.png",
    title: "Portfolio Websites",
  },
  {
    key: "realestate1",
    image: "/work/realestate1.png",
    title: "Real Estate Tech",
  },
  {
    key: "restaurant1",
    image: "/work/restaurant1.png",
    title: "Restaurant Experience",
  },
  {
    key: "school1",
    image: "/work/school1.png",
    title: "School Management",
  },
  {
    key: "travels1",
    image: "/work/travels1.png",
    title: "Travel & Adventure",
  },
  {
    key: "bakery1",
    image: "/work/bakery1.png",
    title: "Bakery Solutions",
  },
  {
    key: "carrental1",
    image: "/work/carrental1.png",
    title: "Car Rental Services",
  },
  {
    key: "gaming1",
    image: "/work/gaming1.png",
    title: "Gaming Platforms",
  },
  {
    key: "gym1",
    image: "/work/gym1.png",
    title: "Gym & Fitness"
  }
];

const categories = [
  {
    key: "cafe",
    label: "Cafe",
    title: "Cafe Digital Experience",
    subtitle: "Brewing connections, one click at a time.",
    image: "/work/cafe.png",
    desc: "We help cafes build a digital presence, from online menus to loyalty apps, making every customer feel at home. Our solutions enable seamless ordering, manage reservations, and keep your community engaged with personalized offers. Enhance your cafe's brand and customer loyalty with digital tools tailored for the hospitality industry.",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    title: "E-Commerce Excellence",
    subtitle: "Turning clicks into customers.",
    image: "/work/ecommerce.png",
    desc: "We craft seamless online stores with robust features, helping you grow sales and delight shoppers worldwide. From inventory management to secure payments and analytics, our platforms are scalable, secure, and designed for growth. Reach new markets and provide a smooth shopping experience for your customers.",
  },
  {
    key: "education",
    label: "Education",
    title: "Education Innovation",
    subtitle: "Transforming learning for the digital age.",
    image: "/work/education.png",
    desc: "E-learning platforms, student management, and more for modern education. We create interactive classrooms, automate grading, and provide tools for teachers, students, and parents to connect and succeed. Our solutions foster engagement and make learning accessible for all, whether in-person or remote.",
  },
  {
    key: "events",
    label: "Events",
    title: "Event Management",
    subtitle: "Making every event unforgettable.",
    image: "/work/events.png",
    desc: "Ticketing, scheduling, and attendee engagement for events of all sizes. Our solutions help you manage registrations, send reminders, and create memorable experiences for your audience. From virtual to in-person, we make event management effortless and impactful.",
  },
  {
    key: "hospital",
    label: "Hospital",
    title: "Hospital Solutions",
    subtitle: "Empowering better health with technology.",
    image: "/work/Hospital (1).png",
    desc: "Digital solutions for hospitals, clinics, and health startups. We streamline patient management, appointment scheduling, and telemedicine, ensuring efficient and compassionate care. Our platforms are secure, scalable, and designed for modern healthcare needs, improving outcomes for both patients and providers.",
  },
  {
    key: "insurance",
    label: "Insurance",
    title: "Insurance Tech",
    subtitle: "Securing futures with smart systems.",
    image: "/work/insurance.png",
    desc: "Digital onboarding, claims, and engagement for insurance providers. Our platforms simplify policy management, automate claims, and enhance customer trust with transparent processes. Deliver a seamless experience for both agents and policyholders, and stay ahead in a competitive market.",
  },
  {
    key: "portfolio",
    label: "Portfolio",
    title: "Portfolio Websites",
    subtitle: "Showcase your work with style.",
    image: "/work/portfolio.png",
    desc: "Personal and business portfolios that make a lasting impression. We design visually stunning sites to highlight your achievements, skills, and projects, helping you stand out online. Our solutions are easy to update, optimized for every device, and tailored to your unique brand.",
  },
  {
    key: "realestate",
    label: "Real Estate",
    title: "Real Estate Tech",
    subtitle: "Modernizing property experiences.",
    image: "/work/realestate.png",
    desc: "Listings, virtual tours, and CRM for real estate businesses. Our solutions make it easy to manage properties, connect with buyers, and provide immersive viewing experiences. Streamline your workflow, close deals faster, and offer clients a modern, digital-first approach.",
  },
  {
    key: "restaurant",
    label: "Restaurant",
    title: "Restaurant Experience",
    subtitle: "Serving up seamless digital dining.",
    image: "/work/restaurant.png",
    desc: "Menus, reservations, and loyalty apps for restaurants and cafes. We help you streamline orders, manage tables, and engage diners with special offers and feedback tools. Delight your guests and optimize your operations with our restaurant tech, designed for efficiency and growth.",
  },
  {
    key: "school",
    label: "School",
    title: "School Management",
    subtitle: "Smart solutions for schools.",
    image: "/work/school.png",
    desc: "Attendance, grading, and communication tools for schools. Our platforms connect teachers, students, and parents, making administration and learning more efficient and collaborative. Empower your school community with our all-in-one solution for modern education.",
  },
  {
    key: "travels",
    label: "Travels",
    title: "Travel & Adventure",
    subtitle: "Journeys begin with a single tap.",
    image: "/work/travels.png",
    desc: "Our travel solutions simplify bookings, itineraries, and customer engagement, so your clients can focus on the adventure. We provide tools for agencies, tour operators, and travelers alike, making every journey smooth and memorable. Enhance your travel business with digital innovation.",
  },
  {
    key: "bakery",
    label: "Bakery",
    title: "Bakery Solutions",
    subtitle: "Fresh digital experiences for bakeries.",
    image: "/work/bakery.png",
    desc: "We help bakeries grow with online ordering, loyalty programs, and beautiful digital menus. Our solutions streamline daily operations, enhance customer engagement, and make it easy to showcase your latest treats online. From inventory tracking to customer feedback, we provide everything you need to rise above the competition.",
  },
  {
    key: "carrental",
    label: "Car Rental",
    title: "Car Rental Services",
    subtitle: "Drive your business forward.",
    image: "/work/carrental.png",
    desc: "Booking, fleet management, and customer engagement for modern car rental companies. Our platforms simplify reservations, automate billing, and provide real-time vehicle tracking for a smooth rental experience. Enhance customer satisfaction and streamline your operations with our tailored solutions.",
  },
  {
    key: "gaming",
    label: "Gaming",
    title: "Gaming Platforms",
    subtitle: "Level up your digital play.",
    image: "/work/gaming.jpg",
    desc: "Community, leaderboards, and engagement tools for gaming brands. We build immersive platforms that connect players, track achievements, and foster vibrant gaming communities. Our solutions support tournaments, live streams, and social features for maximum engagement.",
  },
  {
    key: "gym",
    label: "Gym",
    title: "Gym & Fitness",
    subtitle: "Empowering healthy lifestyles.",
    image: "/work/gym.png",
    desc: "Membership management, class bookings, and digital engagement for gyms and fitness centers. Our tools help you retain members, schedule sessions, and offer personalized fitness journeys. Motivate your community and streamline your operations with our fitness tech.",
  },
];

const MAIN_CATEGORIES = categories.slice(0, 5);
const MORE_CATEGORIES = categories.slice(5);

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

export const WorkSection = () => {
  const [active, setActive] = useState(categories[0].key);
  const [showMore, setShowMore] = useState(false);
  const current = categories.find((cat) => cat.key === active)!;

  return (
    <>
      {/* Next Section: Overview & Category Cards */}
      <motion.section
       className="w-full flex flex-col lg:flex-row items-center justify-center py-12 md:py-16 lg:py-20 min-[2560px]:py-32 gap-8 md:gap-10 lg:gap-12 min-[2560px]:gap-20 max-w-6xl min-[2560px]:max-w-[2400px] mx-auto px-4 md:px-6 min-[2560px]:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Left: Title, Subtitle, Description */}
        <motion.div
          className="flex-1 flex flex-col items-start lg:items-start md:items-center justify-center w-full"
          variants={fadeUp}
          custom={0}
        >
          <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl min-[2560px]:text-7xl font-bold text-white mb-3 md:mb-4 min-[2560px]:mb-8 md:text-center lg:text-left"
            variants={fadeUp}
            custom={0.1}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Explore</span> Our Solutions
          </motion.h2>
          <motion.p
             className="text-lg md:text-xl min-[2560px]:text-3xl text-gray-400 mb-2 md:mb-3 min-[2560px]:mb-6 md:text-center lg:text-left"
            variants={fadeUp}
            custom={0.2}
          >
            A digital edge for every industry
          </motion.p>
          <motion.p
            className="text-gray-300 text-base md:text-lg min-[2560px]:text-2xl leading-relaxed md:text-center lg:text-left min-[2560px]:max-w-[1000px]"
            variants={fadeUp}
            custom={0.3}
          >
            We deliver tailored digital solutions for a wide range of industries. Whether you run a cafe, manage a hospital, or lead an e-commerce brand, our expertise helps you innovate, streamline, and grow. Discover how we can empower your business with technology.
          </motion.p>
        </motion.div>

        {/* Right: Category Cards */}
        <div className="flex-1 w-full max-w-2xl lg:max-w-none">
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 min-[2560px]:grid-cols-5 gap-3 md:gap-4 lg:gap-6 min-[2560px]:gap-8 w-full">
            {iconCategories.map((cat, idx) => (
              <motion.div
                key={cat.key}
                className="bg-gradient-to-br from-[#2d2a4a] to-[#1a1833] rounded-lg md:rounded-xl shadow-lg p-3 md:p-4 lg:p-5 min-[2560px]:p-8 flex flex-col items-center justify-center hover:scale-105 transition cursor-pointer min-h-[100px] md:min-h-[120px] min-[2560px]:min-h-[180px]"
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.97, rotate: 2 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUp}
                custom={idx}
              >
                <motion.div
                     className="mb-2 md:mb-3 min-[2560px]:mb-6"
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span role="img" aria-label={cat.title}  className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16 text-white">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        width={32}
                        height={32}
                         className="w-8 h-8 md:w-10 md:h-10 min-[2560px]:w-16 min-[2560px]:h-16"
                      />
                    ) : (
                      categoryEmojis[cat.key] || "🌟"
                    )}
                  </span>
                </motion.div>
                <motion.div
                  className="text-sm md:text-base lg:text-lg min-[2560px]:text-2xl font-semibold text-white text-center leading-tight"
                  variants={fadeUp}
                  custom={idx + 0.1}
                >
                  {cat.title}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};