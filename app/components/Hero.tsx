'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChess, FaCode, FaBrain } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiPytorch } from 'react-icons/si'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentText, setCurrentText] = useState(0)
  const texts = [
    'Software Engineer',
    'AI/ML Researcher',
    'Full-Stack Developer',
    'Computer Science Student',
    'Mathematics Enthusiast',
    'Chess Player',
    'Problem Solver'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Main Content */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            variants={floatingVariants}
            animate="animate"
          >
            Hi, I'm{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Archith
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gradient"
            >
              {texts[currentText]}
            </motion.span>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            Computer Science & Mathematics student at Georgia Tech. Passionate about building 
            intelligent systems, solving complex problems, and creating innovative solutions 
            that make a difference.
          </motion.p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center space-x-8 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-4xl text-blue-400"
          >
            <SiPython />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-4xl text-yellow-400"
          >
            <SiJavascript />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-4xl text-cyan-400"
          >
            <SiReact />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-4xl text-orange-400"
          >
            <SiTensorflow />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-4xl text-red-400"
          >
            <SiPytorch />
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="https://drive.google.com/file/d/1BH0Vv6n6EuCeGZ5b_Qun0ifYPvhNMqgy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
          >
            <FaDownload className="group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 flex items-center space-x-2 cursor-pointer"
          >
            <FaEnvelope className="group-hover:animate-pulse" />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mt-12"
        >
          <motion.a
            href="https://github.com/archithvenkatesh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/archithvenkatesh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </motion.a>
          <motion.a
            href="mailto:avenkatesh68@gatech.edu"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 hover:text-red-400 transition-colors duration-300"
          >
            <FaEnvelope size={28} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
