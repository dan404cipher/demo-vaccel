


// "use client";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// // Bundle data organized by categories
// const BUNDLE_CATEGORIES = {
//     "Text & Language": [
//         {
//             name: "AI Text Generator",
//             description: "Generate high-quality text content for your business needs with advanced AI technology.",
//             slug: "text-generator"
//         },
//         {
//             name: "Language Translation",
//             description: "Translate text between multiple languages with contextual accuracy.",
//             slug: "translation"
//         },
//         {
//             name: "Sentiment Analysis",
//             description: "Understand emotions and opinions in text data with advanced NLP.",
//             slug: "sentiment-analysis"
//         }
//     ],
//     "Computer Vision": [
//         {
//             name: "Vision API",
//             description: "Analyze images and extract valuable insights with our powerful computer vision API.",
//             slug: "vision-api"
//         },
//         {
//             name: "Image Recognition",
//             description: "Identify objects, faces, and scenes in images with high accuracy.",
//             slug: "image-recognition"
//         }
//     ],
//     "Audio Processing": [
//         {
//             name: "Speech Recognition",
//             description: "Convert speech to text with industry-leading accuracy and real-time processing.",
//             slug: "speech-recognition"
//         },
//         {
//             name: "Voice Synthesis",
//             description: "Generate natural-sounding speech from text with multiple voice options.",
//             slug: "voice-synthesis"
//         },
//         {
//             name: "Audio Analysis",
//             description: "Analyze audio content for insights, emotions, and key information.",
//             slug: "audio-analysis"
//         }
//     ],
//     "Data & Analytics": [
//         {
//             name: "Data Analytics",
//             description: "Transform raw data into actionable insights with AI-powered analytics.",
//             slug: "data-analytics"
//         },
//         {
//             name: "Predictive Modeling",
//             description: "Forecast trends and outcomes using advanced machine learning algorithms.",
//             slug: "predictive-modeling"
//         },
//         {
//             name: "Business Intelligence",
//             description: "Make data-driven decisions with comprehensive BI tools and dashboards.",
//             slug: "business-intelligence"
//         }
//     ]
// };

// // Animation variants
// const fadeUp = {
//     hidden: { 
//         opacity: 0, 
//         y: 30, 
//         scale: 0.95
//     },
//     visible: (delay = 0) => ({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             delay: delay,
//             duration: 0.6,
//             ease: [0.25, 0.1, 0.25, 1],
//             type: "spring",
//             stiffness: 100,
//             damping: 15
//         },
//     }),
// };

