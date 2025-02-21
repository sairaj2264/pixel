import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import Logo from "../assets/Pixel.Logo.png";

const HeaderPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative">
      {/* HEADER SECTION */}
      <motion.header
        className="p-4 flex flex-wrap justify-between items-center border-b border-indigo-400 bg-white/10 dark:bg-gray-900/80 backdrop-blur-lg fixed top-0 z-50 shadow-md w-screen"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="w-40 md:w-48 h-12 md:h-16 cursor-pointer flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Logo} alt="Pixel Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          className="text-lg md:text-2xl font-semibold text-indigo-600 dark:text-indigo-300 text-center  flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your Mental Health Matters 💙
        </motion.p>

        {/* Dark Mode Toggle */}
        <motion.button
          className="p-2 rounded-full bg-indigo-500 dark:bg-gray-800 hover:bg-indigo-700 dark:hover:bg-gray-600 transition flex-shrink-0"
          onClick={() => setDarkMode(!darkMode)}
          whileTap={{ rotate: 180 }}
        >
          {darkMode ? <Moon className="text-white" /> : <Sun className="text-yellow-300" />}
        </motion.button>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-600 text-white py-28 md:py-28 ">
        <div className="container mx-auto text-center mt-240 px-12 md:px-12">
          {/* Animated Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-100 to-indigo-400 bg-clip-text text-transparent p-4 mb-25"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            ~ We Are Better Together ~
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-lg md:text-2xl mt-1 mb-40 bg-gradient-to-r from-purple-100 to-blue-400 bg-clip-text text-transparent"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Whether you’re struggling with anxiety, depression, stress, or just need someone to talk to, you are not alone.
          </motion.p>
        </div>

        {/* Wave Design for Aesthetic Touch */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="white"
              d="M0,224L40,192C80,160,160,96,240,96C320,96,400,160,480,197.3C560,235,640,245,720,234.7C800,224,880,192,960,181.3C1040,171,1120,181,1200,170.7C1280,160,1360,128,1400,112L1440,96V320H1400C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320H0Z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
