'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaBrain, FaRocket } from 'react-icons/fa'
import { SiPython, SiJavascript, SiReact, SiPytorch, SiOpenai, SiCss3, SiHtml5 } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Skin Cancer Detection System',
      subtitle: 'UGAHacks • February 2025',
      description: 'Created skin cancer detection system using CNN with PyTorch achieving 87% accuracy on skin images. Built React healthcare interface with real-time predictions and confidence scoring for medical professionals.',
      features: [
        '87% accuracy on skin cancer detection',
        'Real-time predictions with confidence scoring',
        'React healthcare interface for medical professionals',
        'Data augmentation techniques reducing overfitting by 15%'
      ],
      technologies: ['JavaScript', 'React', 'PyTorch', 'CNN', 'Healthcare AI'],
      icons: [SiJavascript, SiReact, SiPytorch, FaBrain],
      color: 'from-red-500 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Job Listing Diversity Filter',
      subtitle: 'HackGTX • October 2024',
      description: 'Built job listing scraper using Python and HTTP requests integrated with OpenAI API for diversity filtering. Constructed responsive UI with Bootstrap and PyTorch backend for real-time data flow.',
      features: [
        'Automated job posting analysis',
        'OpenAI API integration for diversity filtering',
        'Real-time data flow and structured outputs',
        'Responsive Bootstrap UI'
      ],
      technologies: ['Python', 'PyTorch', 'OpenAI API', 'Bootstrap', 'Web Scraping'],
      icons: [SiPython, SiPytorch, SiOpenai, FaCode],
      color: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Legal Document Translator',
      subtitle: 'BoilerMake • February 2024',
      description: 'Developed law translation web app using OpenAI API converting legal documents to simplified summaries. Built interactive React frontend with file upload, highlighting, and Bootstrap improving user engagement by 70%.',
      features: [
        'Legal document to simplified summary conversion',
        'Interactive React frontend with file upload',
        'Document highlighting and annotation',
        '70% improvement in user engagement'
      ],
      technologies: ['JavaScript', 'React', 'OpenAI API', 'HTML/CSS', 'Bootstrap'],
      icons: [SiJavascript, SiReact, SiOpenai, SiHtml5],
      color: 'from-purple-500 to-indigo-500',
      github: '#',
      demo: '#'
    }
  ]

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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Innovative projects showcasing AI/ML expertise, full-stack development, and problem-solving skills
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      {project.icons.map((Icon, iconIndex) => (
                        <motion.div
                          key={iconIndex}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          className="text-2xl text-blue-400"
                        >
                          <Icon />
                        </motion.div>
                      ))}
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                      <FaRocket className="text-white text-lg" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <FaGithub className="group-hover:animate-pulse" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <FaExternalLinkAlt className="group-hover:animate-bounce" />
                    <span>Demo</span>
                  </motion.a>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a
              href="https://github.com/archithvenkatesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <FaGithub className="group-hover:animate-pulse" />
              <span>View More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