// const dropdownVariants = {
//     hidden: { 
//         opacity: 0,
//         height: 0,
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     },
//     visible: { 
//         opacity: 1,
//         height: "auto",
//         transition: {
//             duration: 0.4,
//             ease: "easeOut"
//         }
//     }
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: (index) => ({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             delay: index * 0.1,
//             duration: 0.4,
//             ease: "easeOut"
//         }
//     })
// };

// const AISaasBundle = () => {
//     const [openCategory, setOpenCategory] = useState(null); // Only one category open at a time
//     const categoryRefs = useRef({});
//     const observerRef = useRef(null);

//     // Handle manual toggle - close if already open, otherwise open the clicked one
//     const toggleCategory = (category) => {
//         setOpenCategory(prev => prev === category ? null : category);
//     };

//     // Intersection Observer for auto-opening sections
//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: '-20% 0px -60% 0px', // Trigger when section is 20% from top and 60% from bottom
//             threshold: 0.1
//         };

//         observerRef.current = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const categoryName = entry.target.getAttribute('data-category');
//                     if (categoryName && openCategory !== categoryName) {
//                         setOpenCategory(categoryName);
//                     }
//                 }
//             });
//         }, options);

//         // Observe all category elements
//         Object.keys(BUNDLE_CATEGORIES).forEach(category => {
//             const element = categoryRefs.current[category];
//             if (element) {
//                 observerRef.current.observe(element);
//             }
//         });

//         return () => {
//             if (observerRef.current) {
//                 observerRef.current.disconnect();
//             }
//         };
//     }, [openCategory]);

//     return (
//         <section className="py-12 px-4 w-full max-w-none mx-auto mt-20 md:mt-32 lg:mt-40">
//             <motion.h1
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//                 className="text-4xl md:text-6xl text-gray-200 font-bold text-center mb-12"
//             >
//                 AI{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                     SaaS Bundle
//                 </span>
//             </motion.h1>

//             {/* Dropdown Categories */}
//             <div className="space-y-6 max-w-6xl mx-auto">
//                 {Object.entries(BUNDLE_CATEGORIES).map(([category, bundles], categoryIndex) => (
//                     <motion.div
//                         key={category}
//                         ref={el => categoryRefs.current[category] = el}
//                         data-category={category}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         variants={fadeUp}
//                         custom={categoryIndex * 0.1}
//                         className="border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
//                     >
//                         {/* Category Header */}
//                         <button
//                             onClick={() => toggleCategory(category)}
//                             className="w-full flex items-center justify-between p-8 hover:bg-gray-800/50 transition-all duration-300 group"
//                         >
//                             <div className="flex items-center justify-between w-full">
//                                 <h2 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition-colors">
//                                     {category}
//                                 </h2>
//                                 <div className="flex items-center gap-6">
//                                     <span className="text-sm text-gray-400 bg-gray-800/80 px-4 py-2 rounded-full border border-gray-600">
//                                         {bundles.length}
//                                     </span>
//                                     {openCategory === category ? (
//                                         <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
//                                     ) : (
//                                         <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
//                                     )}
//                                 </div>
//                             </div>
//                         </button>

//                         {/* Category Content */}
//                         <AnimatePresence>
//                             {openCategory === category && (
//                                 <motion.div
//                                     variants={dropdownVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                     exit="hidden"
//                                     className="border-t border-gray-700"
//                                 >
//                                     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                         {bundles.map((bundle, index) => (
//                                             <motion.div
//                                                 key={bundle.slug}
//                                                 custom={index}
//                                                 variants={cardVariants}
//                                                 initial="hidden"
//                                                 animate="visible"
//                                                 whileHover={{ 
//                                                     scale: 1.02, 
//                                                     y: -2,
//                                                     transition: { duration: 0.2 }
//                                                 }}
//                                                 className="relative border border-gray-600 rounded-xl p-5 
//                                                          bg-gray-800/30 backdrop-blur-sm
//                                                          hover:border-purple-500/50 hover:bg-gray-800/50
//                                                          transition-all duration-300 group cursor-pointer"
//                                             >
//                                                 <h3 className="text-lg font-semibold text-white mb-3 
//                                                                group-hover:text-purple-400 transition-colors">
//                                                     {bundle.name}
//                                                 </h3>
                                                
//                                                 <p className="text-gray-300 text-sm leading-relaxed mb-5 
//                                                               group-hover:text-gray-200 transition-colors">
//                                                     {bundle.description}
//                                                 </p>
                                                
//                                                 <Link
//                                                     href="/contact"
//                                                     className="inline-block w-full text-center px-4 py-2.5 
//                                                                text-sm font-medium text-white
//                                                                bg-gradient-to-r from-purple-500 to-cyan-600
//                                                                hover:from-purple-600 hover:to-cyan-700
//                                                                rounded-lg transition-all duration-300
//                                                                hover:shadow-lg hover:shadow-purple-500/25
//                                                                focus:outline-none focus:ring-2 focus:ring-purple-500 
//                                                                focus:ring-offset-2 focus:ring-offset-gray-900"
//                                                 >
//                                                     Know More
//                                                 </Link>
//                                             </motion.div>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </AnimatePresence>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default AISaasBundle;




// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// // Bundle data organized by categories
// const BUNDLE_CATEGORIES = {
//     "Business Operations": [
//         {
//             name: "LeadAccel – Lead Management System",
//             description: "Capture, nurture, and convert leads with smart tracking and segmentation.",
//             slug: "text-generator"
//         },
//         {
//             name: "SalesAccel – Sales Pipeline & Conversion Tracker",
//             description: "Manage your sales pipeline and improve conversions with actionable insights.",
//             slug: "translation"
//         },
//         {
//             name: "FinAccel – Finance & Expense Monitoring",
//             description: "Monitor expenses, plan budgets, and track financial performance in real-time.",
//             slug: "sentiment-analysis"
//         },
//          {
//             name: "PayrolAccel – Payroll Automation",
//             description: "Automate payroll, tax compliance, and benefits with minimal effort.",
//             slug: "translation"
//         },
//         {
//             name: "AssetAccel – Asset Tracking & Management",
//             description: "Track and manage all assets efficiently to ensure accountability and reduce losses.",
//             slug: "sentiment-analysis"
//         }
//     ],
//     "People & Talent": [
//         {
//             name: "HireAccel – Smart Hiring Platform",
//             description: "Streamline hiring with AI-driven screening, scheduling, and onboarding.",
//             slug: "vision-api"
//         },
//         {
//             name: "HRAccel – Human Resource Management",
//             description: "Manage HR operations including attendance, benefits, and employee records.",
//             slug: "image-recognition"
//         },
//         {
//             name: "PeopleAccel – Employee Lifecycle Tracking",
//             description: " Track the complete employee journey with performance and engagement tools.",
//             slug: "sentiment-analysis"
//         },
//          {
//             name: "TrainAccel – Training & Upskilling Hub",
//             description: "Upskill your teams with curated training and certification programs.",
//             slug: "translation"
//         },
//         {
//             name: "AlumniAccel – Alumni Engagement Platform",
//             description: "Engage alumni for networking, referrals, and rehiring opportunities.",
//             slug: "sentiment-analysis"
//         }
//     ],
//     "Project & Productivity": [
//         {
//             name: "ProjectAccel – Agile Project Management",
//             description: " Run agile projects with sprint planning and collaborative workflows.",
//             slug: "speech-recognition"
//         },
//         {
//             name: "WorkAccel – Daily Task & Work Logs",
//             description: "Track daily tasks and work hours to boost team productivity.",
//             slug: "voice-synthesis"
//         },
//         {
//             name: "IdeaAccel – Idea Submission & Incubation",
//             description: " Collect and incubate innovative ideas from your team.",
//             slug: "audio-analysis"
//         },
//         {
//             name: "ClientAccel – Client Relationship Management",
//             description: "Manage client relationships with smart tracking and analytics.",
//             slug: "audio-analysis"
//         }
//     ],
//     "Support & Service": [
//         {
//             name: "SupportAccel – Ticketing & Support Suite",
//             description: "Resolve customer issues quickly with a powerful ticketing system.",
//             slug: "data-analytics"
//         },
//         {
//             name: "SmarEnrolAccel – Smart Enrollment Automation",
//             description: "Automate enrollment workflows to boost speed and accuracy.",
//             slug: "predictive-modeling"
//         }
//     ]
// };

// // Animation variants
// const fadeUp = {
//     hidden: { 
//         opacity: 0, 
//         y: 30, 
//         scale: 0.95
//     },
//     visible: (delay = 0) => ({
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             delay: delay,
//             duration: 0.6,
//             ease: [0.25, 0.1, 0.25, 1],
//             type: "spring",
//             stiffness: 100,
//             damping: 15
//         },
//     }),
// };

// const dropdownVariants = {
//     hidden: { 
//         opacity: 0,
//         height: 0,
//         transition: {
//             duration: 0.3,
//             ease: "easeInOut"
//         }
//     },
//     visible: { 
//         opacity: 1,
//         height: "auto",
//         transition: {
//             duration: 0.4,
//             ease: "easeOut"
//         }
//     }
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0.95 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             duration: 0.4,
//             ease: "easeOut"
//         }
//     }
// };

// const containerVariants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.1
//         }
//     }
// };

// const AISaasBundle = () => {
//     const [openCategories, setOpenCategories] = useState({});

//     const toggleCategory = (category) => {
//         setOpenCategories(prev => ({
//             ...prev,
//             [category]: !prev[category]
//         }));
//     };

//     const handleKnowMore = () => {
//         window.location.href = "/contact"; // Redirect to contact page
//     };

//     return (
//         <div className="min-h-screen ">
//             <section className="py-12 px-4 w-full max-w-none mx-auto mt-20 md:mt-32 lg:mt-40">
//                 <motion.h1
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={fadeUp}
//                     className="text-4xl md:text-6xl text-gray-200 font-bold text-center mb-12"
//                 >
                   
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//                        aaS Bundle 
//                     </span>
//                    {" "} - Accel EcoSystem
//                 </motion.h1>

//                 {/* Dropdown Categories */}
//                 <div className="space-y-6 max-w-6xl mx-auto">
//                     {Object.entries(BUNDLE_CATEGORIES).map(([category, bundles], categoryIndex) => (
//                         <motion.div
//                             key={category}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             variants={fadeUp}
//                             custom={categoryIndex * 0.1}
//                             className="border border-gray-700 rounded-2xl overflow-hidden shadow-xl "
//                         >
//                             {/* Category Header */}
//                             <button
//                                 onClick={() => toggleCategory(category)}
//                                 className="w-full flex items-center justify-between p-8 hover:bg-gray-800/50 transition-all duration-300 group"
//                             >
//                                 <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition-colors">
//                                     {category}
//                                 </h3>
//                                 <div className="flex items-center gap-6">
//                                     <span className="text-sm text-gray-400 bg-gray-800/80 px-4 py-2 rounded-full border border-gray-600">
//                                         {bundles.length}
//                                     </span>
//                                     {openCategories[category] ? (
//                                         <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
//                                     ) : (
//                                         <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
//                                     )}
//                                 </div>
//                             </button>

//                             {/* Category Content */}
//                             <AnimatePresence>
//                                 {openCategories[category] && (
//                                     <motion.div
//                                         variants={dropdownVariants}
//                                         initial="hidden"
//                                         animate="visible"
//                                         exit="hidden"
//                                         className="border-t border-gray-700"
//                                     >
//                                         <motion.div
//                                             variants={containerVariants}
//                                             initial="hidden"
//                                             animate="visible"
//                                             className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
//                                         >
//                                             {bundles.map((bundle, index) => (
//                                                 <motion.div
//                                                     key={bundle.slug}
//                                                     variants={cardVariants}
//                                                     whileHover={{ 
//                                                         scale: 1.02, 
//                                                         y: -2,
//                                                         transition: { duration: 0.2 }
//                                                     }}
//                                                     className="relative border border-gray-600 rounded-xl p-5 
//                                                              bg-gray-800/30 backdrop-blur-sm
//                                                              hover:border-purple-500/50 hover:bg-gray-800/50
//                                                              transition-all duration-300 group cursor-pointer
//                                                              flex flex-col h-full"
//                                                 >
//                                                     <div className="flex-grow">
//                                                         <h3 className="text-2xl font-semibold text-white mb-3 
//                                                                        group-hover:text-purple-400 transition-colors">
//                                                             {bundle.name}
//                                                         </h3>
                                                        
//                                                         <p className="text-gray-300 text-sm leading-relaxed mb-5 
//                                                                       group-hover:text-gray-200 transition-colors">
//                                                             {bundle.description}
//                                                         </p>
//                                                     </div>
                                                    
//                                                     <button
//                                                         onClick={handleKnowMore}
//                                                         className="w-full text-center px-4 py-2.5 
//                                                                    text-sm font-medium text-white
//                                                                    bg-gradient-to-r from-purple-500 to-cyan-600
//                                                                    hover:from-purple-600 hover:to-cyan-700
//                                                                    rounded-lg transition-all duration-300
//                                                                    hover:shadow-lg hover:shadow-purple-500/25
//                                                                    focus:outline-none focus:ring-2 focus:ring-purple-500 
//                                                                    focus:ring-offset-2 focus:ring-offset-gray-900
//                                                                    mt-auto"
//                                                     >
//                                                         Know More
//                                                     </button>
//                                                 </motion.div>
//                                             ))}
//                                         </motion.div>
//                                     </motion.div>
//                                 )}
//                             </AnimatePresence>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AISaasBundle;



"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { title } from "process";

// Bundle data organized by categories
const BUNDLE_CATEGORIES = {
  "Business Operations": [
    {
      name: "LeadAccel",
      dis: "Lead Management System",
      description: "Capture, nurture, and convert leads with smart tracking and segmentation.",
      slug: "text-generator"
    },
    {
      name: "SalesAccel",
      dis: "Sales Pipeline & Conversion Tracker",
      description: "Manage your sales pipeline and improve conversions with actionable insights.",
      slug: "translation"
    },
    {
      name: "FinAccel",
      dis: "Finance & Expense Monitoring",
      description: "Monitor expenses, plan budgets, and track financial performance in real time.",
      slug: "sentiment-analysis"
    },
    {
      name: "PayrollAccel",
      dis: "Payroll Automation",
      description: "Automate payroll, tax compliance, and benefits with minimal effort.",
      slug: "translation"
    },
    {
      name: "AssetAccel",
      dis: "Asset Tracking & Management",
      description: "Track and manage all assets efficiently to ensure accountability and reduce losses.",
      slug: "sentiment-analysis"
    }
  ],
  "People & Talent": [
    {
      name: "HireAccel",
      dis: "Smart Hiring Platform",
      description: "Streamline hiring with AI-driven screening, scheduling, and onboarding.",
      slug: "vision-api"
    },
    {
      name: "HRAccel",
      dis: "Human Resource Management",
      description: "Manage HR operations including attendance, benefits, and employee records.",
      slug: "image-recognition"
    },
    {
      name: "PeopleAccel",
      dis: "Employee Lifecycle Tracking",
      description: "Track the complete employee journey with performance and engagement tools.",
      slug: "sentiment-analysis"
    },
    {
      name: "TrainAccel",
      dis: "Training & Upskilling Hub",
      description: "Upskill your teams with curated training and certification programs.",
      slug: "translation"
    },
    {
      name: "AlumniAccel",
      dis: "Alumni Engagement Platform",
      description: "Engage alumni for networking, referrals, and rehiring opportunities.",
      slug: "sentiment-analysis"
    }
  ],
  "Project & Productivity": [
    {
      name: "ProjectAccel",
      dis: "Agile Project Management",
      description: "Run agile projects with sprint planning and collaborative workflows.",
      slug: "speech-recognition"
    },
    {
      name: "WorkAccel",
      dis: "Daily Task & Work Logs",
      description: "Track daily tasks and work hours to boost team productivity.",
      slug: "voice-synthesis"
    },
    {
      name: "IdeaAccel",
      dis: "Idea Submission & Incubation",
      description: "Collect and incubate innovative ideas from your team.",
      slug: "audio-analysis"
    },
    {
      name: "ClientAccel",
      dis: "Client Relationship Management",
      description: "Manage client relationships with smart tracking and analytics.",
      slug: "audio-analysis"
    }
  ],
  "Support & Service": [
    {
      name: "SupportAccel",
      dis: "Ticketing & Support Suite",
      description: "Resolve customer issues quickly with a powerful ticketing system.",
      slug: "data-analytics"
    },
    {
      name: "SmartEnrollAccel",
      dis: "Smart Enrollment Automation",
      description: "Automate enrollment workflows to boost speed and accuracy.",
      slug: "predictive-modeling"
    }
  ]
};


// Animation variants
const fadeUp = {
    hidden: { 
        opacity: 0, 
        y: 30, 
        scale: 0.95
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: delay,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 15
        },
    }),
};

