'use client'

import { motion } from 'framer-motion'
import { FaChess, FaCode, FaBrain, FaGraduationCap, FaTrophy, FaMusic, FaDumbbell } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const interests = [
    { icon: FaChess, title: 'Chess', description: 'Top 15 Player in Georgia' },
    { icon: FaTrophy, title: 'AMC 10/12', description: 'Top 5% Nationally' },
    { icon: FaMusic, title: 'Classical Piano', description: 'Musical Expression' },
    { icon: FaDumbbell, title: 'Powerlifting', description: 'Physical Challenge' },
  ]

  const achievements = [
    { number: '3.81', label: 'GPA at Georgia Tech' },
    { number: '87%', label: 'AI Model Accuracy' },
    { number: '46%', label: 'Performance Improvement' },
    { number: '35%', label: 'Conversion Rate Increase' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Passionate Developer & Researcher
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Computer Science and Mathematics student at Georgia Tech with a passion for 
                building intelligent systems and solving complex problems. My journey combines 
                theoretical knowledge with practical experience in AI/ML, full-stack development, 
                and data science.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Currently pursuing dual degrees, I've gained hands-on experience through internships 
                at Agilysys, CREATE Labs, and ElysianLoop, where I've worked on everything from 
                real-time analytics dashboards to diagnostic imaging models.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <FaGraduationCap className="text-blue-400 text-2xl" />
                  <div>
                    <h5 className="text-lg font-semibold text-white">Georgia Institute of Technology</h5>
                    <p className="text-gray-400">Atlanta, GA • May 2027</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Bachelor of Science in Computer Science & Mathematics
                </p>
                <p className="text-blue-400 font-semibold">GPA: 3.81/4.0</p>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-6">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                  >
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interests & Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-6">Interests & Hobbies</h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center group hover:border-blue-400/50 transition-all duration-300"
                  >
                    <interest.icon className="text-3xl text-blue-400 mx-auto mb-3 group-hover:text-blue-300 transition-colors" />
                    <h5 className="text-white font-semibold mb-2">{interest.title}</h5>
                    <p className="text-gray-400 text-sm">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold text-white mb-6">Leadership</h4>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-1">Phi Sigma Kappa</h5>
                  <p className="text-gray-400 text-sm">Social Vice President</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-1">GT Chess Club</h5>
                  <p className="text-gray-400 text-sm">Vice President</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h5 className="text-white font-semibold mb-1">GT Trading Club</h5>
                  <p className="text-gray-400 text-sm">Active Member</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1.1, 1, 1.1]
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/20 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