// Enhanced dropdown variants with smoother transitions
const dropdownVariants = {
    hidden: { 
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.3 }
        }
    },
    visible: { 
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 0.4, delay: 0.1 }
        }
    }
};

// Enhanced card variants with staggered entrance
const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: index * 0.08, // Stagger each card
            ease: [0.25, 0.1, 0.25, 1],
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    })
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06, // Reduced for smoother stagger
            delayChildren: 0.1
        }
    }
};

const AISaasBundle = () => {
    const [openCategories, setOpenCategories] = useState({});
    const [autoOpenedCategories, setAutoOpenedCategories] = useState(new Set());
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const categoryRefs = useRef({});
    const contentRefs = useRef({});
    const categoryKeys = Object.keys(BUNDLE_CATEGORIES);

    const toggleCategory = (category) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleKnowMore = () => {
        window.location.href = "/contact"; // Redirect to contact page
    };

    // Enhanced auto-scroll functionality with smooth sequential opening
    useEffect(() => {
        const handleScroll = () => {
            if (isAutoScrolling) return; // Prevent interference during auto-scroll

            categoryKeys.forEach((category, index) => {
                const categoryElement = categoryRefs.current[category];
                const contentElement = contentRefs.current[category];
                if (!categoryElement) return;

                const rect = categoryElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollPosition = window.scrollY;
                
                // Enhanced viewport detection
                const categoryTop = rect.top + scrollPosition;
                const categoryBottom = rect.bottom + scrollPosition;
                const viewportCenter = scrollPosition + windowHeight / 2;
                
                // Check if category header is approaching viewport center
                const isHeaderInView = rect.top < windowHeight * 0.7 && rect.top > -100;
                
                // Auto-open current category when header comes into view
                if (isHeaderInView && !autoOpenedCategories.has(category)) {
                    setIsAutoScrolling(true);
                    
                    setTimeout(() => {
                        setOpenCategories(prev => ({
                            ...prev,
                            [category]: true
                        }));
                        setAutoOpenedCategories(prev => new Set([...prev, category]));
                        
                        setTimeout(() => {
                            setIsAutoScrolling(false);
                        }, 600); // Match animation duration
                    }, 200);
                }

                // Check if we've scrolled through the content of an open section
                if (openCategories[category] && contentElement) {
                    const contentRect = contentElement.getBoundingClientRect();
                    const hasScrolledThroughContent = contentRect.bottom < windowHeight * 0.5;
                    
                    // Open next section when current content is mostly scrolled through
                    if (hasScrolledThroughContent && !isAutoScrolling) {
                        const nextIndex = index + 1;
                        if (nextIndex < categoryKeys.length) {
                            const nextCategory = categoryKeys[nextIndex];
                            if (!openCategories[nextCategory] && !autoOpenedCategories.has(nextCategory)) {
                                setIsAutoScrolling(true);
                                
                                setTimeout(() => {
                                    setOpenCategories(prev => ({
                                        ...prev,
                                        [nextCategory]: true
                                    }));
                                    setAutoOpenedCategories(prev => new Set([...prev, nextCategory]));
                                    
                                    setTimeout(() => {
                                        setIsAutoScrolling(false);
                                    }, 600);
                                }, 300);
                            }
                        }
                    }
                }
            });
        };

        // Use requestAnimationFrame for smoother scroll handling
        let ticking = false;
        const optimizedScrollHandler = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
        return () => window.removeEventListener('scroll', optimizedScrollHandler);
    }, [openCategories, autoOpenedCategories, categoryKeys, isAutoScrolling]);

    // Auto-open first category when component comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const firstCategory = categoryKeys[0];
                        if (firstCategory && !openCategories[firstCategory] && !autoOpenedCategories.has(firstCategory)) {
                            setTimeout(() => {
                                setOpenCategories(prev => ({
                                    ...prev,
                                    [firstCategory]: true
                                }));
                                setAutoOpenedCategories(prev => new Set([...prev, firstCategory]));
                            }, 800);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        const firstCategoryElement = categoryRefs.current[categoryKeys[0]];
        if (firstCategoryElement) {
            observer.observe(firstCategoryElement);
        }

        return () => observer.disconnect();
    }, [categoryKeys]);

    return (
        <div className="min-h-screen ">
            <section className="py-12 px-4 w-full max-w-none mx-auto mt-20 md:mt-32 lg:mt-40">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-6xl text-gray-200 font-bold text-center mb-12"
                >
                   
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                       AI SaaS Bundle - Accel EcoSystem
                    </span>
                   {/* {" "} - Accel EcoSystem */}
                </motion.h1>

                {/* Dropdown Categories */}
                <div className="space-y-6 max-w-6xl mx-auto">
                    {Object.entries(BUNDLE_CATEGORIES).map(([category, bundles], categoryIndex) => (
                        <motion.div
                            key={category}
                            ref={el => categoryRefs.current[category] = el}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={categoryIndex * 0.1}
                            className="border border-gray-700 rounded-2xl overflow-hidden shadow-xl "
                        >
                            {/* Category Header */}
                            <button
                                onClick={() => toggleCategory(category)}
                                className="w-full flex items-center justify-between p-8 hover:bg-gray-800/50 transition-all duration-300 group"
                            >
                                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                    {category}
                                </h3>
                                
                                <div className="flex items-center gap-6">
                                    <span className="text-sm text-gray-400 bg-gray-800/80 px-4 py-2 rounded-full border border-gray-600">
                                        {bundles.length}
                                    </span>
                                    {openCategories[category] ? (
                                        <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                                    )}
                                </div>
                            </button>

                            {/* Category Content */}
                            <AnimatePresence mode="wait">
                                {openCategories[category] && (
                                    <motion.div
                                        ref={el => contentRefs.current[category] = el}
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="border-t border-gray-700"
                                    >
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                        >
                                            {bundles.map((bundle, index) => (
                                                <motion.div
                                                    key={bundle.slug}
                                                    variants={cardVariants}
                                                    custom={index}
                                                    whileHover={{ 
                                                        scale: 1.02, 
                                                        y: -4,
                                                        transition: { 
                                                            duration: 0.3,
                                                            ease: [0.25, 0.1, 0.25, 1]
                                                        }
                                                    }}
                                                    className="relative border border-gray-600 rounded-xl p-5 
                                                             bg-gray-800/30 backdrop-blur-sm
                                                             hover:border-purple-500/50 hover:bg-gray-800/50
                                                             transition-all duration-300 group cursor-pointer
                                                             flex flex-col h-full"
                                                >
                                                    <div className="flex-grow">
                                                        <h3 className="text-2xl font-semibold   text-purple-400  mb-3 
                                                                   group-hover: transition-colors duration-300">
                                                            {bundle.name}
                                                        </h3>
                                                        <h2 className="text-xl font-semibold text-white mb-2">
                                                            <span className="text-white text-lg">
                                                                {bundle.dis}
                                                            </span>
                                                        </h2>
                                                        
                                                        <p className="text-gray-300 text-sm leading-relaxed mb-5 
                                                                      group-hover:text-gray-200 transition-colors duration-300">
                                                            {bundle.description}
                                                        </p>
                                                    </div>
                                                    
                                                    <button
                                                        onClick={handleKnowMore}
                                                        className="w-full text-center px-4 py-2.5 
                                                                   text-sm font-medium text-white
                                                                   bg-gradient-to-r from-purple-500 to-cyan-600
                                                                   hover:from-purple-600 hover:to-cyan-700
                                                                   rounded-lg transition-all duration-300
                                                                   hover:shadow-lg hover:shadow-purple-500/25
                                                                   focus:outline-none focus:ring-2 focus:ring-purple-500 
                                                                   focus:ring-offset-2 focus:ring-offset-gray-900
                                                                   mt-auto transform hover:scale-105"
                                                    >
                                                        Know More
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AISaasBundle;